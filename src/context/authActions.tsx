import { ReactNode, createContext, useContext, useState, useEffect } from "react";
import { useResponsive } from "../hooks/useResponsive";


const AuthActionsContext = createContext<any>({})

export const useAuthActions = () => {
    return useContext(AuthActionsContext)
}

export const AuthActions = ({ children }: { children: ReactNode }) => {
    const [currentAction, setCurrentAction] = useState("Home");
    const [currentPosition, setCUrrentPosition] = useState<any>(null);
    const { isMobile } = useResponsive();

    const homeCurrentPosition = () => {
        if (currentAction === "Home") {
            setCUrrentPosition(window.pageYOffset)
            window.scrollTo(0, 0)
        } else {
           setTimeout(() => {
            window.scrollTo(0, currentPosition)
           }, 100)
        }
    }

    const handleBottomNavAction = (action: string) => {
        setCurrentAction(action)
    }

    useEffect(() => {
        if (!isMobile) setCurrentAction("Home")
    }, [isMobile])

    return (
        <AuthActionsContext.Provider value={{ currentAction, homeCurrentPosition, handleBottomNavAction, isMobile }}>
            {children}
        </AuthActionsContext.Provider>
    )
}