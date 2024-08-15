import { TweetBox } from "./TweetBox/TweetBox";
import { Header } from "./Header";
import { TweetsContainer } from "./TweetsContainer";

export const MainHomeComponent = () => {
  return (
    <>
      <Header />
      <TweetBox />
      <TweetsContainer />
    </>
  );
};
