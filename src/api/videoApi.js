import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const videoApi = createApi({
  reducerPath: "videoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER_API_URI}/api/v1`,
  }),
  endpoints: (builder) => ({
    getVideosByRecommendation: builder.query({
      query: () => "/recommend/videos",
    }),
    getVideoById: builder.query({
      query: ({ username, id }) => `/watch/${username}/v_id/${id}`,
    }),
  }),
});

export const { useGetVideosByRecommendationQuery, useGetVideoByIdQuery } =
  videoApi;
export default videoApi;
