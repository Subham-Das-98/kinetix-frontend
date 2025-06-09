import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const subscriptionApi = createApi({
  reducerPath: "subscriptionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_NODE_SERVER_HOSTNAME}:${
      import.meta.env.VITE_NODE_SERVER_PORT
    }/api/v1`,
  }),
  endpoints: (builder) => ({
    subscribeChannel: builder.mutation({
      query: ({ channelName, accessToken }) => ({
        url: `/subscription/add/${channelName}`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }),
    }),
    unsubscribeChannel: builder.mutation({
      query: ({ channelName, accessToken }) => ({
        url: `/subscription/delete/${channelName}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }),
    }),
  }),
});

export const { useSubscribeChannelMutation, useUnsubscribeChannelMutation } =
  subscriptionApi;

export default subscriptionApi;
