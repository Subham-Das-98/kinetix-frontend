import { useAddCommentMutation } from "../api/commentApi.js";

function useComment() {
  const [addComment, { isError: addCommentError, isLoading: addCommentLoading, isSuccess: addCommentSuccess }] =
    useAddCommentMutation();

  const addCommentOnSubmit = async (data) => {
    try {
      const response = await addComment({ ...data, accessToken: localStorage.getItem("accessToken") });
      console.log(response);
    } catch (error) {
      console.log("COMMENT ADD ERROR:: ", error);
    }
  };

  return { addCommentOnSubmit, addCommentError, addCommentLoading, addCommentSuccess };
}

export default useComment;
