import { Card, Box, Avatar, Typography, CardContent} from '@mui/material';
import { useGetTweetsUserInfo } from '../../hooks/useGetUserInfo';
import Skeleton from '@mui/material/Skeleton';
import { TweetImages } from './TweetImages';
import { useResponsive } from '../../hooks/useResponsive';
import { ActionComponent } from './ActionComponent';

export const Tweets = ({ currentUserTweet }: any) => {
    const avatarUrl = 'https://via.placeholder.com/150';
    const { isMobile } = useResponsive();
    const { userInfo, loading, error } = useGetTweetsUserInfo(currentUserTweet.user_id);

    if (error) return <Typography>{error}</Typography>
    const { first_name, last_name } = userInfo;

    return (
        <>
            <Card sx={{ borderRadius: 0, boxShadow: 0, borderBottom: '1px solid #ccc', display: 'flex', gap: 2, px: 2, py: 1.5 }}>
                <Box>
                    <Avatar alt="Remy Sharp" src={avatarUrl} />
                </Box>
                <Box sx={{ flex: 1 }}>
                    {loading ? <Skeleton /> : <Typography variant={isMobile ? "subtitle1" : "h6"} fontWeight={900} >{first_name + " " + last_name}</Typography>}
                    <CardContent sx={{ px: 0, py: 1 }}>
                        <Typography variant={isMobile ? "subtitle2" : "subtitle1"} fontWeight={600} mb={2}>
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