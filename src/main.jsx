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
  ChannelPage,
  ChannelHomePage,
  ChannelVideosPage,
} from "./pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<HomePage />} />
      <Route path="/channel/:username" element={<ChannelPage />}>
        <Route path="/channel/:username" element={<ChannelHomePage />} />
        <Route path="/channel/:username/videos" element={<ChannelVideosPage />} />
      </Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
