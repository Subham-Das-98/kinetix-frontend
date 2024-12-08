import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, LeftNav, BottomNav, FlexContainer } from "./components";
import { HomePage } from "./pages";

function Layout() {
  return (
    <>
      <Navbar />
      <FlexContainer>
        <LeftNav />
        <HomePage />
      </FlexContainer>
      <BottomNav />
    </>
  );
}

export default Layout;
