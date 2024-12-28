import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const videoApi = createApi({
  reducerPath: "videoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER_API_HOSTNAME}:${
      import.meta.env.VITE_SERVER_API_PORT
    }/api/v1`,
  }),
  endpoints: (builder) => ({
    getVideosByRecommendation: builder.query({
      query: () => "/recommend/videos",
    }),
    getVideoById: builder.query({
      query: ({ username, id }) => `/watch/${username}/v_id/${id}`,
    }),
    getAllVideosByChannelName: builder.query({
      query: (username) => `/channel/${username}/videos`,
    }),
  }),
});

export const {
  useGetVideosByRecommendationQuery,
  useGetVideoByIdQuery,
  useGetAllVideosByChannelNameQuery,
} = videoApi;

export default videoApi;
