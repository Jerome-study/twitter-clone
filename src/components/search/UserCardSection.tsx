import { Suspense, lazy } from "react";
import { CircularProgress } from "@mui/material";
import { Box } from '@mui/material'
import { UserInfoProps } from "../../models/typescript";
import { useAuth } from "../../context/authProvider";
const UserCardLazy = lazy(() => import("./UserCard"))

export const UserCardSection = ({ searchResult } : { searchResult : any }) => {
    const { currentUser } = useAuth();
    return (
        <Suspense fallback={<CircularProgress />}>
            <Box>
                {searchResult.map((user: UserInfoProps) => (
                    user.id !== currentUser.uid && <UserCardLazy key={user.id} user={user} />
                ))}
            </Box>
        </Suspense>
    )
}