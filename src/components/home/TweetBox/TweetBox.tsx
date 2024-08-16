import { MobileTweetComposer } from "./MobileTweetComposer"
import { TweetComposerForm } from "./TweetComposer";
import { Box } from "@mui/material";
import { useResponsive } from "../../../hooks/useResponsive";

export const TweetBox = () => {
    const { isMobile } = useResponsive();
    return (
        <>
            {isMobile ?
                <MobileTweetComposer /> :
                <Box sx={{ bgcolor: "custom.white", mb: 2, borderRadius: 5 }}>
                    <TweetComposerForm />
                </Box>
            }
        </>
    )
}