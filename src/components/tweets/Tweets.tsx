import { Box, Avatar, Typography, Paper } from '@mui/material';
import { TweetImages } from './TweetImages';
import { ActionComponent } from './ActionComponent';
import { convertDate } from '../../utils/utils';

export const Tweets = ({ currentUserTweet, userInfo }: any) => {
    const avatarUrl = 'https://via.placeholder.com/150';
    const { first_name, last_name, username } = userInfo;
    const date = convertDate(currentUserTweet.createdAt.toDate())
    
    return (
        <>
            <Paper sx={{ bgcolor: "", borderRadius: { xs: 0, sm: 5 }, boxShadow: 0, borderBottom: '1px solid #ccc', display: 'flex', gap: 2, px: 2, py: 1.5 }}>
                <Box>
                    <Avatar alt="Remy Sharp" src={avatarUrl} />
                </Box>
                <Box sx={{ flex: 1 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <Typography variant='h6' sx={{ fontSize: { xs: 14, lg: 17}, fontWeight: 900, }}>{first_name + " " + last_name}</Typography>
                        <Typography variant='h6' sx={{ fontSize: { xs: 12, lg: 15 }, fontWeight: 400, color: "custom.darkGray" }}>{"@" + username}</Typography>
                        <Typography variant='h6' sx={{ fontSize: { xs: 12, lg: 15 }, fontWeight: 400, color: "custom.darkGray" }}>{date}</Typography>
                    </Box>
                    <Paper sx={{ px: 0, py: 1 }} elevation={0}>
                        <Typography variant="h6" sx={{ fontSize: { xs: 12, lg: 15}, fontWeight: 500, mb : 1 }}>
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