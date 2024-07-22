import { Card, CardHeader, Skeleton, Typography, Button } from "@mui/material"
import { UserInfoProps } from "../../models/typescript"
import { useAuth } from "../../context/authProvider"
import { useFollowUser } from "../../hooks/useFollowUser";

export const UserCard = ({ user }: { user: UserInfoProps }) => {
    const { currentUser } = useAuth();
    const {isFollowing, handleFollowClick} = useFollowUser(currentUser.uid, user.id);

    return (
        <>
            <Card sx={{ borderRadius: 0 }}>
                <CardHeader
                    avatar={
                        <Skeleton variant="circular" width={40} height={40} />
                    }
                    title={<Typography>{user.first_name + " " + user.last_name}</Typography>}
                    subheader={<Typography color="TweetsColor.username">@{user.username}</Typography>}
                    action={
                        <Button variant="contained" color="primary" onClick={handleFollowClick}>
                            {isFollowing ? "UNFOLLOW" : "FOLLOW"}
                        </Button>
                    }
                />
            </Card>
        </>
    )
}

export default UserCard