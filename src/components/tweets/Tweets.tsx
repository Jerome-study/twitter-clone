import { Card, Box, Avatar, Typography, CardContent } from '@mui/material';
import { TweetImages } from './TweetImages';
import { useResponsive } from '../../hooks/useResponsive';
import { ActionComponent } from './ActionComponent';
import { useUpdateTime } from '../../hooks/useUpdateTime';

export const Tweets = ({ currentUserTweet, userInfo }: any) => {
    const avatarUrl = 'https://via.placeholder.com/150';
    const { isMobile } = useResponsive();
    const { first_name, last_name, username } = userInfo;
    const { timeDisplay } = useUpdateTime(currentUserTweet.createdAt.toDate())
    
    return (
        <>
            <Card sx={{ bgcolor: "", borderRadius: 0, boxShadow: 0, borderBottom: '1px solid #ccc', display: 'flex', gap: 2, px: 2, py: 1.5 }}>
                <Box>
                    <Avatar alt="Remy Sharp" src={avatarUrl} />
                </Box>
                <Box sx={{ flex: 1 }}>
                    <Typography variant={isMobile ? "subtitle1" : "body1"} fontWeight={900} >
                        {first_name + " " + last_name}
                        <Typography fontSize={isMobile ? 14 : ""} component="span" variant='h1' color='TweetsColor.username' fontWeight={600} >@{username}</Typography>
                        <Typography component="span" ml={2.5} variant='subtitle2' color='TweetsColor.username' fontWeight={600} >{timeDisplay}</Typography>
                    </Typography>
                    <CardContent sx={{ px: 0, py: 1 }}>
                        <Typography variant={"subtitle2"} fontWeight={600} mb={2}>
                            {currentUserTweet.content}
                        </Typography>
                        {currentUserTweet.image?.length > 0 && <TweetImages images={currentUserTweet.image} />}
                    </CardContent>
                    <ActionComponent />
                </Box>
            </Card>
        </>
    )
}

export default Tweets;