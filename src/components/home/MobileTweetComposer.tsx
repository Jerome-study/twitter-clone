import { useState } from 'react';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { TweetComposerForm } from '../form/TweetComposer';
import { BottomDrawer } from '../mui/BottomDrawer';

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
            <BottomDrawer isOpen={isOpen} setIsOpen={setIsOpen}>
                <TweetComposerForm toggleDrawer={toggleDrawer} />
            </BottomDrawer>
        </>
    );
}