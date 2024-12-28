import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ProtectedContainer({ children, authentication = true }) {
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate();
  const loginStatus = useSelector((state) => state.auth.loginStatus);

  useEffect(() => {
    if (authentication && loginStatus !== authentication) {
      navigate("/");
    }
    setLoader(false);
  }, [authentication, loginStatus, navigate]);

  if (loader) {
    return (
      <>
        <div>Please wait...</div>
      </>
    );
  }

  return <>{children}</>;
}

export default ProtectedContainer;
