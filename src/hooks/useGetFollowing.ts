import { useEffect, useState } from "react"
import { useFireStore } from "../config/firebase";

export const useGetFollowing = (follower_id : string) => {
    const [currentUserFollowing, setCurrentUserFollowing] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { collection, db, getDocs, query, where } = useFireStore();

    useEffect(() => {
        const fetchFollowing = async () => {
            try {
                const followRef = collection(db, "follows")
                const followQuery = query(followRef, where("follower_id", "==", follower_id));
                const followSnapShot = await getDocs(followQuery);
                const followingList : any = followSnapShot.docs.map(doc => doc.data().following_id);
                setCurrentUserFollowing(followingList)
            } catch (error : any) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }

        fetchFollowing();

    }, []);

    return { currentUserFollowing, loading, error }
}