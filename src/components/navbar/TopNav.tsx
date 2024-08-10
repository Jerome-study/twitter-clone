import { LeftDrawerNav } from "./LeftDrawer";
import { Toolbar } from "@mui/material";
import { TopBar } from "./TopBar";
import { useState } from "react";

export const TopNav = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <>
            <TopBar toggleDrawer={toggleDrawer} />
            <LeftDrawerNav isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
            <Toolbar />
        </>
    )
}