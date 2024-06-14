import { ReactNode } from "react";
import { useAuth } from "../../context/authProvider";
import { Navigate } from "react-router-dom";
import { Box, Toolbar } from "@mui/material";
import { Navbar } from "../navbar/navbar";
import { BottomNavbar } from "../navbar/bottomNav";
import { useMediaQuery, useTheme } from "@mui/material";

export const RequiredAuth = ({ children }: { children: ReactNode }) => {
    const { currentUser, loading } = useAuth();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
    if (loading) return <h1>loading</h1>
    if (!currentUser) return <Navigate to={'/login'} />

    return (
        <>
            <Box sx={{
                display: {
                    lg: "flex"
                }
            }}>
                <Box>
                    <Navbar />
                </Box>

                <Box flexGrow={1}>
                    {children}
                </Box>
                
                <Box hidden sx={{
                    position: "relative",
                    borderLeft: 1,
                    display: {
                        lg: "block"
                    },
                    height: "100vh",
                    width: "15%"
                }}>
                    <Box position="fixed">
                        Right Content
                    </Box>
                </Box>
                
                <Toolbar />
            </Box>
            {isMobile && <BottomNavbar />}
        </>
    )

}