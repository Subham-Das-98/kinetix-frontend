import React, { useRef, useState } from "react";
import { BsDot } from "react-icons/bs";

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

export default VideoInfoAndStats;
