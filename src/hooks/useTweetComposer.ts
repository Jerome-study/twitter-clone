import { useState } from "react";
import { useFireStore, useFirebaseStorage } from "../config/firebase";
import { useAuth } from "../context/authProvider";
import { tweetSchema } from "../models/zod";

export const useTweetComposer = ({ toggleDrawer }: { toggleDrawer?: Function }) => {
    // States
    const [tweetContent, setTweetContent] = useState("");
    const [tweetImages, setTweetImages] = useState([])
    const [validateContent, setValidateContent] = useState("");
    const [openModal, setOpenModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("")

    // Custom Hooks 
    const { doc, setDoc, collection, db, serverTimestamp } = useFireStore();
    const { storage, ref, uploadBytes, getDownloadURL } = useFirebaseStorage();
    
    // Context Hook
    const { currentUser } = useAuth();

    const handleOpenModal = (e: any) => {
        e.preventDefault();
        setOpenModal(prev => !prev)
    }

    const handleImageChange = (e: any) => {
        if (e.target.files.length > 0) {
            const selectedImages: any = Array.from(e.target.files);
            setTweetImages(selectedImages);
        }
    };

    const postTweet = async () => {
        setLoading(true);
        setError("");
        setValidateContent("");
        const tweet = {
            user_id: currentUser?.uid || "",
            content: tweetContent,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
        }
        try {
            const validationResult = tweetSchema.safeParse(tweet) // Validate tweet
            if (validationResult.error) return handleValidationErrors(validationResult.error); // If theres an error in validate, display it
            const tweetId = doc(collection(db, 'tweets')).id; // Generate custom Id from firebase
            
            let imageUrls : any = []
            
            // If theres an image store it on firebase storage
            if (tweetImages.length > 0) {
                imageUrls = await Promise.all(
                    tweetImages.map(async (image, index) => {
                        const imageRef = ref(storage, `tweets/${currentUser.uid}/${tweetId}/image${index + 1}`);
                        await uploadBytes(imageRef, image);
                        return getDownloadURL(imageRef);
                    })
                );
            } 

            // Insert tweet on tweets collection
            await setDoc(doc(db, 'tweets', tweetId), { ...tweet, image: imageUrls });
            if (toggleDrawer) toggleDrawer(); // If in mobile view
        } catch (error: any) {
            setError("Something went wrog please try again later");
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

    return {
        validateContent,
        openModal,
        tweetContent,
        loading,
        error,
        handleOpenModal,
        postTweet,
        setTweetContent,
        handleImageChange
    }


}