import React, { useEffect } from "react";
import { VideoList, GridContainer } from "../../components";
import { useGetVideosByRecommendationQuery, useGetVideoByIdQuery } from "../../api/videoApi.js";

function HomePage() {
  const {data: videos} = useGetVideosByRecommendationQuery();
  const {data: video} = useGetVideoByIdQuery({username: "two", id: "67482a74ecc0cc238c3dbf7a"})

  useEffect(() => {
    console.log(videos);
    console.log(video);
  }, [videos, video]);

  return (
    <>
      <main className="w-full">
        <GridContainer>
          <VideoList />
        </GridContainer>
      </main>
    </>
  );
}

export default HomePage;
