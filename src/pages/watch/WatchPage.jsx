import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Navbar,
  LeftNav,
  BottomNav,
  FlexContainer,
  VideoList,
  GridContainer,
  AddComment,
  CommentList,
} from "../../components";
import { BsDot } from "react-icons/bs";
import { BiLike, BiDislike, BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { RiShareForwardLine, RiFlagLine } from "react-icons/ri";
import { LiaDownloadSolid } from "react-icons/lia";
import { MdSort } from "react-icons/md";
import {
  useGetVideoByIdQuery,
  useGetVideosByRecommendationQuery,
} from "../../api/videoApi";
import { useGetChannelInfoAndStatsQuery } from "../../api/userApi";
import { useParams } from "react-router-dom";

function VideoPlayback() {
  return (
    <>
      <div></div>
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
        <div>
          <h1 className="text-lg md:text-xl lg:text-2xl font-semibold">
            {title}
          </h1>
        </div>
        <div>{children}</div>
        <div className="bg-gray-100 p-3 rounded-xl my-3 mr-3 md:mr-0">
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
      <div className="flex items-center gap-x-5 mr-3 md:mr-0 mt-3">
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
            <span className="text-xs md:text-sm text-gray-500">
              {subscribersCount} subscribers
            </span>
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
      <div className="overflow-x-auto no-scrollbar mt-3 md:mt-4 mr-3 md:mr-0">
        <ul className="flex items-center gap-x-1.5 md:gap-x-2.5 ">
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
      <div className="mr-3 md:mr-0">{children}</div>
    </>
  );
}

function VideoSection({ children }) {
  return (
    <>
      <div className="flex-1 ml-3 lg:ml-8 2xl:ml-0">{children}</div>
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

function WatchPage() {
  const { username, id } = useParams();
  const {
    data: video,
    videoError,
    videoIsLoading,
  } = useGetVideoByIdQuery({ username, id });
  const { data: channel } = useGetChannelInfoAndStatsQuery(username);
  const {
    data: videos,
    videosError,
    videosIsLoading,
  } = useGetVideosByRecommendationQuery();

  // scroll to top on every render
  useEffect(() => {
    window.scrollTo({ top: 0 });
  });

  return (
    <>
      <Navbar />
      <main className="max-w-screen-2xl lg:mx-auto mb-5 md:mb-9 lg:mb-16">
        <video src={video?.data.videoFile} controls width={"250px"}></video>
        {!videoIsLoading && video && (
          <FlexContainer
            className={"flex-col md:flex-row"}
            gapX="md:gap-x-5 lg:gap-x-10"
          >
            <VideoSection>
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
