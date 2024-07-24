import { Card, Box, Avatar, Typography, CardContent } from '@mui/material';
import { TweetImages } from './TweetImages';
import { useResponsive } from '../../hooks/useResponsive';
import { ActionComponent } from './ActionComponent';

const convertDate = (createdAt : Date) => {
    const now : any = new Date();
    const createdTime : any = new Date(createdAt);
    const diffInSeconds = Math.floor((now - createdTime) / 1000);
    let display;
    if (diffInSeconds < 60) {
        display = `${diffInSeconds}s`;
    } else if (diffInSeconds < 3600) {
        const diffInMinutes = Math.floor(diffInSeconds / 60);
        display = `${diffInMinutes}m`;
    } else if (diffInSeconds < 86400) {
        const diffInHours = Math.floor(diffInSeconds / 3600);
        display = `${diffInHours}h`;
    } else if (diffInSeconds < 604800) { // less than a week
        const diffInDays = Math.floor(diffInSeconds / 86400);
        display = `${diffInDays}d`;
    } else {
        display = createdTime.toDateString();
    }

    return display
};

export const Tweets = ({ currentUserTweet, userInfo }: any) => {
    const avatarUrl = 'https://via.placeholder.com/150';
    const { isMobile } = useResponsive();
    const { first_name, last_name, username } = userInfo;
    const date = convertDate(currentUserTweet.createdAt.toDate())
    
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
                        <Typography component="span" ml={1.5} variant='subtitle2' color='TweetsColor.username' fontWeight={600} >{date}</Typography>
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