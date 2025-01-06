import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useSubscription from "../../../hooks/useSubscription.js";
import { openLoginModal } from "../../../features/global/globalSlice.js";

import { BsDot } from "react-icons/bs";

function InfoAndStats({
  profile = "",
  channelName = "",
  subscribersCount = "",
  videosCount = 0,
  fullName = "",
  isSubscribed = false,
  refetch = () => {},
}) {
  const dispatch = useDispatch();
  const loginStatus = useSelector((state) => state.auth.loginStatus);
  const { subscribeOnClick, unsubscribeOnClick } = useSubscription();

  return (
    <>
      <div className="flex gap-5 mt-3 lg:mt-5 mx-2.5 lg:mx-0">
        <div>
          <img
            src={profile}
            alt=""
            className="w-20 md:w-28 lg:w-36 aspect-square object-cover object-center rounded-full"
          />
        </div>
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            {channelName}
          </h1>
          <div className="text-sm md:text-base lg:text-lg text-gray-500">
            <span className="block lg:inline">@{fullName}</span>
            <BsDot className="hidden lg:inline text-xs" />
            <span>{subscribersCount} subscribers</span>
            <BsDot className="inline text-xs" />
            <span>{videosCount} videos</span>
          </div>
          <div className="mt-2">
            {!isSubscribed && (
              <button
                className="bg-gray-900 hover:bg-gray-800 text-white font-semibold text-sm px-2.5 py-1 lg:text-base lg:px-3.5 lg:py-1.5 rounded-full"
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
                className="bg-gray-900 hover:bg-gray-800 text-white font-semibold text-sm px-2.5 py-1 lg:text-base lg:px-3.5 lg:py-1.5 rounded-full"
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

export default InfoAndStats;
