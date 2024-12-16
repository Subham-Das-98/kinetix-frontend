import React from "react";
import { NavLink } from "react-router-dom";
import { BsBroadcast } from "react-icons/bs";
import { LiaUploadSolid } from "react-icons/lia";
import { LiaEdit } from "react-icons/lia";

function TopActionBar() {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-y-3">
        <div>
          <h1 className="md:text-xl lg:text-2xl font-medium">
            Channel dashboard
          </h1>
        </div>
        <div className="md:ml-auto">
          <ul className="flex gap-x-3">
            <li>
              <button className="p-2 border rounded-full">
                <LiaUploadSolid className="text-lg md:text-xl lg:text-2xl" />
              </button>
            </li>
            <li>
              <button className="p-2 border rounded-full">
                <BsBroadcast className="text-lg md:text-xl lg:text-2xl" />
              </button>
            </li>
            <li>
              <button className="p-2 border rounded-full">
                <LiaEdit className="text-lg md:text-xl lg:text-2xl" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

function UploadCard() {
  return (
    <>
      <div className="border self-start p-4 md:p-5 rounded-3xl w-full md:w-96">
        <div className="border border-dashed rounded-xl p-3">
          <div>
            <img
              src="/svg/upload_illustration.svg"
              alt=""
              className="w-full block p-5 md:p-8 lg:p-11"
            />
          </div>
          <div className="my-5 text-center text-sm font-semibold text-gray-500">
            <p className="">Want to see metrics on your recent video?</p>
            <p>Upload and publish a video to get started</p>
          </div>
          <div className="mb-5">
            <button className="px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-full mx-auto block mt-5">
              Upload video
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function AnalyticsCard() {
  return (
    <>
      <div className="border self-start p-5 rounded-3xl w-full md:w-96">
        <div className="divide-y">
          <div className="mb-7">
            <h1 className="text-xl font-medium">Channel analytics</h1>
            <span className="block text-sm mt-2 md:mt-3 lg:mt-4">
              current subscribers
            </span>
            <span className="block text-3xl font-medium">99</span>
          </div>
          <div className="space-y-3">
            <div className="mt-3">
              <h1 className="font-medium">Summary</h1>
              <span className="text-xs md:text-sm text-gray-500">
                Last 28 days
              </span>
            </div>
            <div className="flex justify-between text-xs md:text-sm">
              <span>Views</span>
              <span>0 -</span>
            </div>
            <div className="flex justify-between text-xs md:text-sm pb-3">
              <span>Watch time &#40;hours&#41;</span>
              <span>0 -</span>
            </div>
          </div>
          <div>
            <div className="mt-3">
              <h1 className="font-medium">Top videos</h1>
              <span className="text-xs md:text-sm text-gray-500">
                Last 48 hours
              </span>
            </div>
            <div>
              <NavLink
                to="/channel/YourChannelName/studio/analytics"
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 font-medium rounded-full block mt-5 w-max"
              >
                Go to channel analytics
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function StudioDashboardPage() {
  return (
    <>
      <main className="flex-grow pr-3 md:pr-8 mb-12">
        <TopActionBar />
        <div className="mt-5 flex flex-wrap gap-5">
          <UploadCard />
          <AnalyticsCard />
        </div>
      </main>
    </>
  );
}

export default StudioDashboardPage;
