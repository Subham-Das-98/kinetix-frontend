import React from "react";
import { PostCard } from "../index.js";

function PostList() {
  return (
    <>
      <div className="space-y-2 md:space-y-5">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </>
  );
}

export default PostList;
