import { MobileTweetComposer } from "./MobileTweetComposer"
import { useAuthActions } from "../../../context/authActions";
import { TweetComposerForm } from "./TweetComposer";
import { Box } from "@mui/material";

export const TweetBox = () => {
    const { isMobile } = useAuthActions();
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