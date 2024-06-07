import { initializeApp } from "firebase/app";
import { addDoc, getFirestore, collection, getDoc, doc, setDoc } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig)


// Firestore
export const useFireStore = () => {
  const db = getFirestore(app);
  return {
    db,
    addDoc,
    collection,
    getDoc,
    doc,
    setDoc
  }
}

// Authentication
export const useFirebaseAuth = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  return {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    provider,
    signInWithPopup
  }
}


