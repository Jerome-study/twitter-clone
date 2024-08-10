import { Box } from "@mui/material";
import { NavigationLeftList } from "../Navbar/List";
import { TopNav } from "../Navbar/TopNav"
import { useResponsive } from "../../hooks/useResponsive";
import { styles } from "./styles";

export const TopAndLeftSidebar = () => {
    const { isMobile } = useResponsive();
    return (
        <>
            {isMobile ?
                <TopNav /> :
                <Box sx={styles.leftBoxStyle}>
                    <NavigationLeftList />
                </Box>
            }
        </>
    )
}