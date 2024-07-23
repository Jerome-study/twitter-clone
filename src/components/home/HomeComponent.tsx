import { TweetComposer } from "./TweetComposer";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useTweet } from "../../context/tweetProvider";
import { useResponsive } from "../../hooks/useResponsive";
import { TweetSkeleton } from "../mui/skeleton/TweetSkeleton";
import { lazy, Suspense } from "react";

const LazyTweets = lazy(() => import("../tweets/Tweets"));

export const HomeComponent = () => {
  const { currentUserTweets, currentUserFollowingTweets, tweetProviderLoading } = useTweet();
  const { isMobile } = useResponsive();
  const { userInfo } = useTweet();

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

      {(tweetProviderLoading) ? (
        <Box>
          {Array.from({ length: 10 }, (_, index) => (
            <TweetSkeleton key={index} />
          ))}
        </Box>
      ) :
        <>
          <Box>
            <Suspense fallback={<CircularProgress />}>
              {[...currentUserTweets, ...currentUserFollowingTweets].sort((a,b) => a.createdAt - b.createdAt)?.map((tweet: any) => (
                <LazyTweets currentUserTweet={tweet} userInfo={tweet.userInfo || userInfo} key={tweet.id} />
              ))}
            </Suspense>
          </Box>
        </>
      }

    </>
  );
};
