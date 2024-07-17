import { createContext, useContext, ReactNode } from "react";
import { useGetTweets } from "../hooks/useGetTweets"
import { useAuth } from "./authProvider"
import { useGetTweetsUserInfo } from "../hooks/useGetUserInfo";


const TweetContext = createContext<any>({});

export const useTweet = () => {
    return useContext(TweetContext)
}

export const TweetProvider = ({ children } : { children : ReactNode }) => {
    const { currentUser } = useAuth(); 
    const { userInfo, loading: userInfoLoading, error: userInfoError } = useGetTweetsUserInfo(currentUser.uid)
    const { currentUserTweets, loading : tweetsLoading } = useGetTweets(currentUser.uid);
    
    return(
        <TweetContext.Provider value={{ currentUserTweets, userInfo, tweetsLoading, userInfoLoading, userInfoError }}>
            { children }
        </TweetContext.Provider>
    )
}