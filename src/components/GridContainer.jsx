import React from "react";

function GridContainer({ children }) {
  return (
    <>
      <div
        className="mx-3 md:mx-0 md:mr-3"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(16.75rem, 1fr))",
          gap: ".75rem",
        }}
      >
        {children}
      </div>
    </>
  );
}

export default GridContainer;
