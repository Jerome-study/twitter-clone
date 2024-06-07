import { useFirebaseAuth } from "../../config/firebase"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authProvider";

export const HomePage = () => {
    const navigate = useNavigate();
    const { auth, signOut } = useFirebaseAuth();
    const { currentUser } = useAuth();
    const logout = () => {
        signOut(auth).then(() => {
            navigate('/login')
        }).catch((error) => {
            console.log(error)
        })
    }
    return(
        <>
            <h1>Welcome {currentUser?.email}</h1>
            <button onClick={logout}>Logout</button>
        </>
    )
}