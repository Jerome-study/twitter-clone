import { useState } from "react";
import { useFireStore, useFirebaseStorage } from "../config/firebase";
import { useAuth } from "../context/authProvider";
import { tweetSchema } from "../models/zod";
import { useTweet } from "../context/tweetProvider";

export const useTweetComposer = ({ toggleDrawer }: { toggleDrawer?: Function }) => {
    // States
    const [tweetContent, setTweetContent] = useState("");
    const [tweetImages, setTweetImages] = useState([])
    const [validateContent, setValidateContent] = useState("");
    const [openModal, setOpenModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("")

    // Custom Hooks 
    const { doc, setDoc, collection, db, serverTimestamp, getDoc } = useFireStore();
    const { storage, ref, uploadBytes, getDownloadURL } = useFirebaseStorage();
    const { setCurrentUserTweets } = useTweet()
    
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
        setTweetImages(prev => [...prev, ...tweetImages])
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

            // Retrieve the stored data
            const storedDoc = await getDoc(doc(db, 'tweets', tweetId));

            if (toggleDrawer) toggleDrawer(); // If in mobile view

            // Update The Current User tweets
            setCurrentUserTweets((prev : any) => [...prev, { ...storedDoc.data() }])
        } catch (error: any) {
            setError("Something went wrog please try again later");
        } finally {
            setTweetContent("");
            setTweetImages([])
            setLoading(false);
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

    // Clear Tweet Form and Image
    const clearTweetForm = () => {
        setTweetContent("");
        setTweetImages([]);
        setValidateContent("");
    }

    return {
        validateContent,
        openModal,
        tweetContent,
        loading,
        error,
        handleOpenModal,
        postTweet,
        setTweetContent,
        tweetImages,
        handleImageChange,
        clearTweetForm
    }


}