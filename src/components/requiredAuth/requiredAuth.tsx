import { ReactNode } from "react";
import { useAuth } from "../../context/authProvider";
import { Navigate } from "react-router-dom";

export const RequiredAuth = ({ children } : { children: ReactNode }) => {
    const { currentUser, loading } = useAuth();
    
    if (loading) return <h1>loading</h1>
    if (!currentUser) return <Navigate to={'/login'}/>

    return(
        <>
            {children}
        </>
    )

}