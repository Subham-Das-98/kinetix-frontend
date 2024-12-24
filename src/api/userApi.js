import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER_API_URI}/api/v1`,
  }),
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (formData) => ({
        url: "/user/register",
        method: "POST",
        body: formData,
      }),
    }),
    loginUser: builder.mutation({
      query: (formData) => ({
        url: "/user/login",
        method: "POST",
        body: formData,
        credentials: "include",
      }),
    }),
    logoutUser: builder.mutation({
      query: (accessToken) => ({
        url: "/user/logout",
        method: "POST",
        headers: {
          "Authorization": `Bearer ${accessToken}`
        }
      }),
    }),
    getChannelInfoAndStats: builder.query({
      query: (username) => `/channel/${username}`,
    }),
  }),
});

export const {
  useGetChannelInfoAndStatsQuery,
  useCreateUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
} = userApi;
export default userApi;
