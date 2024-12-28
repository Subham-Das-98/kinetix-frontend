import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import {
  Navbar,
  LeftNav,
  BottomNav,
  FlexContainer,
  LoginModal,
} from "./components";
import { useSelector, useDispatch } from "react-redux";
import { openModal, closeModal } from "./features/global/globalSlice";
import useAuth from "./hooks/useAuth";

function Layout() {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.global.isModalOpen);
  const currentAuthState = useSelector((state) => state.auth);

  // try to authenticate on first render
  const isAuthenticated = useSelector((state) => state.global.isAuthenticated);
  const { initializeAuth } = useAuth();
  initializeAuth();

  if (!isAuthenticated)
    return (
      <>
        <div>Authentication in progress, please wait...</div>
      </>
    );

  return (
    <>
      <Navbar openModal={() => dispatch(openModal())} />
      <LoginModal
        closeModal={() => dispatch(closeModal())}
        isModalOpen={isModalOpen}
      />
      <FlexContainer>
        <LeftNav />
        <Outlet />
      </FlexContainer>
      <BottomNav />
    </>
  );
}

export default Layout;
