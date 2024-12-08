// Left Navigation for small to medium devices only, screen size < 768px
import React from "react";
import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { BsFire } from "react-icons/bs";
import { MdOutlineSubscriptions } from "react-icons/md";

function BottomNav() {
  return (
    <>
      <nav className="md:hidden fixed bottom-0 w-full bg-white py-2">
        <div className="">
          <ul className="flex justify-around text-xs text-center">
            <li>
              <Link to={"/"}>
                <div>
                  <IoMdHome className="text-2xl mx-auto" />
                  <span className="">Home</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <div>
                  <BsFire className="text-2xl mx-auto" />
                  <span>Trending</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to={"/channel/:username/studio"}>
                <div>
                  <AiOutlineVideoCameraAdd className="text-2xl mx-auto" />
                  <span>Studio</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to={"/feed/subscriptions"}>
                <div>
                  <MdOutlineSubscriptions className="text-2xl mx-auto" />
                  <span>Subscriptions</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <div>
                  <CiUser className="text-2xl mx-auto" />
                  <span>You</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default BottomNav;
