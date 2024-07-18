import { Tweets } from "../tweets/Tweets";
import { TweetComposer } from "./TweetComposer";
import { Box, Typography } from "@mui/material";
import { useTweet } from "../../context/tweetProvider";
import { useResponsive } from "../../hooks/useResponsive";

export const HomeComponent = () => {
  const { currentUserTweets, tweetsLoading } = useTweet();
  const { isMobile } = useResponsive();

  if (tweetsLoading) return <Typography variant="h1" height={"100vh"}>Loading</Typography>

  return (
    <>
      <Typography
        hidden
        sx={{
          p: 2, display: {
            lg: 'block'
          }
        }}
        component="h1"
        variant="h5"
        fontWeight={800}
      >
        Home
      </Typography>
      <Box sx={{ borderTop: '1px solid #ccc', borderBottom: '1px solid #ccc' }}>
        <TweetComposer />
        { !isMobile && <Box py={1} bgcolor={"#ccc"}></Box>}
      </Box>

      {currentUserTweets?.map((currentUserTweet: any) => {
        return (
          <Tweets currentUserTweet={currentUserTweet} key={currentUserTweet.id} />
        )
      })}

    </>
  );
}