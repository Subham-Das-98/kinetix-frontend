import React from "react";
import { NavLink, Link, Navigate, useNavigate } from "react-router-dom";
import { BsDot } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";

function VideoCard({
  thumbnail = "/temp/test-thumb.webp",
  profile = "/temp/test-profile.png",
}) {
  const navigate = useNavigate();
  function navigateToChannelPage(e) {
    e.preventDefault();
    navigate("/channel/yourchannelname");
  }

  return (
    <>
      <div>
        <NavLink to="/watch">
          <div className="w-full h-48">
            <img
              src={thumbnail}
              alt=""
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="flex mt-2.5 gap-x-2">
            <div className="w-9 aspect-square" onClick={navigateToChannelPage}>
              <img
                src={profile}
                alt=""
                className="w-full aspect-square rounded-full"
              />
            </div>
            <div>
              <h1 className="lg:text-lg font-semibold lg:leading-5">
                Your video title for testing application.
              </h1>
              <h2 className="inline lg:block text-xs md:text-sm font-semibold text-gray-600 mt-1.5">
                <span onClick={navigateToChannelPage}>YourChannelName</span>
              </h2>
              <BsDot className="inline lg:hidden text-xs text-gray-600" />
              <span className="text-xs md:text-sm text-gray-600">
                50K views
              </span>
              <BsDot className="inline text-xs text-gray-600" />
              <span className="text-xs md:text-sm text-gray-600">
                4 days ago
              </span>
            </div>
            <div>
              <BsThreeDotsVertical
                className="text-xl text-gray-600"
                onClick={(e) => e.preventDefault()}
              />
            </div>
          </div>
        </NavLink>
      </div>
    </>
  );
}

export default VideoCard;
