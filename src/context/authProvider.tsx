import { ReactNode, createContext, useContext, useEffect, useState } from "react"
import { useFirebaseAuth } from "../config/firebase";


const AuthContext = createContext<any>({});

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({ children } : { children : ReactNode }) => {
    const { auth, onAuthStateChanged } = useFirebaseAuth()
    const [currentUser, setCurrentUser] = useState<any | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user)
            } else {
                setCurrentUser(null);
            }
            setLoading(false)
        });
    }, []);

    return(
        <AuthContext.Provider value={{ currentUser, loading }}>
            {children}
        </AuthContext.Provider>
    )
}