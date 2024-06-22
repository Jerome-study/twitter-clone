import { Box, TextField, IconButton, Button, Alert } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ConfirmationModal } from '../Modal/Confirmation';
import { useTweetComposer } from '../../hooks/useTweetComposer';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SendIcon from '@mui/icons-material/Send';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import { LoadingBackDrop } from '../loading/backdrop';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

export const TweetComposerForm = ({ toggleDrawer }: { toggleDrawer?: Function }) => {
    const { validateContent, openModal, tweetContent, error, loading, handleOpenModal, postTweet, handleImageChange, setTweetContent } = useTweetComposer({toggleDrawer})

    return (
        <>
            {openModal && <ConfirmationModal openModal={openModal} handleOpenModal={handleOpenModal} action={postTweet} />}
            { error && <Alert severity="error" sx={{ mb: 1 }}>{error}</Alert>}
            { loading && <LoadingBackDrop /> }
            <form onSubmit={handleOpenModal}>
                <TextField
                    fullWidth
                    multiline
                    value={tweetContent}
                    rows={4}
                    variant="outlined"
                    placeholder="What's happening?"
                    helperText={validateContent}
                    onChange={(e) => setTweetContent(e.target.value)}
                />
                <Button
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                    onChange={handleImageChange}
                >
                    Upload file
                    <VisuallyHiddenInput type="file" multiple />
                </Button>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 }}>
                    <IconButton type="submit" color="primary">
                        <SendIcon />
                    </IconButton>
                    {toggleDrawer &&
                        <IconButton color="error" onClick={() => toggleDrawer()}>
                            <DisabledByDefaultIcon />
                        </IconButton>
                    }
                </Box>
            </form>
        </>
    )
}