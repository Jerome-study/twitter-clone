import { TweetComposer } from "./TweetComposer";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useTweet } from "../../context/tweetProvider";
import { useResponsive } from "../../hooks/useResponsive";
import { TweetSkeleton } from "../mui/skeleton/TweetSkeleton";
import { lazy, Suspense } from "react";
import { TweetProps } from "../../models/typescript";

const LazyTweets = lazy(() => import("../tweets/Tweets"));

export const HomeComponent = () => {
  const { currentUserTweets, tweetsLoading } = useTweet();
  const { isMobile } = useResponsive();

  return (
    <>
      <Typography
        hidden
        sx={{
          p: 2, 
          display: { lg: 'block' }
        }}
        component="h1"
        variant="h5"
        fontWeight={800}
      >
        Home
      </Typography>

      <Box sx={{ borderTop: '1px solid #ccc', borderBottom: '1px solid #ccc' }}>
        <TweetComposer />
        {!isMobile && (
          <Box py={1} bgcolor={"HomeComponentColors.divider"} />
        )}
      </Box>

      {tweetsLoading ? (
        <Box>
          {Array.from({ length: 10 }, (_, index) => (
            <TweetSkeleton key={index} />
          ))}
        </Box>
      ) : 
        <Box>
          <Suspense fallback={<CircularProgress />}>
            {currentUserTweets?.map((tweet : TweetProps) => (
              <LazyTweets currentUserTweet={tweet} key={tweet.id} />
            ))}
          </Suspense>
        </Box>
      }
      
    </>
  );
};
