import { ReactNode, useEffect, useState } from "react";
import { Box, Grid, Container } from "@mui/material";
import { Navbar } from "../navbar/navbar";
import { BottomNavbar } from "../navbar/bottomNav";
import { NavigationLeftList } from "../navbar/List";
import { useResponsive } from "../../hooks/useResponsive";
import { TweetProvider } from "../../context/tweetProvider";
import { MainSearchComponent } from "../search/main";

const MainContent = ({ children }: { children: ReactNode }) => (
    <Box sx={{ mt: { lg: 0, xs: 2 }, width: "100%", }} >
        {children}
    </Box>
);

const RightSidebar = () => (
    <Box sx={{
        position: 'sticky',
        overflow: "scroll",
        top: 0,
        height: '100vh',
        width: '100%',
        borderLeft: '1px solid #ccc',
        zIndex: 1
    }}>
        <MainSearchComponent />
    </Box>
);

const NavbarAndLeftSidebar = () => {
    const { isMobile } = useResponsive();
    return (
        <Box sx={{
            position: 'sticky',
            top: 0,
            display: { lg: 'block' },
            height: { lg: "100vh" },
            width: '100%',
            borderRight: '1px solid #ccc',
            zIndex: 1,
        }}>
            {isMobile ? <Navbar /> : <NavigationLeftList />}
        </Box>
    )
}

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
        <Container maxWidth="xl">
            <TweetProvider>
            <Grid container>
                <Grid item lg={3} xs={12}>
                    <NavbarAndLeftSidebar />
                </Grid>
                <Grid item lg={6} xs={12}>
                    <MainContent>{condition}</MainContent>
                </Grid>
                { !isMobile && 
                <Grid item lg={3} xs={12}>
                    <RightSidebar />
                </Grid>
                }
            </Grid>
            {isMobile && <BottomNavbar handleBottomNavAction={handleBottomNavAction} />}
        </TweetProvider>
        </Container>
    )

}