import { useEffect, useState } from "react"
import { useFireStore } from "../config/firebase";
import { TweetProps } from "../models/typescript";

export const useGetFollowingTweets = (followingIds: string[]) => {
    const [currentUserFollowingTweets, setCurrentUserFollowingTweets] = useState<TweetProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [firstLoad, setFirstLoad] = useState(true);
    const { query, getDocs, collection, db, where } = useFireStore();
    
    useEffect(() => {
        setLoading(true)
        if (followingIds.length < 1) {
            setCurrentUserFollowingTweets([]);
            setLoading(false);
            setFirstLoad(false);
            return
        }
        const fetchTweets = async () => {
            try {
                const tweetsRef = collection(db, "tweets");
                const userRef = collection(db, "users")

                const tweetsQuery = query(tweetsRef, where("user_id", "in", followingIds));
                const userQuery = query(userRef, where("id", "in", followingIds))

                const tweetSnapshot = await getDocs(tweetsQuery);
                const usersSnapshot = await getDocs(userQuery);
                
                const usersInfo = usersSnapshot.docs.map(doc => doc.data())

                const tweets : any = tweetSnapshot.docs.map(doc => {
                    const user = usersInfo.find((info) => doc.data().user_id === info.id);
                    if (user) return { ...doc.data(), id: doc.id, userInfo: user }
                });

                setCurrentUserFollowingTweets(tweets)
            } catch (error: any) {

            } finally {
                setLoading(false);
                setFirstLoad(false)
            }
        }

        fetchTweets();
    }, [followingIds]);

    return { currentUserFollowingTweets, loading, firstLoad }

}