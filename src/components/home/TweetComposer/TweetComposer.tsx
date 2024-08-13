import { Box, TextField, IconButton, Button, Alert, Avatar } from '@mui/material';
import { ConfirmationModal } from '../../Modal/Confirmation';
import { useTweetComposer } from '../../../hooks/useTweetComposer';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import { LoadingBackDrop } from '../../mui/loading/backdrop';
import { useTweet } from '../../../context/tweetProvider';
import { useResponsive } from '../../../hooks/useResponsive';
import { ImageContainer } from './ImageContainer';
import { MobileActionButton } from './MobileActionButton';

export const TweetComposerForm = ({ toggleDrawer }: { toggleDrawer?: Function }) => {
    const { validateContent, openModal, tweetContent, error, loading, handleOpenModal, tweetImages, postTweet, handleImageChange, setTweetContent, clearTweetForm } = useTweetComposer({ toggleDrawer })
    const { inputRef } = useTweet()
    const { isMobile } = useResponsive();
    const avatarUrl = 'https://via.placeholder.com/150';
    return (
        <>
            {/* Opens Modal */}
            {openModal && <ConfirmationModal openModal={openModal} handleOpenModal={handleOpenModal} action={postTweet} />}

            {/* Loading State */}
            {loading && <LoadingBackDrop />}

            {/* Only in Mobile View */}
            {toggleDrawer &&
                <MobileActionButton handleOpenModal={handleOpenModal} toggleDrawer={toggleDrawer}/>
            }

            {/* Error Message */}
            {error && <Alert severity="error" sx={{ my: 1 }}>{error}</Alert>}

            {/* Form */}
            <Box sx={{ px: 2 }} component="form" onSubmit={handleOpenModal}>
                <Box sx={{ display: "flex", }}>
                    <Box sx={{ py: 2 }}>
                        <Avatar alt="Remy Sharp" src={avatarUrl} />
                    </Box>
                    <Box sx={{ flex: 1 }}>
                        <TextField
                            fullWidth
                            multiline
                            value={tweetContent}
                            inputRef={inputRef}
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
                                <IconButton component="span" sx={{ marginRight: '8px', color: "custom.blue" }}>
                                    <InsertPhotoOutlinedIcon />
                                </IconButton>
                            </label>

                            {/* Clear Tweet Form */}
                            {((tweetContent || tweetImages.length > 0) && !isMobile) &&
                                <Button
                                    variant="contained"
                                    sx={{ float: 'right', ml: 2,  borderRadius: 2, bgcolor: "custom.black" }}
                                    onClick={clearTweetForm}
                                >
                                    CLEAR
                                </Button>
                            }

                            {/* Post Button */}
                            {!isMobile &&
                                <Button
                                    variant="contained"
                                    sx={{ float: 'right',  borderRadius: 2, bgcolor: "custom.blue", fontWeight: "700" }}
                                    type='submit'
                                >
                                    TWEET
                                </Button>
                            }
                        </Box>
                    </Box>
                </Box>

                {/* Image Container */}
                {tweetImages.length > 0 &&
                    <ImageContainer tweetImages={tweetImages}/>
                }

            </Box>
        </>
    )
}