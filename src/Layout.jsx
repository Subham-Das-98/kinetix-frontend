import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, LeftNav, BottomNav, FlexContainer } from "./components";

function Layout() {
  return (
    <>
      <Navbar />
      <FlexContainer>
        <LeftNav />
        <Outlet />
      </FlexContainer>
      <BottomNav />
    </>
  );
}

export default Layout;
