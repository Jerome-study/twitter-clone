import { useState } from 'react';
import { Fab, Drawer, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { TweetComposerForm } from '../form/TweetComposer';

export const MobileTweetComposer = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <Fab
                color="primary"
                aria-label="add"
                style={{ position: 'fixed', bottom: 80, right: 16 }}
                onClick={toggleDrawer}
            >
                <AddIcon />
            </Fab>
            <Drawer
                anchor="bottom"
                open={isOpen}
                onClose={() => setIsOpen(false)}
                PaperProps={{
                    sx: {
                        width: '100%',
                        height: '100%', // Set the height to fill the entire viewport
                        position: 'absolute',
                        bottom: 0,
                    },
                }}
            >
                <Box p={2}>
                    <TweetComposerForm toggleDrawer={toggleDrawer}/>
                </Box>
            </Drawer>
        </>
    );
}