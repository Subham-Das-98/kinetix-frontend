import { useCreateUserMutation } from "../api/userApi";

function useSignup() {
  const [createUser, { isLoading, isSuccess, isError, error, data }] =
    useCreateUserMutation();

  const onSubmit = async (data) => {
    // Convert to FormData for uploading
    const formData = new FormData();

    for (const key in data) {
      if (key === "avatar") {
        formData.append(key, data[key][0]); // Add file to FormData
      } else if (key === "coverImage") {
        formData.append(key, data[key][0]);
      } else {
        formData.append(key, data[key]);
      }
    }

    // api call to register user
    try {
      const response = await createUser(formData).unwrap();
      console.log("Accounted created successfully:: ", response);
    } catch (error) {
      console.log("SIGNUP ERROR:: ", error);
    }
  };

  return { onSubmit, isLoading, isSuccess, isError, error, data };
}

export default useSignup;
