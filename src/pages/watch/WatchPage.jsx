import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Navbar,
  FlexContainer,
  VideoList,
  AddComment,
  CommentList,
  LoginModal,
} from "../../components";
import { BsDot } from "react-icons/bs";
import { BiLike, BiDislike, BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { RiShareForwardLine, RiFlagLine } from "react-icons/ri";
import { LiaDownloadSolid } from "react-icons/lia";
import { MdSort } from "react-icons/md";
import {
  useGetVideoByIdQuery,
  useGetVideosByRecommendationQuery,
} from "../../api/videoApi.js";
import { useGetChannelInfoAndStatsQuery } from "../../api/userApi.js";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { openLoginModal, closeLoginModal } from "../../features/global/globalSlice.js";
import useAuth from "../../hooks/useAuth.js";

function VideoPlayer({ video }) {
  return (
    <>
      <div className="aspect-video mb-2 bg-black md:rounded-xl md:overflow-hidden md:ml-3 lg:ml-0">
        <video
          src={video?.data.videoFile}
          controls
          controlsList="nodownload"
          autoPlay
          className="w-full h-full"
        />
      </div>
    </>
  );
}

function VideoInfoAndStats({ title = "", children }) {
  const [showDesc, setShowDesc] = useState(false);
  const descRef = useRef();
  function toggleDescription() {
    descRef.current.classList.toggle("hidden");
    setShowDesc((showDesc) => !showDesc);
  }

  return (
    <>
      <div>
        <div className="mx-3 md:mx-0 md:ml-3 lg:ml-0">
          <h1 className="text-lg md:text-xl lg:text-2xl font-semibold">
            {title}
          </h1>
        </div>
        <div className="mx-3 md:mx-0 md:ml-3 lg:ml-0">{children}</div>
        <div className="bg-gray-100 p-3 rounded-xl my-3 mx-3 md:mx-0 md:ml-3 lg:ml-0">
          <div>
            <span className="text-sm font-medium">16M views</span>
            <BsDot className="inline text-xs text-gray-600" />
            <span className="text-sm font-medium">1 year ago</span>
          </div>
          <div ref={descRef} className="hidden pr-5">
            <p>
              Join us on a breathtaking journey through lush forests, majestic
              mountains, and serene lakes. This video showcases the wonders of
              nature captured in stunning 4K resolution. Sit back, relax, and
              immerse yourself in the tranquility of the natural world.
            </p>
            <h1>Travel & Nature </h1>
            <h1>#Nature #Travel #4KVideo #Relaxation</h1>
          </div>
          <button className="text-sm font-semibold" onClick={toggleDescription}>
            {showDesc ? "...show less" : "...show more"}
          </button>
        </div>
      </div>
    </>
  );
}

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
          </div>
        </div>
      </div>
    </>
  );
}

function SocialActions() {
  return (
    <>
      <div className="overflow-x-auto no-scrollbar mt-3 md:mt-4">
        <ul className="flex items-center gap-x-1.5 md:gap-x-2.5">
          <li className="bg-gray-100 rounded-full flex-shrink-0">
            <button className="px-3.5 py-1">
              <BiLike className="inline text-lg md:text-xl lg:text-2xl" />
              <span className="text-sm md:text-base font-medium ml-1.5">
                4K
              </span>
            </button>
            <span className="text-sm text-gray-500">|</span>
            <button className="px-3.5 py-1">
              <BiDislike className="inline text-lg md:text-xl lg:text-2xl" />
              <span className="text-sm md:text-base font-medium ml-1.5">
                99
              </span>
            </button>
          </li>
          <li className="bg-gray-100 rounded-full flex-shrink-0">
            <button className="px-3.5 py-1">
              <RiShareForwardLine className="inline text-lg md:text-xl lg:text-2xl" />
              <span className="text-sm md:text-base font-medium">Share</span>
            </button>
          </li>
          <li className="bg-gray-100 rounded-full flex-shrink-0">
            <button className="px-3.5 py-1">
              <LiaDownloadSolid className="inline text-lg md:text-xl lg:text-2xl" />
              <span className="text-sm md:text-base font-medium">Save</span>
            </button>
          </li>
          <li className="bg-gray-100 rounded-full flex-shrink-0">
            <button className="px-3.5 py-1">
              <RiFlagLine className="inline text-lg md:text-xl lg:text-2xl" />
              <span className="text-sm md:text-base font-medium">Report</span>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

function CommentSection({ children }) {
  return (
    <>
      <div className="mx-3 md:mx-0 md:ml-3 lg:ml-0">{children}</div>
    </>
  );
}

function VideoSection({ children }) {
  return (
    <>
      <div className="flex-1 lg:ml-8 2xl:ml-0">{children}</div>
    </>
  );
}

function RecommendVideoSection({ children }) {
  return (
    <>
      <div
        className={`px-4 md:px-0 w-full md:w-80 lg:w-1/3 md:ml-0 space-y-2 md:mr-5 lg:mr-8 2xl:mr-0`}
      >
        {children}
      </div>
    </>
  );
}

// main component
function WatchPage() {
  const dispatch = useDispatch();
  const { username, id } = useParams();

  // for login modal
  const isLoginModalOpen = useSelector((state) => state.global.isLoginModalOpen);

  // fetch video by id
  const {
    data: video,
    error: videoError,
    isLoading: videoIsLoading,
  } = useGetVideoByIdQuery({ username, id });

  // fetch channel info
  const { data: channel } = useGetChannelInfoAndStatsQuery(username);

  // fetch recommended videos
  const {
    data: videos,
    error: videosError,
    isLoading: videosIsLoading,
  } = useGetVideosByRecommendationQuery();

  // scroll to top on every render
  useEffect(() => {
    window.scrollTo({ top: 0 });
  });

  // try to authenticate on first render
  // const isAuthenticated = useSelector((state) => state.global.isAuthenticated);
  // const { initializeAuth } = useAuth();
  // initializeAuth();

  // if (!isAuthenticated)
  //   return (
  //     <>
  //       <div>Authenticating... please wait...</div>
  //     </>
  //   );

  return (
    <>
      <Navbar openModal={() => dispatch(openLoginModal())} />
      <LoginModal
        closeModal={() => dispatch(closeLoginModal())}
        isModalOpen={isLoginModalOpen}
      />
      <main className="max-w-[1800px] lg:mx-auto mb-5 md:mb-9 lg:mb-16">
        {videoIsLoading && <div>loading...</div>}
        {videoError && <div>ERROR::{videoError.error}</div>}
        {!videoIsLoading && video && (
          <FlexContainer
            className={"flex-col md:flex-row"}
            gapX="md:gap-x-5 lg:gap-x-10"
          >
            <VideoSection>
              <VideoPlayer video={video} />
              <VideoInfoAndStats title={video?.data.title}>
                <ChannelInfoAndStats
                  channel={channel?.data.username}
                  profile={channel?.data.avatar}
                  subscribersCount={channel?.data.subscribersCount}
                />
                <SocialActions />
              </VideoInfoAndStats>
              <CommentSection>
                <AddComment />
                <CommentList />
              </CommentSection>
            </VideoSection>
            <RecommendVideoSection>
              {videosIsLoading && <div>loading...</div>}
              {videosError && <div>ERROR::{videosError.error}</div>}
              {videos && (
                <VideoList
                  videos={videos.data}
                  cardType="flex"
                  hideProfile={true}
                  spaceX="space-x-3"
                  spaceY="space-y-0"
                  fontSize="text-sm lg:text-base"
                  lineHeight="leading-4 lg:leading-5"
                  fontWeight="font-medium"
                />
              )}
            </RecommendVideoSection>
          </FlexContainer>
        )}
      </main>
    </>
  );
}

export default WatchPage;
