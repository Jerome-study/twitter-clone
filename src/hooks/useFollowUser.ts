import { useFireStore } from "../config/firebase"
import { useState, useEffect } from "react"
import { useTweet } from "../context/tweetProvider";


export const useFollowUser = (follower_id: string, following_id: string) => {
    const { collection, where, query, db, getDocs, setDoc, doc, serverTimestamp, deleteDoc, updateDoc, increment } = useFireStore();
    const [isFollowing, setIsFollowing] = useState(false);
    const { setCurrentUserFollowing } = useTweet();

    const handleFollowClick = async () => {
        try {
            const followsRef = collection(db, "follows")
            const followerDocRef = doc(db, "users", follower_id)
            const followingDocRef = doc(db, "users", following_id)

            const userQuery = query(followsRef, where("follower_id", '==', follower_id), where('following_id', "==", following_id));

            const followSnapShot = await getDocs(userQuery);
            const isCurrentlyFollowing = !followSnapShot.empty;

            if (isCurrentlyFollowing) {
                const followDocId = followSnapShot.docs[0].id;
                const deleteDocRef = doc(db, "follows", followDocId)
                await deleteDoc(deleteDocRef);

                await updateDoc(followerDocRef, {
                    following_count: increment(-1)
                });

                await updateDoc(followingDocRef, {
                    followers_count: increment(-1)
                });

                setIsFollowing(prev => !prev);
                
                setCurrentUserFollowing((prev : string[]) => prev.filter((id : string) => id != following_id));
            } else {
                await setDoc(doc(followsRef), {
                    follower_id,
                    following_id,
                    created_at: serverTimestamp()
                });
                setIsFollowing(prev => !prev)

                await updateDoc(followerDocRef, {
                    following_count: increment(1)
                });

                await updateDoc(followingDocRef, {
                    followers_count: increment(1)
                });
                
                setCurrentUserFollowing((prev : any) => [...prev, following_id]);
            }
        } catch (error: any) {
            console.log(error)
        }
    }

    useEffect(() => {
        const checkUserIfFollowing = async () => {
            const followsRef = collection(db, "follows")
            const userQuery = query(followsRef, where("follower_id", '==', follower_id), where('following_id', "==", following_id));

            const followSnapShot = await getDocs(userQuery);

            setIsFollowing(!followSnapShot.empty)
        }

        checkUserIfFollowing();
    }, []);

    return {
        isFollowing,
        handleFollowClick
    }

}