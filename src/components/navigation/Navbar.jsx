import React from "react";
import { CiSearch } from "react-icons/ci";
import { MdMic } from "react-icons/md";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { BsBell } from "react-icons/bs";
import { CiUser } from "react-icons/ci";

function Navbar() {
  return (
    <>
      <nav>
        <div className="flex items-center justify-between">
          <div className="">
            <img src="/img/logo-light.png" alt="logo" className="w-32" />
          </div>

          <div className="hidden md:flex gap-x-4 items-center flex-1 md:max-w-md lg:max-w-xl">
            <form
              action=""
              className="w-full"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex items-center">
                <input
                  type="text"
                  className="outline-none border rounded-l-full w-full h-10 px-4 focus:border-blue-600"
                  placeholder="Search"
                />
                <button
                  type="submit"
                  className="w-20 h-10 border border-l-0 rounded-r-full bg-gray-50 hover:bg-gray-100"
                >
                  <CiSearch className="cursor-pointer text-2xl mx-auto" />
                </button>
              </div>
            </form>
            <div className="bg-gray-100 p-2 rounded-full hover:bg-gray-200">
              <MdMic className="cursor-pointer text-2xl" />
            </div>
          </div>

          <div className="flex gap-x-2.5 sm:gap-x-4 md:gap-x-6 lg:gap-x-8 mr-4 sm:mr-5 md:mr-6 lg:mr-8">
            <CiSearch className="cursor-pointer text-2xl md:hidden" />
            <MdMic className="cursor-pointer text-2xl md:hidden" />
            <AiOutlineVideoCameraAdd className="hidden md:block cursor-pointer text-2xl" />
            <BsBell className="cursor-pointer text-2xl" />
            <CiUser className="hidden md:block cursor-pointer text-2xl" />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
