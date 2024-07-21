import { useState, useEffect } from 'react';
import { useFireStore } from "../config/firebase";
import { UserInfoProps } from "../models/typescript";

export const useSearch = (searchValue: string) => {
    const [searchResult, setSearchResult] = useState<UserInfoProps[]>([]);
    const [loading, setLoading] = useState(false);
    const { collection, query, db, getDocs, where } = useFireStore();

    useEffect(() => {
        setLoading(true)
        const fetchUser = async () => {
            try {
                if (searchValue) {
                    const usernameQuery = query(collection(db, 'users'), where('username', "==", searchValue));
                    const firstNameQuery = query(collection(db, 'users'), where('first_name', "==", searchValue));

                    const usernameSnap = await getDocs(usernameQuery);
                    const firstNameSnap = await getDocs(firstNameQuery);

                    const results: any = [];
                    usernameSnap.forEach(doc => results.push(doc.data()));
                    firstNameSnap.forEach(doc => results.push(doc.data()));

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
