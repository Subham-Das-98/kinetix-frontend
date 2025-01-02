import { useParams } from "react-router-dom";
import {
  useSubscribeChannelMutation,
  useUnsubscribeChannelMutation,
} from "../api/subscriptionApi";

function useSubscription() {
  const { username: channelName } = useParams();
  const [subscribeChannel] = useSubscribeChannelMutation();
  const subscribeOnClick = async (refetch) => {
    try {
      const response = await subscribeChannel({
        channelName,
        accessToken: localStorage.getItem("accessToken"),
      });
      console.log(response);
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  const [unsubscribeChannel] = useUnsubscribeChannelMutation();
  const unsubscribeOnClick = async (refetch) => {
    try {
      const response = await unsubscribeChannel({
        channelName,
        accessToken: localStorage.getItem("accessToken"),
      });
      console.log(response);
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  return { subscribeOnClick, unsubscribeOnClick };
}

export default useSubscription;
