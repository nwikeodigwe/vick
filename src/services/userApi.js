import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCurrentUser } from "@/features/user/userSlice";
import { setAuthToken } from "@/features/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: `http://localhost:3000/api/user`,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    const refreshResult = await baseQuery(
      { url: "/refresh/token", method: "POST" },
      api,
      extraOptions
    );

    if (refreshResult.data) {
      api.dispatch(setAuthToken(refreshResult.data.token));
      result = await baseQuery(args, api, extraOptions);
    }
  }
  return result;
};

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (build) => ({
    getUser: build.query({
      query: () => "/me",
      keepUnusedDataFor: 60,
      async onQueryStarted(args, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setCurrentUser(data.user));
        } catch (error) {
          console.error("Error fetching user:", error);
        }
      },
    }),
    getUserById: build.query({
      query: (id) => "/" + id,
    }),
    getUserStyle: build.query({
      query: (user) => `${user}/style`,
    }),
    updateUser: build.mutation({
      query: (data) => ({
        url: "/me",
        method: "PATCH",
        body: data,
      }),
    }),
    getUserProfile: build.query({
      query: () => "/profile",
    }),
    subscribeToUser: build.mutation({
      query: (user) => ({
        url: "/subscribe" + user,
        method: "POST",
      }),
    }),
    unsubscribeFromUser: build.mutation({
      query: (user) => ({
        url: "/unsubscribe" + user,
        method: "DELETE",
      }),
    }),
    updateUserProfile: build.mutation({
      query: (data) => ({
        url: "/profile",
        method: "PATCH",
        body: data,
      }),
    }),
    changeUserPassword: build.mutation({
      query: (data) => ({
        url: "/password",
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetUserByIdQuery,
  useGetUserStyleQuery,
  useUpdateUserMutation,
  useGetUserProfileQuery,
  useSubscribeToUserMutation,
  useUnsubscribeFromUserMutation,
  useUpdateUserProfileMutation,
  useChangeUserPasswordMutation,
} = userApi;
