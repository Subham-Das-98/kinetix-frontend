import React from "react";
import { CiSearch } from "react-icons/ci";
import { MdMic } from "react-icons/md";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { BsBell } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";

function Navbar({openModal}) {
  return (
    <>
      <header className="sticky top-0">
        <nav className="bg-white">
          <div className="flex items-center justify-between">
            <div className="">
              <Link to="/">
                <img src="/img/logo-light.png" alt="logo" className="w-32" />
              </Link>
            </div>

            <div className="hidden md:flex gap-x-4 items-center flex-1 md:max-w-96 lg:max-w-xl">
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

            <div className="flex gap-x-2.5 md:gap-x-4 lg:gap-x-6 mr-4 sm:mr-5 md:mr-6 lg:mr-8">
              <button className="md:hidden">
                <CiSearch className="cursor-pointer text-2xl" />
              </button>
              <button className="md:hidden">
                <MdMic className="cursor-pointer text-2xl" />
              </button>
              <button className="hidden md:block">
                <AiOutlineVideoCameraAdd className="cursor-pointer text-lg md:text-xl lg:text-2xl" />
              </button>
              <button className="border rounded-full px-2 py-1 md:px-3 md:py-1.5 text-blue-600 hover:bg-blue-100" onClick={openModal}>
                <div className="flex items-center gap-x-1">
                  <CiUser className="inline cursor-pointer text-lg md:text-xl lg:text-2xl" />
                  <span className="text-sm md:text-base font-medium">Sign in</span>
                </div>
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
