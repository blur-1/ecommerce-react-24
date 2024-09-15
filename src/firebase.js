// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOmLRcDabyKOysn0a1XkJFkvHGjCj8nKA",
  authDomain: "react-auth-ecm.firebaseapp.com",
  projectId: "react-auth-ecm",
  storageBucket: "react-auth-ecm.appspot.com",
  messagingSenderId: "438029656250",
  appId: "1:438029656250:web:08398d1f09a59603962283",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
