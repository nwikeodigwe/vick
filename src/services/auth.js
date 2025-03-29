import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.REACT_APP_API_ENDPOINT}/auth`,
  }),
  endpoints: (build) => ({
    signinUser: build.mutation({
      query: (data) => ({
        url: "/signin",
        method: "POST",
        body: data,
      }),
    }),
    signupUser: build.mutation({
      query: (data) => ({
        url: "/signup",
        method: "POST",
        body: data,
      }),
    }),
    resetUser: build.mutation({
      query: (data) => ({
        url: "/reset",
        method: "POST",
        body: data,
      }),
    }),
    changePassword: build.mutation({
      query: ({ data, token }) => ({
        url: "/reset/" + token,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useSigninUserMutation,
  useSignupUserMutation,
  useResetUserMutation,
  useChangePasswordMutation,
} = authApi;
