import React from "react";
import { VideoCard } from "../index.js";

function VideoList({ videos, ...props }) {
  if(videos?.length === 0) {
    return (<><div className="w-max">This channel does not have any videos</div></>)
  }
  return (
    <>
      {videos?.map((video) => (
        <VideoCard
          key={video?._id}
          id={video?._id}
          thumbnail={video?.thumbnail || "/temp/default-thumbnail.png"}
          profile={video?.owner?.avatar || "/temp/default-avatar.png"}
          title={video.title}
          channelname={video?.owner?.username}
          views={video?.views}
          {...props}
        />
      ))}
    </>
  );
}

export default VideoList;
