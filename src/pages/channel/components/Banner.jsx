import React from "react";

function Banner({ coverImage }) {
  return (
    <>
      <div className="w-auto h-24 md:h-32 lg:h-40 bg-slate-600 md:mr-3">
        <img
          src={coverImage}
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>
    </>
  );
}

export default Banner;
