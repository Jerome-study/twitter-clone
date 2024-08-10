import { MainSearchComponent } from "../Search/main";
import { Box } from "@mui/material";
import { styles } from "./styles";

export const RightSidebar = () => (
    <Box sx={styles.rightBoxStyle}>
        <MainSearchComponent />
    </Box>
);