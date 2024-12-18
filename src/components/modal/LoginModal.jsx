import React from "react";
import { NavLink } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";

function LoginModal({ closeModal, isModalOpen }) {
  function handleSubmit(e) {
    e.preventDefault();
  }

  if (!isModalOpen) return null;

  return (
    <>
      <div
        className="modal-overlay flex justify-center items-center fixed top-0 left-0 bottom-0 right-0 backdrop-brightness-50 backdrop-blur-sm px-3 z-50"
        onClick={closeModal}
      >
        <div
          className="modal-content bg-white rounded-3xl w-72"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center border-b py-3.5 px-5">
            <div className="text-lg md:text-xl lg:text-2xl font-medium">
              Login
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
                <input
                  type="text"
                  name="videoTitle"
                  id="title"
                  className="block w-full outline-none border px-2 py-1 text-sm"
                  placeholder="Username or Email"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="videoTitle"
                  id="title"
                  className="block w-full outline-none border px-2 py-1 text-sm"
                  placeholder="Password"
                />
              </div>
              <div className="text-xs">
                <span>Don't have an account? </span>
                <NavLink
                  to="/signup"
                  className={"text-blue-500 underline underline-offset-1"}
                  onClick={closeModal}
                >
                  Create account.
                </NavLink>
              </div>
              <div>
                <button className="px-6 py-2 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-full mx-auto block mt-5">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginModal;
