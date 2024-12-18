import React from "react";

function SignupPage() {
  const contentGenres = [
    "creator",
    "adventure",
    "music",
    "gaming",
    "education",
    "comedy",
    "news",
    "sports",
    "technology",
    "travel",
    "lifestyle",
    "fashion",
    "food & cooking",
    "health & fitness",
    "diy & crafts",
    "animation",
    "documentary",
    "movies & entertainment",
    "vlogs",
    "science",
    "history",
    "motivational & self-help",
    "podcasts & interviews",
    "live streams",
    "art & design",
    "cars & automotive",
    "business & finance",
    "nature & wildlife",
    "kids & family",
    "horror & mystery",
    "reviews & unboxings",
    "tutorials & how-to",
  ];

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <>
      <main className="flex-grow">
        <div className="px-3 w-full max-w-xl mx-auto mb-28">
          <div className="mt-2 md:mt-3 lg:mt-5">
            <h1 className="text-center text-lg font-medium text-gray-600">
              Create a free account now
            </h1>
          </div>
          <div className="mt-5">
            <form onSubmit={handleSubmit} className="space-y-2">
              <div>
                <label htmlFor="fullName" className="">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  className="bg-gray-100 outline-none w-full px-2 py-2 rounded-md text-sm md:text-base mt-0.5 border"
                  autoComplete="off"
                />
              </div>
              <div>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="bg-gray-100 outline-none w-full px-2 py-2 rounded-md text-sm md:text-base mt-0.5 border"
                  autoComplete="off"
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="bg-gray-100 outline-none w-full px-2 py-2 rounded-md text-sm md:text-base mt-0.5 border"
                  autoComplete="off"
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="text"
                  name="password"
                  id="password"
                  className="bg-gray-100 outline-none w-full px-2 py-2 rounded-md text-sm md:text-base mt-0.5 border"
                  autoComplete="off"
                />
              </div>
              <div>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="text"
                  name="confirmPassword"
                  id="confirmPassword"
                  className="bg-gray-100 outline-none w-full px-2 py-2 rounded-md text-sm md:text-base mt-0.5 border"
                  autoComplete="off"
                />
              </div>
              <div>
                <label htmlFor="contentGenre">Content Genre</label>
                <select
                  name="contentGenre"
                  id="contentGenre"
                  defaultValue={""}
                  className="bg-gray-100 outline-none ml-5 px-2 py-2 rounded-md text-sm md:text-base mt-0.5 text-center border"
                >
                  <option value="" hidden disabled>
                    --select--
                  </option>
                  {contentGenres.map((genre) => (
                    <option key={genre}>{genre}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="tags">Tags</label>
                <input
                  type="text"
                  name="tags"
                  id="tags"
                  className="bg-gray-100 outline-none w-full px-2 py-2 rounded-md text-sm md:text-base mt-0.5 border"
                  autoComplete="off"
                />
              </div>
              <div>
                <label htmlFor="avatar">Profile Image</label>
                <input
                  type="file"
                  name="avatar"
                  id="avatar"
                  className="bg-gray-100 outline-none w-full px-2 py-2 rounded-md text-sm md:text-base mt-0.5 border"
                />
              </div>
              <div>
                <label htmlFor="coverImage">Cover Image</label>
                <input
                  type="file"
                  name="coverImage"
                  id="coverImage"
                  className="bg-gray-100 outline-none w-full px-2 py-2 rounded-md text-sm md:text-base mt-0.5 border"
                />
              </div>
              <div className="pt-5">
                <button className="w-2/3 px-6 py-2 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-full mx-auto block mt-5">
                  Create Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default SignupPage;
