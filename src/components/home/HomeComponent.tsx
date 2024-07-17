import { Tweets } from "../tweets/Tweets";
import { TweetComposer } from "./TweetComposer";
import { Box, Typography } from "@mui/material";
import { useTweet } from "../../context/tweetProvider";

export const HomeComponent = () => {
  const { currentUserTweets, tweetsLoading } = useTweet();
  
  if (tweetsLoading) return <Typography variant="h1" bgcolor={"white"} height={"100vh"}>Loading</Typography>

  return (
    <>
      <Typography
        hidden
        sx={{
          p: 2, bgcolor: 'White', display: {
            lg: 'block'
          }
        }}
        component="h1"
        variant="h5"
        fontWeight={800}
      >
        Home
      </Typography>
      <Box sx={{ borderTop: '1px solid #ccc', borderBottom: '1px solid #ccc', bgcolor: 'White', mb: { lg: 2 } }}>
        <TweetComposer />
      </Box>

      {currentUserTweets?.map((currentUserTweet: any) => {
        return (
          <Tweets currentUserTweet={currentUserTweet} key={currentUserTweet.id} />
        )
      })}

    </>
  );
}