import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { PiPaperPlaneRightFill } from "react-icons/pi";
import useComment from "../../hooks/useComment.js";
import { useDispatch, useSelector } from "react-redux";
import { openLoginModal } from "../../features/global/globalSlice.js";

function AddComment({
  user = undefined,
  refType = "",
  refId = "",
  refetch = () => {},
}) {
  const loginStatus = useSelector((state) => state.auth.loginStatus);
  const dispatch = useDispatch();

  const {
    handleSubmit,
    register,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const content = watch("content");

  // add comment api call
  const {
    addCommentOnSubmit,
    addCommentState: { isError, isLoading, isSuccess },
  } = useComment();

  // to reset comment input field and fetch updated comment list
  useEffect(() => {
    if (!isError && !isLoading && isSuccess) {
      reset();
      refetch();
    }
  }, [isError, isLoading]);

  return (
    <>
      <div className="flex items-center gap-x-2 bg-gray-100 p-3 rounded-xl">
        <div className="p-0.5">
          <img
            src={loginStatus ? user?.avatar : "/temp/default-avatar.png"}
            alt=""
            className="w-8 aspect-square object-cover rounded-full"
          />
        </div>
        <div className="flex-1">
          <form onSubmit={handleSubmit(addCommentOnSubmit)} className="">
            <div className="flex gap-x-1.5">
              <textarea
                rows="1"
                className="outline-none border rounded-full px-4 py-1.5 text-xs md:text-sm w-full resize-none read-only:cursor-pointer"
                id="content"
                placeholder="add comment..."
                readOnly={!loginStatus}
                {...register("content", { required: true })}
                onClick={() => {
                  if (!loginStatus) {
                    dispatch(openLoginModal());
                  }
                }}
              />
              <input
                type="hidden"
                value={refType}
                {...register("refType", { required: true })}
              />
              <input
                type="hidden"
                value={refId}
                {...register("refId", { required: true })}
              />
              {/* submit for larger screen */}
              <input
                type="submit"
                value="Comment"
                className="hidden lg:inline bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-sm font-medium px-3 py-2 rounded-full text-white cursor-pointer disabled:cursor-not-allowed"
                disabled={!content || isLoading}
              />
              <input
                type="reset"
                value="Cancel"
                className="hidden lg:inline bg-gray-500 hover:bg-gray-600 text-sm font-medium px-3 py-2 rounded-full text-white cursor-pointer"
                onClick={() => reset()}
              />
              {/* submit for mobile devices */}
              <button
                type="submit"
                className="lg:hidden md:px-1.5 disabled:invisible"
                disabled={!content || isLoading}
              >
                <PiPaperPlaneRightFill className="text-xl text-blue-600" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddComment;
