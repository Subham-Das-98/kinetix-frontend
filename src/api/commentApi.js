import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants";

const commentApi = createApi({
  reducerPath: "commentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
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
