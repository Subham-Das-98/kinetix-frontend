import React, { useEffect } from "react";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { BsDot } from "react-icons/bs";
import { useGetChannelInfoAndStatsQuery } from "../../api/userApi";

function Banner({ coverImage }) {
  return (
    <>
      <div className="w-auto h-24 md:h-32 lg:h-40 bg-slate-600 md:mr-3">
        <img
          src={coverImage}
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>
    </>
  );
}

function InfoAndStats({
  profile = "",
  channelName = "",
  subscribersCount = "",
  videosCount = "",
  fullName = "",
}) {
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
  const { username } = useParams();
  return (
    <>
      <div className="sticky top-[72px] mt-5 mx-2.5 lg:mx-0 bg-white border-b">
        <ul className="flex gap-5 lg:gap-x-7 font-semibold text-gray-500 overflow-x-auto no-scrollbar">
          <li>
            <NavLink
              to={`/channel/${username}`}
              className={(isActive) =>
                isActive && location.pathname === `/channel/${username}`
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
              to={`/channel/${username}/videos`}
              className={(isActive) =>
                isActive && location.pathname === `/channel/${username}/videos`
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
              to={`/channel/${username}/live`}
              className={(isActive) =>
                isActive && location.pathname === `/channel/${username}/live`
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
              to={`/channel/${username}/community`}
              className={(isActive) =>
                isActive &&
                location.pathname === `/channel/${username}/community`
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
              to={`/channel/${username}/playlist`}
              className={(isActive) =>
                isActive &&
                location.pathname === `/channel/${username}/playlist`
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
              to={`/channel/${username}/about`}
              className={(isActive) =>
                isActive && location.pathname === `/channel/${username}/about`
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
  const { username } = useParams();
  const { data: channel } = useGetChannelInfoAndStatsQuery(username);
  useEffect(() => {
    // console.log(channel);
  }, [channel]);

  if (!channel) {
    return (
      <>
        <div>channel not found</div>
      </>
    );
  }

  return (
    <>
      <main className="w-full">
        <Banner
          coverImage={channel?.data.coverImage || "/temp/default-banner.png"}
        />
        <InfoAndStats
          profile={channel?.data.avatar || "/temp/default-avatar.png"}
          channelName={channel?.data.username || null}
          subscribersCount={channel?.data.subscribersCount}
          videosCount="9"
          fullName={channel?.data.fullName}
        />
        <ChannelPageNavBar />
        <Outlet />
      </main>
    </>
  );
}

export default ChannelLayout;
