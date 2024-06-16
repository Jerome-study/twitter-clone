import { useState } from 'react';
import { useAuth } from '../../context/authProvider';
import { tweetSchema } from '../../models/zod';
import { useFireStore } from '../../config/firebase';
import { Box, TextField, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import { ConfirmationModal } from '../Modal/Confirmation';

export const TweetComposerForm = ({ toggleDrawer }: { toggleDrawer?: Function }) => {
    const { addDoc, collection, db, serverTimestamp } = useFireStore();
    const { currentUser } = useAuth();
    const [tweetContent, setTweetContent] = useState("");
    const [validateContent, setValidateContent] = useState("");
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = (e : any) => {
        e.preventDefault();
        setOpenModal(prev => !prev)
    }

    const postTweet = async () => {
        setValidateContent("");
        const tweet = {
            user_id: currentUser?.uid || "",
            content: tweetContent,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp()
        }
        try {
            const validationResult = tweetSchema.safeParse(tweet)
            if (validationResult.error) return handleValidationErrors(validationResult.error);
            await addDoc(collection(db, "tweets"), tweet);
            if (toggleDrawer) toggleDrawer();
        } catch (error: any) {
            console.log(error)
        } finally {
            setTweetContent("")
        }
    }

    const handleValidationErrors = (error: any) => {
        const errors = error?.errors;

        if (errors.length > 1) {
            setValidateContent(errors[1].message)
        } else {
            setValidateContent(errors[0].message)
        }
        console.log(errors)
    };

    return (
        <>
            { openModal && <ConfirmationModal openModal={openModal} handleOpenModal={handleOpenModal} action={postTweet} />}
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