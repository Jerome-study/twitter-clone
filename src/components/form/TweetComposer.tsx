import { Box, TextField, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';

export const TweetComposerForm = ({ toggleDrawer }: { toggleDrawer?: Function }) => {
    return (
        <>
            <form >
                <TextField
                    fullWidth
                    multiline
                    rows={4}
                    variant="outlined"
                    placeholder="What's happening?"
                />
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