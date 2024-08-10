import { useState } from "react";
import { useAuth } from "../context/authProvider";
import { useFireStore } from "../config/firebase";

export const useSetUsername = () => {
    const { currentUser } = useAuth();
    const { updateDoc, db, doc, getDocs, collection, query, where, getDoc } = useFireStore();
    const [username, setUsername] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (!username) return setError("Username is required!");
        if (username.length < 3) return setError("Username should atleast 3 or more characters!")

        setLoading(true);
        setError("");

        try {
            const userRef = collection(db, "users");
            const q = query(userRef, where("username", "==", username));
            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                setError("Username is already taken!");
                setLoading(false);
                return;
            }

            const userDocRef = doc(db, "users", currentUser.uid);
            const snap = await getDoc(userDocRef)

            if (!snap.exists()) return

            const usernameLower = username.toLowerCase();
            const firstNameLower = snap?.data()?.first_name.toLowerCase();
            const lastNameLower = snap?.data()?.last_name?.toLowerCase()
            const searchStrings = [usernameLower, firstNameLower, lastNameLower]

            await updateDoc(userDocRef, { username, searchStrings });
            window.location.href = "/"
        } catch (error: any) {
            setError(error?.message || "Something went wrong, try again later!");
        } finally {
            setLoading(false);
        }
    };

    return { username, setUsername, error, loading, handleSubmit }

}