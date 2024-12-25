import { useLogoutUserMutation } from "../api/userApi.js";
import { unauthUser } from "../features/auth/authSlice.js";
import { useDispatch } from "react-redux";
import useAccessToken from "./useAccessToken.js";

function useLogout() {
  const dispatch = useDispatch();
  const { renewAccessToken } = useAccessToken();
  const [logoutUser, { isError, error, isLoading, data }] =
    useLogoutUserMutation();

  const logoutHandler = async () => {
    // if access token expierd but not refresh token
    await renewAccessToken();
    try {
      const logoutResponse = await logoutUser(
        localStorage.getItem("accessToken")
      ).unwrap();

      if (!logoutResponse.error) {
        console.log(logoutResponse);
        dispatch(unauthUser());
      }
    } catch (error) {
      console.log("Login handler error: ", error);
    }
  };

  return { logoutHandler, isError, error, isLoading, data };
}

export default useLogout;
