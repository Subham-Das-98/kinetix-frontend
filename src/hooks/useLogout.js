import { useLogoutUserMutation } from "../api/userApi.js";
import { unauthUser } from "../features/auth/authSlice.js";
import { useDispatch } from "react-redux";
import useAuth from "./useAuth.js";

function useLogout() {
  const dispatch = useDispatch();
  const { renewAccessToken } = useAuth();
  const [logoutUser, { isError, error, isLoading, data }] =
    useLogoutUserMutation();

  const logoutHandler = async () => {
    try {
      // if access token expierd but not refresh token
      await renewAccessToken();

      // if access token is valid
      const logoutResponse = await logoutUser(
        localStorage.getItem("accessToken")
      ).unwrap();

      if (!logoutResponse.error) {
        console.log(logoutResponse);
        dispatch(unauthUser());
      }
    } catch (error) {
      console.log("Logout handler error: ", error);
    }
  };

  return { logoutHandler, isError, error, isLoading, data };
}

export default useLogout;
