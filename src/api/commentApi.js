import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const commentApi = createApi({
  reducerPath: "commentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_NODE_SERVER_HOSTNAME}:${
      import.meta.env.VITE_NODE_SERVER_PORT
    }/api/v1`,
  }),
  endpoints: (builder) => ({
    addComment: builder.mutation({
      query: ({ refType, refId, content, accessToken }) => ({
        url: `/comment/add/${refType}/${refId}`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: { content },
      }),
    }),
    getAllCommentsByRefId: builder.query({
      query: (refId) => `/comment/all/${refId}`,
    }),
  }),
});

export const { useAddCommentMutation, useGetAllCommentsByRefIdQuery } =
  commentApi;

export default commentApi;
