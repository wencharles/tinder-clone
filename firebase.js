import { initializeApp } from "firebase/app";
import { getFirestore, } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4lgA849VhNudP2GU46pGrQqSX5vsj608",
  authDomain: "rn-tinder-clone-d9276.firebaseapp.com",
  projectId: "rn-tinder-clone-d9276",
  storageBucket: "rn-tinder-clone-d9276.appspot.com",
  messagingSenderId: "346757682722",
  appId: "1:346757682722:web:7b1affaa1d333e5cfe9c7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {db, auth}