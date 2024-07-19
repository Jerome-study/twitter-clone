import { ReactNode, createContext, useContext, useEffect, useState } from "react"
import { useFirebaseAuth } from "../config/firebase";
import { useFireStore } from "../config/firebase";

const AuthContext = createContext<any>({});

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({ children } : { children : ReactNode }) => {
    const { auth, onAuthStateChanged } = useFirebaseAuth()
    const [currentUser, setCurrentUser] = useState<any | null>(null);
    const [loading, setLoading] = useState(true);
    const { db, doc, getDoc } = useFireStore();
    const [isUsernameExist, setIsUsernameExist] = useState(false)

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const docRef = doc(db, 'users', user.uid);
                setCurrentUser(user);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const { username } = docSnap.data();
                    setIsUsernameExist(username? true : false)
                }
            } else {
                setCurrentUser(null);
            }
            setLoading(false)
        });
    }, []);

    return(
        <AuthContext.Provider value={{ currentUser, loading, isUsernameExist }}>
            {children}
        </AuthContext.Provider>
    )
}