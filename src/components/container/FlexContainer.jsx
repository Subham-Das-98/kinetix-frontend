import React from "react";

function FlexContainer({ children, className, gapX="md:gap-x-3", gapY="gap-y-0", ...props }) {
  return (
    <>
      <div className={`flex ${gapX} ${gapY} ${className}`} {...props}>{children}</div>
    </>
  );
}

export default FlexContainer;
