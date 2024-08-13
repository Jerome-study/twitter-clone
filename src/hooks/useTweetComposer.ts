import { useReducer } from "react";
import { useFireStore, useFirebaseStorage } from "../config/firebase";
import { useAuth } from "../context/authProvider";
import { tweetSchema } from "../models/zod";
import { useTweet } from "../context/tweetProvider";

interface TweetComposerProps {
    tweetContent: string;
    tweetImages: File[];
    validateContent: string;
    openModal: Boolean;
    loading: Boolean;
    error: string
}

const initialState: TweetComposerProps = {
    tweetContent: "",
    tweetImages: [],
    validateContent: "",
    openModal: false,
    loading: false,
    error: ""
}

const reducer = (state : TweetComposerProps, action : any) => {
    switch(action.type) {
        case 'SET_TWEET_CONTENT': 
            return {...state, tweetContent: action.payload};
        case 'ADD_TWEET_IMAGES':
            return { ...state, tweetImages: [...state.tweetImages, ...action.payload] }
        case 'SET_VALIDATE_CONTENT':
            return { ...state, validateContent: action.payload }
        case 'TOGGLE_MODAL' : 
            return { ...state, openModal: !state.openModal }
        case "SET_LOADING" :
            return {...state, loading: action.payload }
        case "SET_ERROR" : 
            return { ...state, error: action.payload };
        case "CLEAR_FORM": 
            return { ...initialState }
        default:
            return state
    }
}

export const useTweetComposer = ({ toggleDrawer }: { toggleDrawer?: Function }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    // States
    const { tweetContent, tweetImages, validateContent, openModal, loading, error } = state;

    // Custom Hooks 
    const { doc, setDoc, collection, db, serverTimestamp, getDoc } = useFireStore();
    const { storage, ref, uploadBytes, getDownloadURL } = useFirebaseStorage();
    const { setCurrentUserTweets } = useTweet()
    
    // Context Hook
    const { currentUser } = useAuth();

    const handleOpenModal = (e : any) => {
        e.preventDefault();
        dispatch({ type: 'TOGGLE_MODAL' })
    }

    const handleImageChange = (e: any) => {
        if (e.target.files.length > 0) {
            const selectedImages: any = Array.from(e.target.files);
            dispatch({ type: "ADD_TWEET_IMAGES", payload: selectedImages })
        }
    };

    const postTweet = async () => {
        dispatch({ type: "SET_LOADING", payload: true })
        dispatch({ type: "SET_ERROR", payload: "" })
        dispatch({ type: "SET_VALIDATE_CONTENT", payload: "" });
        dispatch({ type: "TOGGLE_MODAL" })
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
            setCurrentUserTweets((prev : any) => [...prev, { ...storedDoc.data(), id: tweetId }])
        } catch (error: any) {
            dispatch({ type: "SET_ERROR", payload: "Something went wrong, please try again later" })
        } finally {
            dispatch({ type: "SET_LOADING", payload: false })
        }
    }

    const handleValidationErrors = (error: any) => {
        const errors = error?.errors;
        const errorMessage = errors.length > 1 ? errors[1].message : errors[0].message;
        dispatch({ type: "SET_VALIDATE_CONTENT", payload: errorMessage })
    };

    // Clear Tweet Form and Image
    const clearTweetForm = () => {
        dispatch({ type: "CLEAR_FORM" })
    }

    return {
        validateContent,
        openModal,
        tweetContent,
        loading,
        error,
        handleOpenModal,
        setTweetContent: (value : string) => dispatch({ type: "SET_TWEET_CONTENT", payload: value }),
        postTweet,
        tweetImages,
        handleImageChange,
        clearTweetForm
    }


}