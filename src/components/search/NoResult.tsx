import { Box, Typography } from "@mui/material";
import { styles } from "./styles";

export const NoResultSection = () => {
    return (
        <Box sx={styles.NoResultContainerStyle}>
            <Typography fontWeight={400} align="center" variant="subtitle2">
                No Results found, Please try again
            </Typography>
        </Box>
    )
}