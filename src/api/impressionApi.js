import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const impressionApi = createApi({
  reducerPath: "impressionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_NODE_SERVER_HOSTNAME}:${
      import.meta.env.VITE_NODE_SERVER_PORT
    }/api/v1`,
  }),
  endpoints: (builder) => ({
    addLike: builder.mutation({
      query: ({ refType, refId, accessToken }) => ({
        url: `/impression/add/like/${refType}/${refId}`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken || ""}`,
        },
      }),
    }),
    addDislike: builder.mutation({
      query: ({ refType, refId, accessToken }) => ({
        url: `/impression/add/dislike/${refType}/${refId}`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken || ""}`,
        },
      }),
    }),
    deleteLike: builder.mutation({
      query: ({ refType, refId, accessToken }) => ({
        url: `/impression/delete/like/${refType}/${refId}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${accessToken || ""}`,
        },
      }),
    }),
    deleteDislike: builder.mutation({
      query: ({ refType, refId, accessToken }) => ({
        url: `/impression/delete/dislike/${refType}/${refId}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${accessToken || ""}`,
        },
      }),
    }),
  }),
});

export const {
  useAddLikeMutation,
  useAddDislikeMutation,
  useDeleteLikeMutation,
  useDeleteDislikeMutation,
} = impressionApi;

export default impressionApi;
