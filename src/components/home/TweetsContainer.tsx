import { Box } from "@mui/material";
import { lazy, Suspense } from "react";
import { TweetSkeletonMultiple } from "../mui/skeleton/TweetSkeletonMultiple";
import { useTweet } from "../../context/tweetProvider";
const LazyTweets = lazy(() => import("../Tweets/Tweets"));
export const TweetsContainer = () => {
    const { currentUserTweets, currentUserFollowingTweets, tweetProviderLoading, userInfo } = useTweet();
   
    return (
        <>
            {(tweetProviderLoading) ? (
                <TweetSkeletonMultiple />
            ) :
                <>
                    <Box sx={{ display: "grid", gap: 2, mt: { lg: 0 } }}>
                        <Suspense fallback={<TweetSkeletonMultiple />}>
                            {[...currentUserTweets, ...currentUserFollowingTweets].sort((a, b) => b.createdAt - a.createdAt)?.map((tweet: any) => (
                                <LazyTweets currentUserTweet={tweet} userInfo={tweet.userInfo || userInfo} key={tweet.id} />
                            ))}
                        </Suspense>
                    </Box>
                </>
            }
        </>
    )
}