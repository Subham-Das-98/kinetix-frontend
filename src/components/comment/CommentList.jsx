import React, { useState, useRef } from "react";
import { CommentCard } from "../index.js";
import { FiChevronDown } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { useGetAllCommentsByRefIdQuery } from "../../api/commentApi.js";
import { useParams } from "react-router-dom";

function CommentList() {
  const [commentPanel, setCommentPanel] = useState(false);
  const commentPanelRef = useRef();
  function toggleCommentPanel() {
    commentPanelRef.current.classList.toggle("hidden");
    setCommentPanel((commentPanel) => !commentPanel);
  }

  // get comments api call
  const { id } = useParams();
  const {
    data: comments,
    isError,
    isLoading,
  } = useGetAllCommentsByRefIdQuery(id);

  return (
    <>
      <div className="flex gap-x-2 items-center my-4 lg:my-3 px-2">
        <span className="text-base md:text-lg lg:text-xl font-medium">
          {comments?.data.length} Comments
        </span>
        <button className="bg-gray-200 hover:bg-gray-300 py-0.5 px-3 rounded-md text-sm font-medium">
          Top
        </button>
        <button className="bg-gray-200 hover:bg-gray-300 py-0.5 px-3 rounded-md text-sm font-medium">
          Newest
        </button>
        <button className="ml-auto md:hidden" onClick={toggleCommentPanel}>
          {!commentPanel && <FiChevronDown className="text-xl" />}
          {commentPanel && <IoMdClose className="text-xl" />}
        </button>
      </div>
      <div
        ref={commentPanelRef}
        className="hidden md:block px-3 space-y-3 md:space-y-4 lg:space-y-6 mb-5"
      >
        {
          isLoading && <div>loading...</div>
        }
        {
          !comments?.data.length && <div className="mt-5 text-center text-gray-500">No comments yet</div>
        }
        {!isLoading &&
          !isError &&
          comments.data?.map((comment) => (
            <CommentCard
              key={comment._id}
              content={comment.content}
              avatar={comment.owner.avatar}
              username={comment.owner.username}
              updatedAt={comment.updatedAt}
              createdAt={comment.createdAt}
            />
          ))}
      </div>
    </>
  );
}

export default CommentList;
