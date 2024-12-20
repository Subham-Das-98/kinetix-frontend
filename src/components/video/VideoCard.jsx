import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { BsDot } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";

function VideoCard({
  id="",
  thumbnail = "",
  profile = "",
  title="",
  channelname="",
  views="0",
  duration="00:00",
  createdAt="4 days ago",
  hideProfile = false,
  hideChannelName = false,
  cardType = "block",
  cardHeight = "aspect-video",
  cardWidth = "full",
  fontSize = "lg:text-lg",
  fontWeight = "font-semibold",
  lineHeight = "leading-4 lg:leading-5",
  spaceY = "space-y-2",
  spaceX = "space-x-0"
}) {
  const navigate = useNavigate();

  function navigateToChannelPage(e) {
    e.preventDefault();
    navigate(`/channel/${channelname}`);
  }

  return (
    <>
      <div>
        <NavLink to={`/watch/${channelname}/v_id/${id}`} className={`${cardType} ${spaceY} ${spaceX}`}>
          <div className={`${cardHeight} ${cardWidth} flex-1`}>
            <img
              src={thumbnail}
              alt=""
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className={`flex gap-x-2 flex-1`}>
            <div
              className={hideProfile ? "hidden" : `w-9 aspect-square`}
              onClick={navigateToChannelPage}
            >
              <img
                src={profile}
                alt=""
                className="w-full aspect-square rounded-full"
              />
            </div>
            <div className="flex-grow">
              <h1 className={`${fontSize} ${fontWeight} ${lineHeight}`}>
                {title}
              </h1>
              <h2
                className={
                  hideChannelName
                    ? "hidden"
                    : `inline lg:block text-xs md:text-sm font-semibold text-gray-600 mt-1.5`
                }
              >
                <span onClick={navigateToChannelPage}>{channelname} </span>
              </h2>
              <span className="text-xs md:text-sm text-gray-600 leading-3">
                <BsDot
                  className={
                    hideProfile
                      ? "hidden"
                      : `inline lg:hidden text-xs text-gray-600`
                  }
                />
                <span>{views} views</span>
                <BsDot className="inline text-xs text-gray-600" />
                <span>{createdAt}</span>
              </span>
            </div>
            <div>
              <BsThreeDotsVertical
                className="text-xl text-gray-600"
                onClick={(e) => e.preventDefault()}
              />
            </div>
          </div>
        </NavLink>
      </div>
    </>
  );
}

export default VideoCard;
