import { Box } from "@mui/material"
import { UserCardSkeleton } from "./UserCardSkeleton"

export const UserCardSkeletonMultiple = () => {
    return (
        <>
            <Box sx={{ height: { xs: "60vh", lg: "100%" }, overflow: "scroll" }}>
                <Box sx={{ display: "grid", gap: 2 }}>
                    {Array.from(new Array(10)).map((_, index) => (
                        <UserCardSkeleton key={index} />
                    ))}
                </Box>
            </Box>
        </>
    )
}