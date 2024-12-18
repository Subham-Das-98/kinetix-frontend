import React, { useEffect, useState, useId } from "react";
import { NavLink } from "react-router-dom";
import { BsBroadcast } from "react-icons/bs";
import { LiaUploadSolid } from "react-icons/lia";
import { LiaEdit } from "react-icons/lia";
import { RxCross1 } from "react-icons/rx";

function TopActionBar({ openModal }) {
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
              <button className="p-2 border rounded-full" onClick={openModal}>
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

function UploadCard({ openModal }) {
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
            <button
              className="px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-full mx-auto block mt-5"
              onClick={openModal}
            >
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

function UploadVideoModal({ closeModal, isModalOpen }) {
  const genreOptions = [
    "video",
    "tutorials",
    "vlogs",
    "reviews",
    "live streams",
    "short films",
    "documentaries",
    "music videos",
    "interviews",
    "podcasts",
    "gameplay videos",
    "unboxings",
    "event coverage",
    "challenges",
    "reaction videos",
    "skits",
    "parodies",
    "q&a sessions",
    "educational lectures",
    "webinars",
    "time-lapse videos",
    "asmr",
    "diy projects",
    "fitness workouts",
    "travel diaries",
    "animation",
    "behind-the-scenes",
    "motivational speeches",
    "movie/tv show recaps",
    "compilation videos",
    "news reports",
  ];

  function handleSubmit(e) {
    e.preventDefault();
  }

  if (!isModalOpen) return null;

  return (
    <>
      <div
        className="modal-overlay flex justify-center items-center fixed top-0 left-0 bottom-0 right-0 backdrop-brightness-50 backdrop-blur-sm px-3"
        onClick={closeModal}
      >
        <div
          className="modal-content bg-white rounded-3xl w-full md:w-3/4 lg:w-1/2"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center border-b py-3.5 px-5">
            <div className="text-lg md:text-xl lg:text-2xl font-medium">
              Upload video
            </div>
            <button
              onClick={closeModal}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <RxCross1 className="text-xl" />
            </button>
          </div>
          <div className="pt-3 pb-5 px-5 max-h-[32rem] overflow-y-auto">
            <form onSubmit={handleSubmit} className="space-y-2">
              <div>
                <label
                  htmlFor="title"
                  className="block mb-0.5 font-medium text-sm md:text-base"
                >
                  Title
                </label>
                <input
                  type="text"
                  name="videoTitle"
                  id="title"
                  className="block w-full outline-none border px-2 py-1 text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="desc"
                  className="block mb-0.5 font-medium text-sm md:text-base"
                >
                  Description
                </label>
                <textarea
                  type="text"
                  rows={3}
                  name="videoDesc"
                  id="desc"
                  className="block w-full outline-none border px-2 py-1 resize-none text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="genre"
                  className="mb-0.5 font-medium text-sm md:text-base"
                >
                  Genre
                </label>
                <select
                  name="videoGenre"
                  id="genre"
                  className="outline-none border px-2 py-1 text-sm ml-3"
                  defaultValue={""}
                >
                  <option value="" hidden disabled>
                    --select--
                  </option>
                  {genreOptions.map((genre) => (
                    <option key={genre}>{genre}</option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="tags"
                  className="block mb-0.5 font-medium text-sm md:text-base"
                >
                  Tags
                </label>
                <input
                  type="text"
                  name="videoTags"
                  id="tags"
                  className="block w-full outline-none border px-2 py-1 text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="video"
                  className="block mb-0.5 font-medium text-sm md:text-base"
                >
                  Video
                </label>
                <input type="file" name="videoFile" id="video" />
              </div>
              <div>
                <label
                  htmlFor="thumbnail"
                  className="block mb-0.5 font-medium text-sm md:text-base"
                >
                  Thumbnail
                </label>
                <input type="file" name="videoThumbnail" id="thumbnail" />
              </div>

              <div>
                <button className="px-6 py-2 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-full mx-auto block mt-5" name="uploadBtn">
                  Upload
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

function StudioDashboardPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }
  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      <main className="flex-grow pr-3 md:pr-8 mb-12">
        <TopActionBar openModal={openModal} />
        <UploadVideoModal closeModal={closeModal} isModalOpen={isModalOpen} />
        <div className="mt-5 flex flex-wrap gap-5">
          <UploadCard openModal={openModal} />
          <AnalyticsCard />
        </div>
      </main>
    </>
  );
}

export default StudioDashboardPage;