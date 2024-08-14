import { ReactNode } from "react";
import { Box } from "@mui/material";
import { styles } from "./styles";
import { MainSearchComponent } from "../Search/main";
import { useResponsive } from "../../hooks/useResponsive";

export const MainContent = ({ children, currentAction }: { children: ReactNode, currentAction: string }) => {
    const isHome = true
    const { isMobile } = useResponsive();
    return (
        <Box sx={styles.mainBoxStyle(currentAction)}>
            <Box sx={styles.childrenStyle(currentAction, isHome)}>
                {children}
            </Box>
            { isMobile && 
            <Box sx={styles.childrenStyle(currentAction)}>
                <MainSearchComponent />
            </Box>}
        </Box>
    )
};