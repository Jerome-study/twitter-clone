import { Tweets } from "../tweets/Tweets";
import { TweetComposer } from "./TweetComposer";
import { useAuth } from "../../context/authProvider";
import { useGetTweets } from "../../hooks/useGetTweets";
import { Box, Typography } from "@mui/material";

export const HomeComponent = () => {
  const { currentUser } = useAuth();
  const { currentUserTweets, loading } = useGetTweets(currentUser.uid);

  if (loading) return <Typography variant="h1" bgcolor={"white"} height={"100vh"}>Loading</Typography>

  return (
    <>
      <Typography 
        hidden 
        sx={{ p:2, bgcolor: 'White', display: {
          lg: 'block'
        }}} 
        component="h1" 
        variant="h5" 
        fontWeight={800}
      >
        Home
      </Typography>
      <Box sx={{ borderTop: '1px solid #ccc', borderBottom: '1px solid #ccc', bgcolor: 'White', mb: { lg: 2} }}>
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