import { useMediaQuery, useTheme } from "@mui/material";


export const useResponsive = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

    return {
        isMobile
    }
}