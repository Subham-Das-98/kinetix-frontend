import { configureStore } from "@reduxjs/toolkit";
import videoApi from "../api/videoApi.js";

const store = configureStore({
  reducer: {
    [videoApi.reducerPath]: videoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(videoApi.middleware),
});

export default store;
