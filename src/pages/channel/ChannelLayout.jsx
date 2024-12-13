import React from "react";
import { Link, Outlet } from "react-router-dom";
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
  return (
    <>
      <div className="sticky top-[72px] mt-5 mx-2.5 lg:mx-0 bg-white before:absolute before:bottom-0 before:w-full before:h-[1px] before:bg-slate-300">
        <ul className="flex gap-5 lg:gap-8 font-semibold text-gray-500 overflow-x-auto">
          <Link to="/channel/YourChannelName">
            <li>Home</li>
          </Link>
          <Link to="/channel/YourChannelName/videos">
            <li>Videos</li>
          </Link>
          <Link to="/">
            <li>Live</li>
          </Link>
          <Link to="/">
            <li>Community</li>
          </Link>
          <Link to="/">
            <li>Playlists</li>
          </Link>
          <Link to="/">
            <li>About</li>
          </Link>
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
