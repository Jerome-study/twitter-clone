import { Tweets } from "../tweets/Tweets";
import { TweetComposer } from "./TweetComposer";
import { useAuth } from "../../context/authProvider";
import { useGetTweets } from "../../hooks/useGetTweets";

export const HomeComponent = () => {
  const { currentUser } = useAuth();
  const { currentUserTweets, loading } = useGetTweets(currentUser.uid);

  if (loading) return <h1>Loading</h1>

  return (
    <>
      <TweetComposer />
      { loading && <h1>Loading</h1>}
      {currentUserTweets?.map((currentUserTweet: any) => {
        return (
          <Tweets currentUserTweet={currentUserTweet} key={currentUserTweet.id} />
        )
      })}
    </>
  );
}