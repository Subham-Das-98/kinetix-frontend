import { useLogoutUserMutation } from "../api/userApi";
import { logOutUser } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";

function useLogout() {
  const dispatch = useDispatch();
  let response = {};
  const [logoutUser, { isError, error, isLoading, data }] =
    useLogoutUserMutation();

  const logoutHandler = async () => {
    try {
      response = await logoutUser(localStorage.getItem("accessToken")).unwrap();
      if (!response.error) {
        console.log(response);
        dispatch(logOutUser());
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { logoutHandler, response, isError, error, isLoading, data };
}

export default useLogout;
