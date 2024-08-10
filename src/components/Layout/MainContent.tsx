import { ReactNode } from "react";
import { Box } from "@mui/material";
import { styles } from "./styles";

export const MainContent = ({ children }: { children: ReactNode }) => (
    <Box sx={styles.mainBoxStyle} >
        {children}
    </Box>
);