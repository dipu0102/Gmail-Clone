import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth/web-extension";

const firebaseConfig = {
  apiKey: "AIzaSyC0_QcQh0PxIeiuE_ko4THKn5gkbeBuIag",
  authDomain: "clone-2b4f6.firebaseapp.com",
  projectId: "clone-2b4f6",
  storageBucket: "clone-2b4f6.appspot.com",
  messagingSenderId: "651113262816",
  appId: "1:651113262816:web:4d31ee3d0ea76ea815aa85",
  measurementId: "G-7H2CSL8P57",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
