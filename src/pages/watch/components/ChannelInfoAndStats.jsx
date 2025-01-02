import React from 'react'
import { NavLink } from "react-router-dom";

function ChannelInfoAndStats({
  channel = "",
  profile = "",
  subscribersCount = "",
}) {
  return (
    <>
      <div className="flex items-center gap-x-5 mt-3">
        <div>
          <NavLink to={`/channel/${channel}`}>
            <img
              src={profile}
              alt=""
              className="w-11 aspect-square object-cover object-center rounded-full"
            />
          </NavLink>
        </div>
        <div className="flex flex-1">
          <div className="mr-auto">
            <div className="sm:text-sm md:text-base lg:text-lg font-medium">
              <NavLink to={`/channel/${channel}`}>{channel}</NavLink>
            </div>
            <div className="text-xs md:text-sm -mt-1 text-gray-500">
              {subscribersCount} subscribers
            </div>
          </div>
          <div>
            <button className="bg-gray-900 hover:bg-gray-800 text-white font-medium text-sm px-2.5 py-1.5 lg:text-base lg:px-3.5 rounded-full">
              Subscribe
            </button>
            <button className="bg-gray-900 hover:bg-gray-800 text-white font-medium text-sm px-2.5 py-1.5 lg:text-base lg:px-3.5 rounded-full">
              Unsubscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChannelInfoAndStats