import React from "react";
import { VideoList, GridContainer } from "../../components";

function HomePage() {
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
