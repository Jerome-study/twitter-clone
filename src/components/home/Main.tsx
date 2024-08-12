import { TweetComposer } from "./TweetComposer";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useTweet } from "../../context/tweetProvider";
import { useResponsive } from "../../hooks/useResponsive";
import { TweetSkeleton } from "../mui/skeleton/TweetSkeleton";
import { lazy, Suspense } from "react";

const LazyTweets = lazy(() => import("../Tweets/Tweets"));

export const MainHomeComponent = () => {
  const { currentUserTweets, currentUserFollowingTweets, tweetProviderLoading } = useTweet();
  const { isMobile } = useResponsive();
  const { userInfo } = useTweet();

  return (
    <>
      { !isMobile && <Typography sx={{
          p: 2,
          bgcolor: "custom.white",
          mb: 2,
          borderRadius: 5
        }}
        component="h1"
        variant="h5"
        fontWeight={800}
      >
        Home
      </Typography>}

      <Box sx={{ bgcolor: "custom.white", mb : 2, borderRadius: 5 }}>
        <TweetComposer />
      </Box>

      {(tweetProviderLoading) ? (
        <Box>
          {Array.from({ length: 10 }, (_, index) => (
            <TweetSkeleton key={index} />
          ))}
        </Box>
      ) :
        <>
          <Box sx={{ display: "grid", gap: 2, mt: { lg: 0}}}>
            <Suspense fallback={<CircularProgress />}>
              {[...currentUserTweets, ...currentUserFollowingTweets].sort((a,b) => b.createdAt - a.createdAt )?.map((tweet: any) => (
                <LazyTweets currentUserTweet={tweet} userInfo={tweet.userInfo || userInfo} key={tweet.id} />
              ))}
            </Suspense>
          </Box>
        </>
      }
    </>
  );
};
