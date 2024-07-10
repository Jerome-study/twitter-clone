import { ReactNode } from "react";
import { useAuth } from "../../context/authProvider";
import { Navigate } from "react-router-dom";
import { Box, Toolbar } from "@mui/material";
import { Navbar } from "../navbar/navbar";
import { BottomNavbar } from "../navbar/bottomNav";
import { useMediaQuery, useTheme } from "@mui/material";


const MainContent = ({ children }: { children: ReactNode }) => (
    <Box sx={{ mt: { lg: 0, xs: 2 }, bgcolor: { lg: "#ccc"} }} flexGrow={1}>
        {children}
    </Box>
);

const RightSidebar = () => (
    <Box hidden sx={{
        position: "relative",
        display: { lg: "block" },
        height: "100vh",
        width: "15%"
    }}>
        <Box sx={{ borderLeft: '1px solid #ccc', height: "100vh"}} position="fixed">
            Right Content
        </Box>
    </Box>
);

export const RequiredAuth = ({ children }: { children: ReactNode }) => {
    const { currentUser, loading } = useAuth();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
    if (loading) return <h1>loading</h1>
    if (!currentUser) return <Navigate to={'/login'} />

    return (
        <>
            <Box sx={{ display: { lg: "flex" } }}>
                <Navbar />
                <MainContent>{children}</MainContent>
                <RightSidebar />
                <Toolbar />
            </Box>
            {isMobile && <BottomNavbar />}
        </>
    )

}