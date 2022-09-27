// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps} from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "twitter-clone-f6a64.firebaseapp.com",
  projectId: "twitter-clone-f6a64",
  storageBucket: "twitter-clone-f6a64.appspot.com",
  messagingSenderId: "455103148365",
  appId: "1:455103148365:web:c856d46c02693e3cc80704"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export {app, db, storage};