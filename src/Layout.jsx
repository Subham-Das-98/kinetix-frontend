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
import { openLoginModal, closeLoginModal } from "./features/global/globalSlice";
import useAuth from "./hooks/useAuth";

function Layout() {
  const dispatch = useDispatch();
  const isLoginModalOpen = useSelector((state) => state.global.isLoginModalOpen);
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
      <Navbar openModal={() => dispatch(openLoginModal())} />
      <LoginModal
        closeModal={() => dispatch(closeLoginModal())}
        isModalOpen={isLoginModalOpen}
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
