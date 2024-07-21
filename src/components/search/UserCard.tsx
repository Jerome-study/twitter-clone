import { Card, CardHeader, Skeleton, Typography } from "@mui/material"
import { UserInfoProps } from "../../models/typescript"

export const UserCard = ({ user } : { user : UserInfoProps }) => {

    return(
        <>
            <Card sx={{ borderRadius: 0 }}>
                <CardHeader
                        avatar={
                            <Skeleton variant="circular" width={40} height={40} />
                        }
                        title={<Typography>{user.first_name + " " + user.last_name}</Typography>}
                        subheader={<Typography color="TweetsColor.username">@{user.username}</Typography>}
                />
            </Card>
        </>
    )
}

export default UserCard