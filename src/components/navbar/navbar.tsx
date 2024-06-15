import { SideNavbar } from "./sideNav";
import { Toolbar } from "@mui/material";
import { TopBar } from "./topBar";
import { useState } from "react";
import { useResponsive } from "../../hooks/useResponsive";

export const Navbar = () => {
    const { isMobile } = useResponsive();
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