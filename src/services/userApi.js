import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCurrentUser } from "@/features/user/userSlice";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:3000/api/user`,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
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
