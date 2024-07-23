import { createContext, useContext, ReactNode } from "react";
import { useGetTweets } from "../hooks/useGetTweets"
import { useAuth } from "./authProvider"
import { useGetTweetsUserInfo } from "../hooks/useGetUserInfo";
import { useGetFollowing } from "../hooks/useGetFollowing";
import { useGetFollowingTweets } from "../hooks/useGetFollowingTweets";


const TweetContext = createContext<any>({});

export const useTweet = () => {
    return useContext(TweetContext)
}

export const TweetProvider = ({ children } : { children : ReactNode }) => {
    const { currentUser } = useAuth(); 
    const { userInfo, loading: userInfoLoading } = useGetTweetsUserInfo(currentUser.uid)
    const { currentUserFollowing, loading : currentUserFollowingLoading, setCurrentUserFollowing } = useGetFollowing(currentUser.uid);
    const { currentUserFollowingTweets, loading : currentUserFollowingTweetsLoading } = useGetFollowingTweets(currentUserFollowing);
    const { currentUserTweets, loading : tweetsLoading, setCurrentUserTweets } = useGetTweets(currentUser.uid);
    const tweetProviderLoading = tweetsLoading || currentUserFollowingLoading || currentUserFollowingTweetsLoading || userInfoLoading
    return(
        <TweetContext.Provider value={{ currentUserTweets, setCurrentUserTweets, tweetProviderLoading, currentUserFollowingTweets, userInfo, setCurrentUserFollowing, currentUserFollowing }}>
            { children }
        </TweetContext.Provider>
    )
}