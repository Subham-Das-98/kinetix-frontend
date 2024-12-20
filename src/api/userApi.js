import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER_API_URI}/api/v1`,
  }),
  endpoints: (builder) => ({
    getChannelInfoAndStats: builder.query({
      query: (username) => `/channel/${username}`,
    }),
  }),
});

export const {
  useGetChannelInfoAndStatsQuery
} = userApi;
export default userApi;