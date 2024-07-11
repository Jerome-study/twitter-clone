import { SideNavbar } from "./sideNav";
import { Toolbar } from "@mui/material";
import { TopBar } from "./topBar";
import { useState } from "react";

export const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <>
            <TopBar toggleDrawer={toggleDrawer} />
            <SideNavbar isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
            <Toolbar />
        </>
    )
}