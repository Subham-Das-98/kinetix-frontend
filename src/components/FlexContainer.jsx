import React from "react";

function FlexContainer({ children }) {
  return (
    <>
      <div className="block md:flex gap-x-3">{children}</div>
    </>
  );
}

export default FlexContainer;
