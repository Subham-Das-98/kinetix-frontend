import React, { useEffect } from "react";

// global components
import {
  Navbar,
  FlexContainer,
  VideoList,
  AddComment,
  CommentList,
  LoginModal,
} from "../../components";

// local components
import VideoPlayer from "./components/VideoPlayer.jsx";
import VideoInfoAndStats from "./components/VideoInfoAndStats.jsx";
import ChannelInfoAndStats from "./components/ChannelInfoAndStats.jsx";
import SocialActions from "./components/SocialActions.jsx";
import CommentSection from "./components/CommentSection.jsx";
import VideoSection from "./components/VideoSection.jsx";
import RecommendVideoSection from "./components/RecommendVideoSection.jsx";

import {
  useGetVideoByIdQuery,
  useGetVideosByRecommendationQuery,
} from "../../api/videoApi.js";
import { useGetChannelInfoAndStatsQuery } from "../../api/userApi.js";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  openLoginModal,
  closeLoginModal,
} from "../../features/global/globalSlice.js";
import useAuth from "../../hooks/useAuth.js";

// main component
function WatchPage() {
  const dispatch = useDispatch();
  const { username: channelName, id } = useParams();

  // for login modal
  const isLoginModalOpen = useSelector(
    (state) => state.global.isLoginModalOpen
  );

  // to check if channel is subscribed or not
  const userId = useSelector((state) => state.auth.user?.id);

  // fetch video by id
  const {
    data: video,
    error: videoError,
    isLoading: videoIsLoading,
    refetch: refetchVideo
  } = useGetVideoByIdQuery({ channelName, id, accessToken: localStorage.getItem("accessToken") });

  // fetch channel info
  const { data: channel, refetch: refetchChannelInfoAndStats } = useGetChannelInfoAndStatsQuery({
    channelName,
    userId,
  });

  // fetch recommended videos
  const {
    data: videos,
    error: videosError,
    isLoading: videosIsLoading,
  } = useGetVideosByRecommendationQuery();

  // scroll to top on if videoFile changes
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [video?.data.videoFile]);

  // try to authenticate on first render
  const isAuthenticated = useSelector((state) => state.global.isAuthenticated);
  const { initializeAuth } = useAuth();
  initializeAuth();

  if (!isAuthenticated)
    return (
      <>
        <div>Authentication in progress, please wait...</div>
      </>
    );

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
              <VideoInfoAndStats
                thumbnail={video?.data.thumbnail}
                title={video?.data.title}
                views={video?.data.views}
                description={video?.data.description}
                tags={video?.data.tags}
                genre={video?.data.genre}
                createdAt={video?.data.createdAt}
              >
                <ChannelInfoAndStats
                  channel={channel?.data.username}
                  profile={channel?.data.avatar}
                  subscribersCount={channel?.data.subscribersCount}
                  isSubscribed={channel?.data.isSubscribed}
                  refetch={refetchChannelInfoAndStats}
                />
                <SocialActions
                  likesCount={video?.data.likesCount}
                  dislikesCount={video?.data.dislikesCount}
                  hasLiked={video?.data.hasLiked}
                  hasDisliked={video?.data.hasDisliked}
                  refetch={refetchVideo}
                />
              </VideoInfoAndStats>
              <CommentSection>
                <AddComment refType={"Video"} refId={id} />
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
