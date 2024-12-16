import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./Layout.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import {
  HomePage,
  ChannelLayout,
  ChannelHomePage,
  ChannelVideosPage,
  ChannelCommunityPage,
  WatchPage,
  PostPage,
  StudioLayout,
  StudioDashboardPage,
  StudioContentPage
} from "./pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<HomePage />} />
        <Route path="/channel/:username" element={<ChannelLayout />}>
          <Route path="/channel/:username" element={<ChannelHomePage />} />
          <Route
            path="/channel/:username/videos"
            element={<ChannelVideosPage />}
          />
          <Route
            path="/channel/:username/community"
            element={<ChannelCommunityPage />}
          />
        </Route>
        <Route path="/post/:id" element={<PostPage />} />
      </Route>
      <Route path="/watch" element={<WatchPage />} />
      <Route path="/channel/:username/studio" element={<StudioLayout />}>
        <Route
          path="/channel/:username/studio"
          element={<StudioDashboardPage />}
        />
        <Route
          path="/channel/:username/studio/content"
          element={<StudioContentPage />}
        />
      </Route>
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
