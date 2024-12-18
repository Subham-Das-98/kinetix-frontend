import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { BsDot } from "react-icons/bs";

function Banner() {
  return (
    <>
      <div className="w-auto h-24 md:h-32 lg:h-40 bg-slate-600 md:mr-3">
        <img
          src="/temp/test-banner.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </>
  );
}

function InfoAndStats() {
  return (
    <>
      <div className="flex gap-5 mt-3 lg:mt-5 mx-2.5 lg:mx-0">
        <div>
          <img
            src="/temp/test-profile.png"
            alt=""
            className="w-20 md:w-28 lg:w-36 aspect-square object-cover rounded-full"
          />
        </div>
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            YourChannelName
          </h1>
          <div className="text-sm md:text-base lg:text-lg text-gray-500">
            <span className="block lg:inline">@FullName</span>
            <BsDot className="hidden lg:inline text-xs" />
            <span>500K subscribers</span>
            <BsDot className="inline text-xs" />
            <span>99 videos</span>
          </div>
          <div className="mt-2">
            <button className="bg-gray-900 hover:bg-gray-800 text-white font-semibold text-sm px-2.5 py-1 lg:text-base lg:px-3.5 lg:py-1.5 rounded-full">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function ChannelPageNavBar() {
  const location = useLocation();
  return (
    <>
      <div className="sticky top-[72px] mt-5 mx-2.5 lg:mx-0 bg-white border-b">
        <ul className="flex gap-5 lg:gap-x-7 font-semibold text-gray-500 overflow-x-auto no-scrollbar">
          <li>
            <NavLink
              to="/channel/YourChannelName"
              className={(isActive) =>
                isActive && location.pathname === "/channel/YourChannelName"
                  ? "block border-b-2 border-b-gray-900 text-black"
                  : "block hover:border-b-2 hover:border-b-gray-400"
              }
              end
            >
              <div className="md:py-1 lg:py-2">Home</div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/channel/YourChannelName/videos"
              className={(isActive) =>
                isActive &&
                location.pathname === "/channel/YourChannelName/videos"
                  ? "block border-b-2 border-b-gray-900 text-black"
                  : "block hover:border-b-2 hover:border-b-gray-400"
              }
              end
            >
              <div className="md:py-1 lg:py-2">Videos</div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/channel/YourChannelName/live"
              className={(isActive) =>
                isActive &&
                location.pathname === "/channel/YourChannelName/live"
                  ? "block border-b-2 border-b-gray-900 text-black"
                  : "block hover:border-b-2 hover:border-b-gray-400"
              }
              end
            >
              <div className="md:py-1 lg:py-2">Live</div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/channel/YourChannelName/community"
              className={(isActive) =>
                isActive &&
                location.pathname === "/channel/YourChannelName/community"
                  ? "block border-b-2 border-b-gray-900 text-black"
                  : "block hover:border-b-2 hover:border-b-gray-400"
              }
              end
            >
              <div className="md:py-1 lg:py-2">Community</div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/channel/YourChannelName/playlist"
              className={(isActive) =>
                isActive &&
                location.pathname === "/channel/YourChannelName/playlist"
                  ? "block border-b-2 border-b-gray-900 text-black"
                  : "block hover:border-b-2 hover:border-b-gray-400"
              }
              end
            >
              <div className="md:py-1 lg:py-2">Playlists</div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/channel/YourChannelName/about"
              className={(isActive) =>
                isActive &&
                location.pathname === "/channel/YourChannelName/about"
                  ? "block border-b-2 border-b-gray-900 text-black"
                  : "block hover:border-b-2 hover:border-b-gray-400"
              }
              end
            >
              <div className="md:py-1 lg:py-2">About</div>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

function ChannelLayout() {
  return (
    <>
      <main className="w-full">
        <Banner />
        <InfoAndStats />
        <ChannelPageNavBar />
        <Outlet />
      </main>
    </>
  );
}

export default ChannelLayout;
