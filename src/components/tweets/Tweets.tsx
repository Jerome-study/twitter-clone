import { Card, Box, Avatar, Typography, CardMedia, CardContent, Grid } from '@mui/material';


const TweetImages = ({ images }: any) => {
    return (
        <Box sx={{ display: "grid", gridTemplateColumns: images.length > 1 ? "repeat(2, 1fr)" : "", gap: 1}}>
            {images.map((image: string, index: number) => {
                return (
                    <CardMedia
                        key={image}
                        component="img"
                        sx={{ borderRadius: 3, boxShadow: 2, height: "100%", gridRow: (images.length === 3 && index === 0) ? "span 2" : ""}}
                        
                        image={image}
                        alt="tweet image"
                    />
                )
            })}
        </Box>
    )
}


export const Tweets = ({ currentUserTweet }: any) => {
    const avatarUrl = 'https://via.placeholder.com/150';

    return (
        <>
            <Card sx={{ borderRadius: 0, boxShadow: 0, borderBottom: '1px solid #ccc', display: 'flex', gap: 2, px: 2, py: 1.5 }}>
                <Box>
                    <Avatar alt="Remy Sharp" src={avatarUrl} />
                </Box>
                <Box sx={{ flex: 1 }}>
                    <Typography>{currentUserTweet.user_id}</Typography>
                    <CardContent sx={{ px: 0 }}>
                        <Typography variant="body2" color="text.secondary" mb={1}>
                            {currentUserTweet.content}
                        </Typography>
                        {currentUserTweet.image?.length > 0 && <TweetImages images={currentUserTweet.image} />}
                    </CardContent>
                </Box>
            </Card>
        </>
    )
}