import React from "react";

function FlexContainer({ children }) {
  return (
    <>
      <div className="flex md:gap-x-3">{children}</div>
    </>
  );
}

export default FlexContainer;
