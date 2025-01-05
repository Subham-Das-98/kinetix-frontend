import {
  useAddLikeMutation,
  useAddDislikeMutation,
  useDeleteLikeMutation,
  useDeleteDislikeMutation,
} from "../api/impressionApi.js";

function useImpression() {
  // ADD LIKE
  const [
    addLike,
    {
      isLoading: addLikeIsLoading,
      isError: addLikeIsError,
      isSuccess: addLikeIsSuccess,
    },
  ] = useAddLikeMutation();

  const addLikeOnClick = async (refType, refId, refetch) => {
    try {
      const response = await addLike({
        refType,
        refId,
        accessToken: localStorage.getItem("accessToken"),
      });
      console.log(response);
      refetch();
    } catch (error) {
      console.log("ADD LIKE ERROR:: ", error);
    }
  };

  // DELETE LIKE
  const [
    deleteLike,
    {
      isLoading: deleteLikeIsLoading,
      isError: deleteLikeIsError,
      isSuccess: deleteLikeIsSuccess,
    },
  ] = useDeleteLikeMutation();

  const deleteLikeOnClick = async (refType, refId, refetch) => {
    try {
      const response = await deleteLike({
        refType,
        refId,
        accessToken: localStorage.getItem("accessToken"),
      });
      console.log(response);
      refetch();
    } catch (error) {
      console.log("DELETE LIKE ERROR:: ", error);
    }
  };

  // ADD DISLIKE
  const [
    addDislike,
    {
      isLoading: addDislikeIsLoading,
      isError: addDislikeIsError,
      isSuccess: addDislikeIsSuccess,
    },
  ] = useAddDislikeMutation();

  const addDislikeOnClick = async (refType, refId, refetch) => {
    try {
      const response = await addDislike({
        refType,
        refId,
        accessToken: localStorage.getItem("accessToken"),
      });
      console.log(response);
      refetch();
    } catch (error) {
      console.log("ADD DISLIKE ERROR:: ", error);
    }
  };

  // DELETE DISLIKE
  const [
    deleteDislike,
    {
      isLoading: deleteDislikeIsLoading,
      isError: deleteDislikeIsError,
      isSuccess: deleteDislikeIsSuccess,
    },
  ] = useDeleteDislikeMutation();

  const deleteDislikeOnClick = async (refType, refId, refetch) => {
    try {
      const response = await deleteDislike({
        refType,
        refId,
        accessToken: localStorage.getItem("accessToken"),
      });
      console.log(response);
      refetch();
    } catch (error) {
      console.log("DELETE DISLIKE ERROR:: ", error);
    }
  }

  return {
    addLikeOnClick,
    addLikeState: {
      isLoading: addLikeIsLoading,
      isError: addLikeIsError,
      isSuccess: addLikeIsSuccess,
    },
    deleteLikeOnClick,
    deleteLikeState: {
      isLoading: deleteLikeIsLoading,
      isError: deleteLikeIsError,
      isSuccess: deleteLikeIsSuccess,
    },
    addDislikeOnClick,
    addDisLikeState: {
      isLoading: addDislikeIsLoading,
      isError: addDislikeIsError,
      isSuccess: addDislikeIsSuccess,
    },
    deleteDislikeOnClick,
    deleteDislikeState: {
      isLoading: deleteDislikeIsLoading,
      isError: deleteDislikeIsError,
      isSuccess: deleteDislikeIsSuccess,
    }
  };
}

export default useImpression;
