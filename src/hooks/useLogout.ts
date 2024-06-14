import { useFirebaseAuth } from "../config/firebase";
import { useNavigate } from "react-router-dom";


export const useLogout = () => {
    const navigate = useNavigate();
    const { auth, signOut } = useFirebaseAuth();

    const logout = () => {
        signOut(auth).then(() => {
            navigate('/login')
        }).catch((error) => {
            console.log(error)
        })
    }
    
    return {
        logout
    }
}