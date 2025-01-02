import React from "react";
import { NavLink } from "react-router-dom";
import useSubscription from "../../../hooks/useSubscription.js";
import { useSelector, useDispatch } from "react-redux";
import { openLoginModal } from "../../../features/global/globalSlice";

function ChannelInfoAndStats({
  channel = "",
  profile = "",
  subscribersCount = "",
  isSubscribed = false,
  refetch = () => {},
}) {
  const dispatch = useDispatch();
  const loginStatus = useSelector((state) => state.auth.loginStatus);
  const { subscribeOnClick, unsubscribeOnClick } = useSubscription();

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
            {!isSubscribed && (
              <button
                className="bg-gray-900 hover:bg-gray-800 text-white font-medium text-sm px-2.5 py-1.5 lg:text-base lg:px-3.5 rounded-full"
                onClick={() => {
                  if (loginStatus) {
                    subscribeOnClick(refetch);
                  } else {
                    dispatch(openLoginModal());
                  }
                }}
              >
                Subscribe
              </button>
            )}
            {isSubscribed && (
              <button
                className="bg-gray-900 hover:bg-gray-800 text-white font-medium text-sm px-2.5 py-1.5 lg:text-base lg:px-3.5 rounded-full"
                onClick={() => {
                  if (loginStatus) {
                    unsubscribeOnClick(refetch);
                  } else {
                    dispatch(openLoginModal());
                  }
                }}
              >
                Unsubscribe
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ChannelInfoAndStats;
