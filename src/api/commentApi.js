import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const commentApi = createApi({
  reducerPath: "commentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER_API_HOSTNAME}:${import.meta.env.VITE_SERVER_API_PORT}/api/v1`,
  }),
  endpoints: (builder) => ({
    addComment: builder.mutation({
      query: ({refType, refId, content, accessToken}) => ({
        url:`/comment/add/${refType}/${refId}`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`
        },
        body: {content}
      })
    })
  })
});

export const {
  useAddCommentMutation
} = commentApi;

export default commentApi;