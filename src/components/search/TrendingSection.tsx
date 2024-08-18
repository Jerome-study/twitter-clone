import { Typography, Paper, Box, Divider } from '@mui/material';
import { Fragment } from 'react/jsx-runtime';
import { styles } from './styles';

const trendingData = [
    { topic: "#ReactJS", tweets: "120K Tweets" },
    { topic: "#JavaScript", tweets: "80K Tweets" },
    { topic: "#Firebase", tweets: "50K Tweets" },
    { topic: "#WebDevelopment", tweets: "60K Tweets" },
    { topic: "#Coding", tweets: "70K Tweets" },
    { topic: "#NodeJS", tweets: "45K Tweets" },
    { topic: "#CSS", tweets: "30K Tweets" },
    { topic: "#HTML", tweets: "25K Tweets" },
    { topic: "#Frontend", tweets: "20K Tweets" },
    { topic: "#Backend", tweets: "15K Tweets" },
];

export const TrendingSection = () => {
    return (
        <>
            <Typography variant="h5" py={1} fontWeight={900}>Trending Now</Typography>
            <Box sx={styles.TrendingSectionStyle}>
                {trendingData.map((trend, index) => {
                    return (
                        <Fragment key={index}>
                            <Divider />
                            <Paper key={index} sx={styles.TrendingCardStyle} elevation={0}>
                                <Typography variant="body1" fontWeight={700}>{trend.topic}</Typography>
                                <Typography variant="subtitle2" color="text.secondary">{trend.tweets}</Typography>
                            </Paper>
                        </Fragment>
                    )
                })}
            </Box>
        </>
    )
}