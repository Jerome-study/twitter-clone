import { useEffect, useState } from "react";
import { useFireStore } from "../config/firebase";


export const useGetTweetsUserInfo = (user_id: string) => {
    const { db, doc, getDoc } = useFireStore();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [userInfo, setUserInfo] = useState<any>([])
    const docRef = doc(db, 'users', user_id);

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            setError("");
            try {
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setUserInfo(docSnap.data())
                } else {
                    setError('User not exist!')
                }
            } catch (error: any) {
                setError(error?.message || "Somethign went wrong, refresf the page")
            } finally {
                setLoading(false);
            }
        }

        getData();
    }, [])

    return {
        userInfo,
        loading,
        error
    }
}