import { useEffect, useState } from "react";
import { useFireStore } from "../config/firebase";


export const useGetTweets = (user_id: string) => {
    const { getDocs, query, collection, db, where } = useFireStore();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [currentUserTweets, setCurrentUserTweets] = useState<any>([])

    useEffect(() => {

        const getData = async () => {
            setLoading(true);
            setError("");
            try {
                const q = query(collection(db, "tweets"), where("user_id", "==", user_id));
                const querySnapshot = await getDocs(q);

                const tweets = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setCurrentUserTweets(tweets)
            } catch (error: any) {
                setError(error?.message || "Somethign went wrong, refresf the page")
            } finally {
                setLoading(false);
            }
        }

        getData();

    }, [])

    return {
        currentUserTweets,
        setCurrentUserTweets,
        loading,
        error
    }
}