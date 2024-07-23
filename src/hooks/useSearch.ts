import { useState, useEffect } from 'react';
import { useFireStore } from "../config/firebase";
import { UserInfoProps } from "../models/typescript";
import { useAuth } from '../context/authProvider';

export const useSearch = (searchValue: string) => {
    const [searchResult, setSearchResult] = useState<UserInfoProps[]>([]);
    const { currentUser } = useAuth();
    const [loading, setLoading] = useState(false);
    const { collection, query, db, getDocs, where } = useFireStore();

    useEffect(() => {
        setLoading(true)
        const fetchUser = async () => {
            try {
                if (searchValue) {
                    const userQuery = query(collection(db, 'users'), where('searchStrings', 'array-contains', searchValue.toLowerCase()));

                    const userSnap = await getDocs(userQuery);

                    const results: any = [];
                    userSnap.forEach(doc => doc.data().id !== currentUser.uid && results.push(doc.data()) );

                    setSearchResult(results)
                } else {
                    setSearchResult([]);
                    setLoading(false)
                }
            } catch (error: any) {
                console.error("Error fetching users:", error);
            } finally {
                setLoading(false)
            }
        }

        const timer = setTimeout(() => {
            fetchUser();
        }, 500);

        return () => clearTimeout(timer)

    }, [searchValue])

    return { searchResult, loading };
};
