import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import {
  Navbar,
  LeftNav,
  BottomNav,
  FlexContainer,
  LoginModal,
} from "./components";
import { useSelector } from "react-redux";

function Layout() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }
  function closeModal() {
    setIsModalOpen(false);
  }

  const currentAuthState = useSelector((state) => state.auth);
  useEffect(() => {
    console.log(currentAuthState)
  }, [currentAuthState, isModalOpen]);

  return (
    <>
      <Navbar openModal={openModal} />
      <LoginModal closeModal={closeModal} isModalOpen={isModalOpen} />
      <FlexContainer>
        <LeftNav />
        <Outlet />
      </FlexContainer>
      <BottomNav />
    </>
  );
}

export default Layout;
