import { Fragment, lazy, Suspense, useState } from "react"
import { TextField, Typography, Paper, Box, Divider } from '@mui/material';
import { UserCardSkeleton } from "../mui/skeleton/UserCardSkeleton";
import { CircularProgress } from '@mui/material';
import { UserInfoProps } from "../../models/typescript";
import { useSearch } from "../../hooks/useSearch";

const UserCardLazy = lazy(() => import("./UserCard"))

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
    const { searchResult, loading } = useSearch(searchValue);
    
    const handleChangeValue = (e: any) => {
        setSearchValue(e.target.value)
    }

    return (
        <>
            <TextField
                variant="outlined"
                size="small"
                placeholder="Search SocialTweet User"
                value={searchValue}
                onChange={handleChangeValue}
                sx={{
                    p: 2,
                    width: '100%',
                    '& .MuiOutlinedInput-root': {
                        borderRadius: 20
                    }
                }}
            />

            {(loading && searchValue) &&
                Array.from(new Array(10)).map((_, index) => (
                    <UserCardSkeleton key={index} />
                ))
            }

            {(searchResult.length === 0 && !searchValue) &&
                <Box sx={{ px: 2 }}>
                    <Typography variant="h5" mb={2} fontWeight={900}>Trending Now</Typography>
                    {trendingData.map((trend, index) => {
                        return (
                            <Fragment key={index}>
                                <Divider />
                                <Paper key={index} sx={{ borderRadius: 0, py: 2 }} elevation={0}>
                                    <Typography variant="body1" fontWeight={700}>{trend.topic}</Typography>
                                    <Typography variant="subtitle2" color="text.secondary">{trend.tweets}</Typography>
                                </Paper>
                            </Fragment>
                        )
                    })}
                </Box>
            }

            {(searchResult.length > 0 && !loading) &&
                <Suspense fallback={<CircularProgress />}>
                    <Box>
                        {searchResult.map((user: UserInfoProps, index: number) => (
                            <UserCardLazy user={user} key={index} />
                        ))}
                    </Box>
                </Suspense>
            }

            {(searchResult.length === 0 && searchValue) &&
                <Box sx={{ display: "flex", height: "70vh", alignItems: "center" }}>
                    <Typography fontWeight={600} align="center" variant="subtitle2">
                        No Results found, please check your input if it is type correctly
                    </Typography>
                </Box>
            }

        </>
    )

}