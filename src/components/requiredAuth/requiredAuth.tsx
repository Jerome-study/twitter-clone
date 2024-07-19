import { ReactNode } from "react";
import { useAuth } from "../../context/authProvider";
import { Navigate } from "react-router-dom";

export const RequiredAuth = ({ children }: { children: ReactNode }) => {
    const { currentUser, loading : AuthLoading, isUsernameExist } = useAuth();
    if (AuthLoading) return <h1>Loading</h1>
    if (!currentUser) return <Navigate to={'/login'} />
    if (!isUsernameExist) return <Navigate to={'/setup-username'} />

    return (
        <>
            {children}
        </>
    )

}