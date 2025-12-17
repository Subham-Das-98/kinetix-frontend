import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";
import { setUploadProgress } from "../features/global/globalSlice";
import { BASE_URL } from "../constants.js";
console.log(BASE_URL);

const videoApi = createApi({
  reducerPath: "videoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getVideosByRecommendation: builder.query({
      query: () => "/recommend/videos",
    }),
    getVideoById: builder.query({
      query: ({ channelName, id, accessToken }) => ({
        url: `/watch/${channelName}/v_id/${id}`,
        headers: {
          Authorization: `Bearer ${accessToken || ""}`,
        },
      }),
    }),
    getAllVideosByChannelName: builder.query({
      query: (channelName) => `/channel/${channelName}/videos`,
    }),
    uploadVideo: builder.mutation({
      queryFn: async ({ username, data, accessToken }, api) => {
        const url =
          import.meta.env.VITE_NODE_ENV === "prod"
            ? `${
                import.meta.env.VITE_NODE_SERVER_HOSTNAME
              }/api/v1/channel/${username}/video/upload`
            : `${import.meta.env.VITE_NODE_SERVER_LOCAL_HOSTNAME}:${
                import.meta.env.VITE_NODE_SERVER_PORT
              }/api/v1/channel/${username}/video/upload`;

        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          onUploadProgress: (upload) => {
            let uploadProgress = Math.round(
              (upload.loaded / upload.total) * 100
            );
            api.dispatch(setUploadProgress(uploadProgress));
          },
        };

        try {
          const result = await axios.post(url, data, config);
          return { data: result.data };
        } catch (error) {
          return {
            error: {
              status: error.response?.status || 500,
              data: error.response?.data || error.message,
            },
          };
        }
      },
    }),
  }),
});

export const {
  useGetVideosByRecommendationQuery,
  useGetVideoByIdQuery,
  useGetAllVideosByChannelNameQuery,
  useUploadVideoMutation,
} = videoApi;

export default videoApi;
