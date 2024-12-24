import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import useSignup from "../../hooks/useSignup.js";

function SignupPage() {
  const contentGenres = [
    "",
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

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    reset,
  } = useForm();

  const { onSubmit, isLoading, isError } = useSignup();

  // to compare with confirm-password
  const password = watch("password");

  // to reset form on success
  useEffect(() => {
    if(!isLoading && !isError) {
      reset();
    }
  }, [isLoading])

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
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-2"
              encType="multipart/form-data"
            >
              <div>
                <div className="flex items-center">
                  <label htmlFor="fullName" className="">
                    Full Name
                  </label>
                  {errors.fullName?.type === "required" && (
                    <div
                      role="alert"
                      className="inline ml-2 text-red-600 text-xs"
                    >
                      *required
                    </div>
                  )}
                </div>
                <input
                  type="text"
                  id="fullName"
                  className="bg-gray-100 outline-none w-full px-2 py-2 rounded-md text-sm md:text-base mt-0.5 border"
                  autoComplete="off"
                  {...register("fullName", { required: true })}
                />
              </div>
              <div>
                <div className="flex items-center">
                  <label htmlFor="username">Username</label>
                  {errors.username?.type === "required" && (
                    <div
                      role="alert"
                      className="inline ml-2 text-red-600 text-xs"
                    >
                      *required
                    </div>
                  )}
                </div>
                <input
                  type="text"
                  id="username"
                  className="bg-gray-100 outline-none w-full px-2 py-2 rounded-md text-sm md:text-base mt-0.5 border"
                  autoComplete="off"
                  {...register("username", { required: true })}
                />
              </div>
              <div>
                <div className="flex items-center">
                  <label htmlFor="email">Email</label>
                  {errors.email?.type === "required" && (
                    <div
                      role="alert"
                      className="inline ml-2 text-red-600 text-xs"
                    >
                      *required
                    </div>
                  )}
                </div>
                <input
                  type="text"
                  id="email"
                  className="bg-gray-100 outline-none w-full px-2 py-2 rounded-md text-sm md:text-base mt-0.5 border"
                  autoComplete="off"
                  {...register("email", { required: true })}
                />
              </div>
              <div>
                <div className="flex items-center">
                  <label htmlFor="password">Password</label>
                  {errors.password && (
                    <div
                      role="alert"
                      className="inline ml-2 text-red-600 text-xs"
                    >
                      {errors.password.message}
                    </div>
                  )}
                </div>
                <input
                  type="text"
                  id="password"
                  className="bg-gray-100 outline-none w-full px-2 py-2 rounded-md text-sm md:text-base mt-0.5 border"
                  autoComplete="off"
                  {...register("password", {
                    required: "*required",
                    minLength: {
                      value: 4,
                      message: "*password must be atleast 4 characters",
                    },
                  })}
                />
              </div>
              <div>
                <div className="flex items-center">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  {errors.confirmPassword && (
                    <div
                      role="alert"
                      className="inline ml-2 text-red-600 text-xs"
                    >
                      {errors.confirmPassword.message}
                    </div>
                  )}
                </div>
                <input
                  type="text"
                  id="confirmPassword"
                  className="bg-gray-100 outline-none w-full px-2 py-2 rounded-md text-sm md:text-base mt-0.5 border"
                  autoComplete="off"
                  {...register("confirmPassword", {
                    validate: (value) =>
                      value === password || "*password do not match",
                  })}
                />
              </div>
              <div>
                <div className="flex items-center">
                  <label htmlFor="contentGenre">Content Genre</label>
                  {errors.contentGenre && (
                    <div
                      role="alert"
                      className="inline ml-2 text-red-600 text-xs"
                    >
                      {errors.contentGenre.message}
                    </div>
                  )}
                </div>
                <select
                  id="contentGenre"
                  defaultValue={""}
                  className="bg-gray-100 outline-none ml-5 px-2 py-2 rounded-md text-sm md:text-base mt-0.5 text-center border"
                  {...register("contentGenre", {
                    required: false,
                    validate: (value) =>
                      contentGenres.includes(value) || "*invalid content genre",
                  })}
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
                  id="tags"
                  className="bg-gray-100 outline-none w-full px-2 py-2 rounded-md text-sm md:text-base mt-0.5 border"
                  autoComplete="off"
                  {...register("tags")}
                />
              </div>
              <div>
                <div className="flex items-center">
                  <label htmlFor="avatar">Profile Image</label>
                  {errors.avatar && (
                    <div
                      role="alert"
                      className="inline ml-2 text-red-600 text-xs"
                    >
                      {errors.avatar.message}
                    </div>
                  )}
                </div>
                <input
                  type="file"
                  id="avatar"
                  className="bg-gray-100 outline-none w-full px-2 py-2 rounded-md text-sm md:text-base mt-0.5 border"
                  {...register("avatar", {
                    required: "*required",
                    validate: {
                      maxCount: (files) =>
                        files.length === 1 || "*only one file is allowed",
                      mimeType: (files) =>
                        files[0]?.type.startsWith("image/") ||
                        "*invalid filetype",
                    },
                  })}
                />
              </div>
              <div>
                <div className="flex items-center">
                  <label htmlFor="coverImage">Cover Image</label>
                  {errors.coverImage && (
                    <div
                      role="alert"
                      className="inline ml-2 text-red-600 text-xs"
                    >
                      {errors.coverImage.message}
                    </div>
                  )}
                </div>
                <input
                  type="file"
                  id="coverImage"
                  className="bg-gray-100 outline-none w-full px-2 py-2 rounded-md text-sm md:text-base mt-0.5 border"
                  {...register("coverImage", {
                    required: false,
                    validate: {
                      maxCount: (files) =>
                        files.length <= 1 || "*only one file is allowed",
                      mimeType: (files) =>
                        files.length &&
                        (files[0]?.type.startsWith("image/") ||
                          "*invalid filetype"),
                    },
                  })}
                />
              </div>
              <div className="pt-5">
                <button
                  type="submit"
                  className="w-2/3 px-6 py-2 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-full mx-auto block mt-5 disabled:bg-gray-700 disabled:hover:cursor-not-allowed"
                  disabled={isLoading}
                >
                  {!isLoading && "Create Account"}
                  {isLoading && "please wait..."}
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
