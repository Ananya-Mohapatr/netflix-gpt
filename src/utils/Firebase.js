// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYo3c9OVwu5Fb3QtJutBPzGTfyErwCOe0",
  authDomain: "netflixgpt-c8512.firebaseapp.com",
  projectId: "netflixgpt-c8512",
  storageBucket: "netflixgpt-c8512.appspot.com",
  messagingSenderId: "229910325906",
  appId: "1:229910325906:web:f208a3f05c3b37fce8144b",
  measurementId: "G-Y8T2LSB13Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();