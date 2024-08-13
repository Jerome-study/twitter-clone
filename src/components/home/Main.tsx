import { TweetBox } from "./TweetComposer/TweetBox";
import { Box, Typography } from "@mui/material";
import { useResponsive } from "../../hooks/useResponsive";
import { TweetsContainer } from "./TweetsContainer";

export const MainHomeComponent = () => {
  const { isMobile } = useResponsive();

  return (
    <>
      {/* Header */}
      {!isMobile && <Typography sx={{
        p: 2,
        bgcolor: "custom.white",
        mb: 2,
        borderRadius: 5
      }}
        component="h1"
        variant="h5"
        fontWeight={800}
      >
        Home
      </Typography>}

      {/* Tweet Box */}
      <Box sx={{ bgcolor: "custom.white", mb: 2, borderRadius: 5 }}>
        <TweetBox />
      </Box>

      {/* Tweets */}
      <TweetsContainer />
    </>
  );
};
