import { useLoginUserMutation } from "../api/userApi.js";
import { useDispatch } from "react-redux";
import { authUser } from "../features/auth/authSlice.js";

function useLogin() {
  const dispatch = useDispatch();
  let response = {};
  const [loginUser, { isError, error, isLoading, data }] =
    useLoginUserMutation();

  const onSubmit = async (data) => {
    try {
      response = await loginUser(data).unwrap();
      if (!response.error) {
        console.log("User login successfull: ", response);
        dispatch(
          authUser({
            loginStatus: true,
            user: response.data.user,
            accessToken: response.data.accessToken,
            refreshToken: response.data.refreshToken,
          })
        );
      }
      if (response.error) {
        throw new Error(response.error.status);
      }
    } catch (error) {
      console.log("LOGIN ERROR:: ", error);
    }
  };

  return { onSubmit, response, isError, error, isLoading, data };
}

export default useLogin;
