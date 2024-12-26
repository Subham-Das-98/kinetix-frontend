import {
  useValidateAccessTokenMutation,
  useRefreshAccessTokenMutation,
} from "../api/userApi.js";
import { useDispatch, useSelector } from "react-redux";
import { authUser, unauthUser } from "../features/auth/authSlice.js";

function useAccessToken() {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);

  const [validateAccessToken] = useValidateAccessTokenMutation();
  const [refreshAccessToken] = useRefreshAccessTokenMutation();

  // if both access token and refresh token has expierd 
  const autoLogout = () => {
    dispatch(unauthUser());
    throw new ReferenceError("Refresh Token removed: login again");
  }

  // if access token expierd but not refresh token
  const renewAccessToken = async () => {
    try {
      const validateAccessTokenResponse = await validateAccessToken(
        localStorage.getItem("accessToken")
      ).unwrap();
      // console.log("Access token is valid: ", validateAccessTokenResponse);
    } catch (error) {
      // console.log("Access token validation failed: ", error);
      try {
        const refreshAccessTokenResponse = await refreshAccessToken(
          localStorage.getItem("refreshToken")
        ).unwrap();

        // console.log("Access token successfully refreshed: ", refreshAccessTokenResponse);

        const { accessToken, refreshToken } = refreshAccessTokenResponse.data;
        dispatch(authUser({...authState, accessToken, refreshToken}));
      } catch (error) {
        console.log("Error while refreshing access token:: refresh token expired:: automatically logged out: ", error)
        autoLogout();
      }
    }
  };

  return { renewAccessToken, autoLogout };
}

export default useAccessToken;
