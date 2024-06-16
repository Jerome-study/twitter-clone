import { forwardRef } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';


const Transition = forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const ConfirmationModal = ({ openModal, handleOpenModal, action } : any) => {
    

    const handleAction = (e: any) => {
        action();
        handleOpenModal(e)
    }

    return (
        <>
            <Dialog
                open={openModal}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleOpenModal}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Would you like to post this tweet?"}</DialogTitle>
                <DialogActions>
                    <Button onClick={handleOpenModal}>Disagree</Button>
                    <Button onClick={handleAction}>Agree</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}