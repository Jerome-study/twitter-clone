import { Box, Avatar, Typography, Paper } from '@mui/material';
import { TweetImages } from './TweetImages';
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
    } else { // less than a week
        const diffInDays = Math.floor(diffInSeconds / 86400);
        display = `${diffInDays}d`;
    } 
    return display
};

export const Tweets = ({ currentUserTweet, userInfo }: any) => {
    const avatarUrl = 'https://via.placeholder.com/150';
    const { first_name, last_name, username } = userInfo;
    const date = convertDate(currentUserTweet.createdAt.toDate())
    
    return (
        <>
            <Paper sx={{ bgcolor: "", borderRadius: { xs: 0, lg: 5 }, boxShadow: 0, borderBottom: '1px solid #ccc', display: 'flex', gap: 2, px: 2, py: 1.5 }}>
                <Box>
                    <Avatar alt="Remy Sharp" src={avatarUrl} />
                </Box>
                <Box sx={{ flex: 1 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <Typography variant='h6' sx={{ fontSize: 14, fontWeight: 700, }}>{first_name + " " + last_name}</Typography>
                        <Typography variant='h6' sx={{ fontSize: 12, fontWeight: 400, color: "custom.darkGray" }}>{"@" + username}</Typography>
                        <Typography variant='h6' sx={{ fontSize: 12, fontWeight: 400, color: "custom.darkGray" }}>{date}</Typography>
                    </Box>
                    <Paper sx={{ px: 0, py: 1 }} elevation={0}>
                        <Typography variant="h1" sx={{ fontSize: 12, fontWeight: 400, mb : 1 }}>
                            {currentUserTweet.content}
                        </Typography>
                        {currentUserTweet.image?.length > 0 && <TweetImages images={currentUserTweet.image} />}
                    </Paper>
                    <ActionComponent />
                </Box>
            </Paper>
        </>
    )
}

export default Tweets;