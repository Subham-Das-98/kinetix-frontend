import { configureStore } from "@reduxjs/toolkit";
import videoApi from "../api/videoApi.js";
import userApi from "../api/userApi.js";

const store = configureStore({
  reducer: {
    [videoApi.reducerPath]: videoApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(videoApi.middleware)
      .concat(userApi.middleware),
});

export default store;
