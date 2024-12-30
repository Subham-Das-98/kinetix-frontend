import React from 'react'

import { BsDot } from "react-icons/bs";
import { BiLike, BiDislike, BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { RiShareForwardLine, RiFlagLine } from "react-icons/ri";
import { LiaDownloadSolid } from "react-icons/lia";
import { MdSort } from "react-icons/md";

function SocialActions() {
  return (
    <>
      <div className="overflow-x-auto no-scrollbar mt-3 md:mt-4">
        <ul className="flex items-center gap-x-1.5 md:gap-x-2.5">
          <li className="bg-gray-100 rounded-full flex-shrink-0">
            <button className="px-3.5 py-1">
              <BiLike className="inline text-lg md:text-xl lg:text-2xl" />
              <span className="text-sm md:text-base font-medium ml-1.5">
                4K
              </span>
            </button>
            <span className="text-sm text-gray-500">|</span>
            <button className="px-3.5 py-1">
              <BiDislike className="inline text-lg md:text-xl lg:text-2xl" />
              <span className="text-sm md:text-base font-medium ml-1.5">
                99
              </span>
            </button>
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

export default SocialActions