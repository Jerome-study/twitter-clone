import { SideNavbar } from "./sideNav";
import { Toolbar, useMediaQuery, useTheme } from "@mui/material";
import { TopBar } from "./topBar";
import { useState } from "react";

export const Navbar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <>
            {isMobile &&
                <>
                    <TopBar toggleDrawer={toggleDrawer} />
                    <Toolbar />
                </> 
            }
            <SideNavbar isMobile={isMobile} isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
        </>
    )
}