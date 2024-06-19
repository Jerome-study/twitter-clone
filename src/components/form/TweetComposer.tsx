import { useState } from 'react';
import { useAuth } from '../../context/authProvider';
import { tweetSchema } from '../../models/zod';
import { useFireStore } from '../../config/firebase';
import { Box, TextField, IconButton, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SendIcon from '@mui/icons-material/Send';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import { ConfirmationModal } from '../Modal/Confirmation';
import { useFirebaseStorage } from '../../config/firebase';

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
    const { doc, setDoc, collection, db, serverTimestamp } = useFireStore();
    const { storage, ref, uploadBytes, getDownloadURL } = useFirebaseStorage();
    const { currentUser } = useAuth();
    const [tweetContent, setTweetContent] = useState("");
    const [tweetImages, setTweetImages] = useState([])
    const [validateContent, setValidateContent] = useState("");
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = (e: any) => {
        e.preventDefault();
        setOpenModal(prev => !prev)
    }

    const handleImageChange = (e : any) => {
        if (e.target.files.length > 0) {
          const selectedImages :any = Array.from(e.target.files);
          setTweetImages(selectedImages);
        }
      };

    const postTweet = async () => {
        setValidateContent("");
        const tweet = {
            user_id: currentUser?.uid || "",
            content: tweetContent,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
        }
        try {
            const validationResult = tweetSchema.safeParse(tweet)
            if (validationResult.error) return handleValidationErrors(validationResult.error);
            const tweetId = doc(collection(db, 'tweets')).id;
            const imageUrls = await Promise.all(
                tweetImages.map(async (image, index) => {
                    const imageRef = ref(storage, `tweets/${currentUser.uid}/${tweetId}/image${index + 1}`);
                    await uploadBytes(imageRef, image);
                    return getDownloadURL(imageRef);
                })
            );
            await setDoc(doc(db, 'tweets', tweetId), { ...tweet, image: imageUrls });
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
            {openModal && <ConfirmationModal openModal={openModal} handleOpenModal={handleOpenModal} action={postTweet} />}
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