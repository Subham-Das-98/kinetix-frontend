import {
  useValidateAccessTokenMutation,
  useRefreshAccessTokenMutation,
} from "../api/userApi.js";
import { useDispatch, useSelector } from "react-redux";
import { authUser } from "../features/auth/authSlice.js";

function useAccessToken() {
  // verify if the accessToken has expired or not
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);

  const [validateAccessToken] = useValidateAccessTokenMutation();
  const [refreshAccessToken] = useRefreshAccessTokenMutation();

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
        console.log("Error refreshing access token: ", error)
      }
    }
  };

  return { renewAccessToken };
}

export default useAccessToken;
