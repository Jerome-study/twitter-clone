import { ReactNode } from "react";
import { Box } from "@mui/material";
import { styles } from "./styles";
import { MainSearchComponent } from "../Search/main";
import { useAuthActions } from "../../context/authActions";

export const MainContent = ({ children }: { children: ReactNode }) => {
    const isHome = true
    const { isMobile, currentAction } = useAuthActions()
    return (
        <Box sx={styles.mainBoxStyle(currentAction)}>
            <Box sx={styles.childrenStyle(currentAction, isHome)}>
                {children}
            </Box>
            {isMobile &&
                <Box sx={styles.childrenStyle(currentAction)} mt={1}>
                    <MainSearchComponent />
                </Box>}
        </Box>
    )
};