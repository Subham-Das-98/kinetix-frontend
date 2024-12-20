import React, { useEffect } from "react";
import { VideoList, GridContainer } from "../../components";
import {
  useGetVideosByRecommendationQuery,
} from "../../api/videoApi.js";

function HomePage() {
  const {
    data: videos,
    error,
    isLoading,
  } = useGetVideosByRecommendationQuery();

  // const { data: video } = useGetVideoByIdQuery({
  //   username: "two",
  //   id: "67482a74ecc0cc238c3dbf7a",
  // });

  useEffect(() => {
    console.log(videos);
  }, [videos, error, isLoading]);

  return (
    <>
      <main className="w-full">
        {isLoading && <div>loading...</div>}
        {error && <div>ERROR:: {error.error}</div>}
        {videos && (
          <GridContainer>
            <VideoList videos={videos.data}/>
          </GridContainer>
        )}
      </main>
    </>
  );
}

export default HomePage;
