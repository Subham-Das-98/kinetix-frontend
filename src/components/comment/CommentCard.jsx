import React from "react";
import {
  BiLike,
  BiDislike,
  BiSolidLike,
  BiSolidDislike,
  BiCommentDetail,
} from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";

function CommentCard() {
  return (
    <>
      <div className="flex gap-1 lg:gap-2">
        <div className="p-0.5">
          <img
            src="temp/test-avatar-2.png"
            alt=""
            className="w-8 aspect-square object-cover rounded-full"
          />
        </div>
        <div className="flex-1">
          <div className="text-sm">
            <span className="font-medium">@username</span>{" "}
            <span className="text-gray-600">2 days ago</span>
          </div>
          <div className="text-sm pr-4 mt-0.5 lg:mt-1">
            <p>
              Wow, this video is amazing! Your creativity and effort really
              shine through. The way you have presented the content is both
              engaging and inspiring. Keep up the great work—your dedication is
              making a real impact! Cannot wait to see what you create next!
            </p>
          </div>
          <div className="flex gap-x-2 items-center text-sm mt-0.5 md:mt-1 lg:mt-1.5">
            <div className="flex items-center">
              <button className="p-1.5 rounded-full hover:bg-gray-200">
                <BiLike className="text-sm md:text-lg lg:text-xl" />
              </button>
              <span>277</span>
            </div>
            <div className="flex items-center">
              <button className="p-1.5 rounded-full hover:bg-gray-200">
                <BiDislike className="text-sm md:text-lg lg:text-xl" />
              </button>
              <span>24</span>
            </div>
            <div className="ml-9">
              <button className="hidden lg:inline font-medium hover:bg-gray-200 px-3 py-1.5 rounded-full">
                Reply
              </button>
              <button className="p-1.5 rounded-full hover:bg-gray-200">
              <BiCommentDetail className="text-sm md:text-lg lg:hidden" />
              </button>
            </div>
          </div>
        </div>
        <div>
          <BsThreeDotsVertical className="text-xl text-gray-600" />
        </div>
      </div>
    </>
  );
}

export default CommentCard;
