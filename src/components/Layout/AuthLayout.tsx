import { ReactNode, useEffect, useState } from "react";
import { Grid, Box } from "@mui/material";
import { MainContent } from "./MainContent";
import { RightSidebar } from "./RightSide";
import { TopAndLeftSidebar } from "./TopAndLeftSide";
import { BottomNavbar } from "../Navbar/BottomNav";
import { useResponsive } from "../../hooks/useResponsive";
import { TweetProvider } from "../../context/tweetProvider";
import { styles } from "./styles";

export const AuthLayout = ({ children }: { children: ReactNode }) => {
    const { isMobile } = useResponsive();
    const [currentAction, setCurrentAction] = useState("Home");
    const [currentPosition, setCUrrentPosition] = useState<any>(null);
    const handleBottomNavAction = (action: string) => {
        setCurrentAction(action)
    }

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

    useEffect(() => {
        if (!isMobile) setCurrentAction("Home")
    }, [isMobile])

    return (
        <TweetProvider>
            <Box sx={styles.bodyStyle}>
                <Box sx={styles.containerStyle}>
                    <Grid container gap={isMobile ? 0 : 2} justifyContent={isMobile? "" : "center"} >
                        <Grid item lg={3} xs={12}>
                            <TopAndLeftSidebar />
                        </Grid>
                        <Grid item lg={5} xs={12}>
                            <MainContent currentAction={currentAction}>
                                {children}
                            </MainContent>
                        </Grid>
                        {!isMobile ?
                            <Grid item lg={3} xs={12}>
                                <RightSidebar />
                            </Grid>
                            :
                            <BottomNavbar homeCurrentPosition={homeCurrentPosition} handleBottomNavAction={handleBottomNavAction} />
                        }
                    </Grid>
                </Box>
            </Box>
        </TweetProvider>
    )

}