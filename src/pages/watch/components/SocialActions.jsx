import React from "react";

import { BiLike, BiDislike, BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { RiShareForwardLine, RiFlagLine } from "react-icons/ri";
import { LiaDownloadSolid } from "react-icons/lia";
import { useDispatch, useSelector } from "react-redux";
import { openLoginModal } from "../../../features/global/globalSlice";
import useImpression from "../../../hooks/useImpression.js";
import { useParams } from "react-router-dom";

function SocialActions({
  likesCount = 0,
  dislikesCount = 0,
  hasLiked = false,
  hasDisliked = false,
  refetch = () => {},
}) {
  const dispatch = useDispatch();
  const loginStatus = useSelector((state) => state.auth.loginStatus);

  const refType = "Video";
  const { id: refId } = useParams();
  const {
    addLikeOnClick,
    addLikeState: { isLoading: addLikeIsLoading },
    deleteLikeOnClick,
    deleteLikeState: { isLoading: deleteLikeIsLoading },
    addDislikeOnClick,
    addDisLikeState: { isLoading: addDislikeIsLoading },
    deleteDislikeOnClick,
    deleteLikeState: { isLoading: deleteDislikeIsLoading },
  } = useImpression();

  return (
    <>
      <div className="overflow-x-auto no-scrollbar mt-3 md:mt-4">
        <ul className="flex items-center gap-x-1.5 md:gap-x-2.5">
          <li className="bg-gray-100 rounded-full flex-shrink-0">
            {!hasLiked && (
              <button
                className="px-3.5 py-1"
                onClick={() => {
                  if (!loginStatus) {
                    dispatch(openLoginModal());
                  } else {
                    addLikeOnClick(refType, refId, refetch);
                  }
                }}
                disabled={addLikeIsLoading}
              >
                <BiLike className="inline text-lg md:text-xl lg:text-2xl" />
                <span className="text-sm md:text-base font-medium ml-1.5">
                  {likesCount}
                </span>
              </button>
            )}
            {hasLiked && (
              <button
                className="px-3.5 py-1"
                onClick={() => {
                  if (!loginStatus) {
                    dispatch(openLoginModal());
                  } else {
                    deleteLikeOnClick(refType, refId, refetch);
                  }
                }}
                disabled={deleteLikeIsLoading}
              >
                <BiSolidLike className="inline text-lg md:text-xl lg:text-2xl" />
                <span className="text-sm md:text-base font-medium ml-1.5">
                  {likesCount}
                </span>
              </button>
            )}
            <span className="text-sm text-gray-500">|</span>
            {!hasDisliked && (
              <button
                className="px-3.5 py-1"
                onClick={() => {
                  if (!loginStatus) {
                    dispatch(openLoginModal());
                  } else {
                    addDislikeOnClick(refType, refId, refetch);
                  }
                }}
                disabled={addDislikeIsLoading}
              >
                <BiDislike className="inline text-lg md:text-xl lg:text-2xl" />
                <span className="text-sm md:text-base font-medium ml-1.5">
                  {dislikesCount}
                </span>
              </button>
            )}
            {hasDisliked && (
              <button
                className="px-3.5 py-1"
                onClick={() => {
                  if (!loginStatus) {
                    dispatch(openLoginModal());
                  } else {
                    deleteDislikeOnClick(refType, refId, refetch);
                  }
                }}
                disabled={deleteDislikeIsLoading}
              >
                <BiSolidDislike className="inline text-lg md:text-xl lg:text-2xl" />
                <span className="text-sm md:text-base font-medium ml-1.5">
                  {dislikesCount}
                </span>
              </button>
            )}
          </li>
          <li className="bg-gray-100 rounded-full flex-shrink-0">
            <button className="px-3.5 py-1">
              <RiShareForwardLine className="inline text-lg md:text-xl lg:text-2xl" />
              <span className="text-sm md:text-base font-medium">Share</span>
            </button>
          </li>
          <li className="bg-gray-100 rounded-full flex-shrink-0">
            <button className="px-3.5 py-1">
              <LiaDownloadSolid className="inline text-lg md:text-xl lg:text-2xl" />
              <span className="text-sm md:text-base font-medium">Save</span>
            </button>
          </li>
          <li className="bg-gray-100 rounded-full flex-shrink-0">
            <button className="px-3.5 py-1">
              <RiFlagLine className="inline text-lg md:text-xl lg:text-2xl" />
              <span className="text-sm md:text-base font-medium">Report</span>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SocialActions;
