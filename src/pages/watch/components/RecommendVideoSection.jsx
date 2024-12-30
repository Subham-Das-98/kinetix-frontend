import React from "react";

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

export default RecommendVideoSection;
