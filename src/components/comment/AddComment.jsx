import React, { useState } from "react";
import { PiPaperPlaneRightFill } from "react-icons/pi";

function AddComment() {
  const [text, setText] = useState("");
  return (
    <>
      <div className="flex items-center gap-x-2 bg-gray-100 p-3 rounded-xl">
        <div className="p-0.5">
          <img
            src="/temp/test-avatar.jpg"
            alt=""
            className="w-8 aspect-square object-cover rounded-full"
          />
        </div>
        <div className="flex-1">
          <form action="" onSubmit={(e) => e.preventDefault()} className="">
            <div className="flex gap-x-1.5">
              <textarea
                rows="1"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="outline-none border rounded-full px-4 py-1.5 text-xs md:text-sm w-full resize-none"
                type=""
                name=""
                id=""
                placeholder="add comment..."
              />
              <input
                type="submit"
                value="Comment"
                className="hidden lg:inline bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-sm font-medium px-3 py-2 rounded-full text-white cursor-pointer disabled:cursor-not-allowed"
                disabled={!text}
              />
              <input
                type="reset"
                value="Cancel"
                className="hidden lg:inline bg-gray-500 hover:bg-gray-600 text-sm font-medium px-3 py-2 rounded-full text-white cursor-pointer"
              />
              <button
                type="submit"
                className="lg:hidden md:px-1.5 disabled:invisible"
                disabled={!text}
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
