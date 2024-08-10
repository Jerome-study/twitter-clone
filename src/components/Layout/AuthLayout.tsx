import { ReactNode, useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { MainContent } from "./MainContent";
import { RightSidebar } from "./RightSide";
import { TopAndLeftSidebar } from "./TopAndLeftSide";
import { BottomNavbar } from "../Navbar/BottomNav";
import { useResponsive } from "../../hooks/useResponsive";
import { TweetProvider } from "../../context/tweetProvider";
import { MainSearchComponent } from "../Search/main";

export const AuthLayout = ({ children }: { children: ReactNode }) => {
    const { isMobile } = useResponsive();
    const [currentAction, setCurrentAction] = useState("Home");
    const condition = currentAction === "Home" ? children : currentAction === "Explore" ? <MainSearchComponent /> : <h1>Coming Soon</h1>
    const handleBottomNavAction = (action: string) => {
        setCurrentAction(action)
    }

    useEffect(() => {
        if (!isMobile) setCurrentAction("Home")
    }, [isMobile])

    return (

        <TweetProvider>
            <Grid container>
                <Grid item lg={3} xs={12}>
                    <TopAndLeftSidebar />
                </Grid>
                <Grid item lg={6} xs={12}>
                    <MainContent>{condition}</MainContent>
                </Grid>
                {!isMobile ?
                    <Grid item lg={3} xs={12}>
                        <RightSidebar />
                    </Grid>
                    :
                    <BottomNavbar handleBottomNavAction={handleBottomNavAction} />
                }
            </Grid>
        </TweetProvider>
    )

}