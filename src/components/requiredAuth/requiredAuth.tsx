import { ReactNode, useState } from "react";
import { useAuth } from "../../context/authProvider";
import { Navigate } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import { Navbar } from "../navbar/navbar";
import { BottomNavbar } from "../navbar/bottomNav";
import { NavigationLeftList } from "../navbar/List";
import { useResponsive } from "../../hooks/useResponsive";
import { TweetProvider } from "../../context/tweetProvider";

const MainContent = ({ children }: { children: ReactNode }) => (
    <Box sx={{ mt: { lg: 0, xs: 2 }, width: "100%", bgcolor: { lg: "#ccc" } }} >
        {children}
    </Box>
);

const RightSidebar = () => (
    <Box hidden sx={{
        position: 'sticky',
        top: 0,
        display: { lg: 'block' },
        height: '100vh',
        width: '100%',
        borderLeft: '1px solid #ccc',
        backgroundColor: '#f9f9f9',
        zIndex: 1,
    }}>
        Right Content
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
            backgroundColor: '#f9f9f9',
            zIndex: 1,
        }}>
            {isMobile ? <Navbar /> : <NavigationLeftList />}
        </Box>
    )
}

export const RequiredAuth = ({ children }: { children: ReactNode }) => {
    const { currentUser, loading } = useAuth();
    const { isMobile } = useResponsive();
    const [currentAction, setCurrentAction] = useState("Home");
    const condition = currentAction === "Home" ? children : currentAction === "Explore" ? <h1>Search</h1> : <h1>Coming Soon</h1>
    const handleBottomNavAction = (action: string) => {
        setCurrentAction(action)
    }

    if (loading) return <h1>loading</h1>
    if (!currentUser) return <Navigate to={'/login'} />

    return (
        <TweetProvider>
            <Grid container>
                <Grid item lg={3} xs={12}>
                    <NavbarAndLeftSidebar />
                </Grid>
                <Grid item lg={6} xs={12}>
                    <MainContent>{condition}</MainContent>
                </Grid>
                <Grid item lg={3} xs={12}>
                    <RightSidebar />
                </Grid>
            </Grid>
            {isMobile && <BottomNavbar handleBottomNavAction={handleBottomNavAction} />}
        </TweetProvider>
    )

}