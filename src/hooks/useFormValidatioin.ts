import { useForm, SubmitHandler } from "react-hook-form";
import { formSchema, FormProps } from "../models/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useFireStore, useFirebaseAuth } from "../config/firebase";
import { useState } from "react";

export const useFormValidation = (formType : string) => {
    const { db,setDoc, doc, getDoc } = useFireStore();
    const { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, provider, signInWithPopup } = useFirebaseAuth();
    const [firebaseErrror, setFirebaseError] = useState<string>("");

    const navigate = useNavigate();
    
    const { register, handleSubmit, formState: { errors }} = useForm<FormProps>({
        resolver: zodResolver(formSchema)
    });

    const onSubmit : SubmitHandler<FormProps> = async (data) => {
        setFirebaseError("");
        try {
            const result = formType == "register" ? await createUserWithEmailAndPassword(auth, data.email, data.password) : await signInWithEmailAndPassword(auth, data.email, data.password); 
            if (formType === "register") {
                const { uid } = result.user;
                const newUser = {
                    id: uid,
                    email: data.email,
                    first_name: data.first_name,
                    last_name: data.last_name
                }
                const docRef = doc(db, "users", uid);
                await setDoc(docRef, newUser);
            }
            navigate("/");
        } catch(error : any) {
            setFirebaseError(error?.message || "Invalid credentials")
        }
    };

    const handleGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const { uid, email, displayName } = result.user;
            const newUser = {
                id: uid,
                email,
                first_name: displayName?.split(" ")[0],
                last_name: displayName?.split(" ")[1]
            }
            const docRef = doc(db, "users", uid);
            const docSnap = await getDoc(docRef);
            if (!docSnap.exists()) {
                const docRef = doc(db, "users", uid);
                await setDoc(docRef, newUser);
            }
            navigate("/");
        } catch(error : any) {
            setFirebaseError(error?.message || "Invalid credentials");
            console.log(error)
        }
    }

    return {
        register,
        firebaseErrror,
        handleSubmit,
        handleGoogle,
        onSubmit,
        errors
    }
}



