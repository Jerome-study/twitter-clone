import { ReactNode } from 'react';
import { Drawer, Box } from '@mui/material';

export const BottomDrawer = ({ children, isOpen, setIsOpen } : { children : ReactNode, isOpen : boolean, setIsOpen : Function }) => {

    return (
        <>
            <Drawer
                anchor="bottom"
                open={isOpen}
                onClose={() => setIsOpen(false)}
                PaperProps={{
                    sx: {
                        width: '100%',
                        height: '100%', // Set the height to fill the entire viewport
                        position: 'absolute',
                        bottom: 0
                    },
                }}
            >
                <Box p={2}>
                    { children }
                </Box>
            </Drawer>
        </>
    );
}