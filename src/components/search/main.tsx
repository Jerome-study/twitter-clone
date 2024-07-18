import { Fragment, useState } from "react"
import { TextField, Typography, Paper, Box, Divider } from '@mui/material';

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

export const MainSearchComponent = () => {
    const [searchValue, setSearchValue] = useState('');

    const handleChangeValue = (e: any) => {
        setSearchValue(e.target.value)
    }

    return (
        <>
            <TextField
                variant="outlined"
                size="small"
                placeholder="Search Twitter"
                value={searchValue}
                onChange={handleChangeValue}
                sx={{
                    p : 2,
                    width: '100%',
                    '& .MuiOutlinedInput-root': {
                        borderRadius: 20
                    }
                }}
            />

            <Box sx={{ display: searchValue? "none" : "block", px : 2 }}>
                <Typography variant="h5" mb={2} fontWeight={900}>Trending Now</Typography>
                {trendingData.map((trend, index) => {
                    return(
                        <Fragment key={index}>
                            <Divider />
                            <Paper key={index} sx={{ borderRadius: 0, py : 2}} elevation={0}>
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