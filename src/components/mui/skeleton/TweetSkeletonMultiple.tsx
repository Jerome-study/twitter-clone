import { Box } from "@mui/material"
import { TweetSkeleton } from "./TweetSkeleton"

export const TweetSkeletonMultiple = () => {
    return (
        <Box>
            {Array.from({ length: 10 }, (_, index) => (
                <TweetSkeleton key={index} />
            ))}
        </Box>
    )
}