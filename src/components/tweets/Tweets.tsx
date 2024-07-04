import { Avatar, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';

export const Tweets = ( { currentUserTweet } : any) => {
    const avatarUrl = 'https://via.placeholder.com/150';

    return (
        <>
            <Card sx={{ mt: 5 }}>
                <CardHeader
                    avatar={<Avatar src={avatarUrl} />}
                    title={"Twitter"}
                />
                <CardContent>
                    <Typography variant="body1" gutterBottom>
                        {currentUserTweet.content}
                    </Typography>
                    { currentUserTweet.image?.length > 0 && 
                        currentUserTweet.image.map((image : any) => {
                            return(
                               <CardMedia
                                    key={image}
                                    component="img"
                                    height="194"
                                    image={image}
                                    alt="Paella dish"
                                />
                            )
                        })
                    
                    }
                </CardContent>
            </Card>
        </>
    )
}