import { Box } from "@mui/material"
import { TweetSkeleton } from "./TweetSkeleton"

export const TweetSkeletonMultiple = () => {
    return (
        <Box sx={{ display: "grid", gap: 2, mt: { lg: 0 } }}>
            {Array.from({ length: 10 }, (_, index) => (
                <TweetSkeleton key={index} />
            ))}
        </Box>
    )
}