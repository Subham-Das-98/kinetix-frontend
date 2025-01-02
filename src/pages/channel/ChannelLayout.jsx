import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { BsDot } from "react-icons/bs";
import { useGetChannelInfoAndStatsQuery } from "../../api/userApi";
import useSubscription from "../../hooks/useSubscription";
import { openLoginModal } from "../../features/global/globalSlice";

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

function ChannelPageNavBar() {
  const location = useLocation();
  const { username } = useParams();

  const links = [
    {
      name: "Home",
      slug: `/channel/${encodeURIComponent(username)}`,
    },
    {
      name: "Videos",
      slug: `/channel/${encodeURIComponent(username)}/videos`,
    },
    {
      name: "Live",
      slug: `/channel/${encodeURIComponent(username)}/live`,
    },
    {
      name: "Community",
      slug: `/channel/${encodeURIComponent(username)}/community`,
    },
    {
      name: "Playlists",
      slug: `/channel/${encodeURIComponent(username)}/playlists`,
    },
    {
      name: "About",
      slug: `/channel/${encodeURIComponent(username)}/about`,
    },
  ];

  return (
    <>
      <div className="sticky top-[72px] mt-5 mx-2.5 lg:mx-0 bg-white border-b">
        <ul className="flex gap-5 lg:gap-x-7 font-semibold text-gray-500 overflow-x-auto no-scrollbar">
          {links.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.slug}
                className={(isActive) =>
                  isActive && location.pathname === link.slug
                    ? "block border-b-2 border-b-gray-900 text-black"
                    : "block hover:border-b-2 hover:border-b-gray-400"
                }
                end
              >
                <div className="md:py-1 lg:py-2">{link.name}</div>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

function ChannelLayout() {
  const { username: channelName } = useParams();
  // to check if channel is subscribed or not
  const userId = useSelector((state) => state.auth.user?.id);

  const { data: channel, refetch } = useGetChannelInfoAndStatsQuery({
    channelName,
    userId,
  });

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
          isSubscribed={channel?.data.isSubscribed}
          refetch={refetch}
        />
        <ChannelPageNavBar />
        <Outlet />
      </main>
    </>
  );
}

export default ChannelLayout;
