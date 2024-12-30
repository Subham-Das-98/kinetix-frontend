import React from "react";

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

export default VideoPlayer;
