import { ReactNode } from "react";
import { useAuth } from "../../context/authProvider";
import { Navigate } from "react-router-dom";
import { AuthLayout } from "../Layout/AuthLayout";
import { useLocation } from "react-router-dom";

export const RequiredAuth = ({ children }: { children: ReactNode }) => {
    const { currentUser, loading: AuthLoading, isUsernameExist } = useAuth();
    const location = useLocation();
    const isSetUpRoute = location.pathname === "/setup-username"

    if (AuthLoading) return <h1>Loading</h1>
    if (!currentUser) return <Navigate to={'/login'} />
    if (!isUsernameExist && !isSetUpRoute) return <Navigate to={"/setup-username"} />
    if (!isUsernameExist && isSetUpRoute) return children
    if (isUsernameExist && isSetUpRoute) return <Navigate to={"/404"} />

    return (
        <>
            <AuthLayout>
                {children}
            </AuthLayout>
        </>
    )

}