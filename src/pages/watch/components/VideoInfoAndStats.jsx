import React, { useRef, useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { BsDot } from "react-icons/bs";

function VideoInfoAndStats({
  children,
  title = "",
  thumbnail = "",
  description = "",
  genre = "",
  views = 0,
  tags = [],
  createdAt = "",
}) {
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
            <span className="text-sm font-medium">{views} views</span>
            <BsDot className="inline text-xs text-gray-600" />
            <span className="text-sm font-medium">
              {formatDistanceToNow(new Date(createdAt), {
                addSuffix: true,
              }).replace("about", "")}
            </span>
          </div>
          <div ref={descRef} className="hidden pr-5">
            <p>{description}</p>
            <h1>{genre}</h1>
            <h1>
              <ul>
                {tags?.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </h1>
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
