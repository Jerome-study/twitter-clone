import { Typography } from "@mui/material";
import { useResponsive } from "../../hooks/useResponsive";

export const Header = () => {
    const { isMobile } = useResponsive();

    return (
        <>
            {!isMobile && <Typography sx={{
                p: 2,
                bgcolor: "custom.white",
                mb: 2,
                borderRadius: 5,
                fontWeight: 800,
            }}
                component="h1"
                variant="h5"
            >
                Home
            </Typography>}
        </>
    )

}