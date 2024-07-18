import { Box, TextField, IconButton, Button, Alert, Grid } from '@mui/material';
import { ConfirmationModal } from '../Modal/Confirmation';
import { useTweetComposer } from '../../hooks/useTweetComposer';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { LoadingBackDrop } from '../mui/loading/backdrop';


export const TweetComposerForm = ({ toggleDrawer }: { toggleDrawer?: Function }) => {
    const { validateContent, openModal, tweetContent, error, loading, handleOpenModal, tweetImages, postTweet, handleImageChange, setTweetContent, clearTweetForm } = useTweetComposer({ toggleDrawer })

    return (
        <>
            {openModal && <ConfirmationModal openModal={openModal} handleOpenModal={handleOpenModal} action={postTweet} />}
            {error && <Alert severity="error" sx={{ mb: 1 }}>{error}</Alert>}
            {loading && <LoadingBackDrop />}
            <Box component="form" onSubmit={handleOpenModal}>
                <TextField
                    fullWidth
                    multiline
                    value={tweetContent}

                    variant="outlined"
                    placeholder="What's happening?"
                    helperText={validateContent}
                    onChange={(e) => setTweetContent(e.target.value)}
                    sx={{
                        "& fieldset": { border: 'none' },
                    }}
                />
                <Box py={1}>
                    <input
                        accept="image/*"
                        style={{ display: 'none' }}
                        id="tweet-image-input"
                        type="file"
                        onChange={handleImageChange}
                        multiple
                    />
                    <label htmlFor="tweet-image-input">
                        <IconButton component="span" sx={{ marginRight: '8px' }}>
                            <AddPhotoAlternateIcon />
                        </IconButton>
                    </label>
                    {toggleDrawer &&
                        <Button
                            variant="contained"
                            color="error"
                            sx={{ float: 'right', mr: 2, borderRadius: 5 }}
                            onClick={() => toggleDrawer()}
                        >
                            CANCEL
                        </Button>
                    }
                    {(tweetContent || tweetImages.length > 0) &&
                        <Button
                            variant="contained"
                            color="error"
                            sx={{ float: 'right', mr: 2, borderRadius: 5 }}
                            onClick={clearTweetForm}
                        >
                            CLEAR
                        </Button>
                    }
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ float: 'right', mr: 2, borderRadius: 5 }}
                        type='submit'
                    >
                        Tweet
                    </Button>
                </Box>


                {tweetImages.length > 0 &&
                    <Grid container spacing={2} px={2}>
                        {tweetImages.map((tweetImage, index) => {
                            return (
                                <Grid item xs={4} lg={1.5} key={index} sx={{ mt: 2 }}>
                                    <Box component="img" src={URL.createObjectURL(tweetImage)} alt="Uploaded" sx={{ width: "100%", maxWidth: "200px", borderRadius: '8px', marginBottom: '8px', border: "3px solid #ccc" }} />
                                </Grid>
                            )
                        })}
                    </Grid>
                }

            </Box>
        </>
    )
}