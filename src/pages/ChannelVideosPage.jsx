import React from "react";
import { GridContainer, VideoList } from "../components";

function ChannelVideosPage() {
  return (
    <div className="mt-3">
      <GridContainer colWidth="14rem">
        <VideoList
          hideProfile={true}
          hideChannelName={true}
          cardHeight="h-24 sm:h-28 md:h-32 lg:h-36"
          fontSize="text-sm md:text-base"
          cardType="flex justify-between gap-x-1.5 md:block"
          spaceY="space-y-0 lg:space-y-2"
        />
      </GridContainer>
    </div>
  );
}

export default ChannelVideosPage;
