import { useAuth } from "../../context/authProvider";
import { Box, Typography } from "@mui/material";
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const HomePage = () => {
    const { currentUser } = useAuth();
    const [tweet, setTweet] = useState('');

    const handleTweetChange = (event : any) => {
        setTweet(event.target.value);
    };

    const handleTweetSubmit = () => {
        // Here you can add logic to submit the tweet, like sending it to a server.
        console.log('Tweet submitted:', tweet);
        // Reset tweet input
        setTweet('');
    };
    return (
        <>
            <Box>
                <Typography variant="h4" component="h1">Welcome {currentUser?.email}</Typography>
            </Box>
            <div >
                <TextField
                    id="tweet-input"
                    label="What's on your mind?"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    value={tweet}
                    onChange={handleTweetChange}
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleTweetSubmit}
                    disabled={tweet.trim() === ''}
                    sx={{ mt: 2 }}
                >
                    Tweet
                </Button>
            </div>
        </>
    )
}