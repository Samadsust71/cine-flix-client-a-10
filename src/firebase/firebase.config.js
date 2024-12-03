// Import the functions
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBT2n13Q5Ico9ggo2M-kiYoBtg5trBmwCI",
  authDomain: "cine-verse-b249e.firebaseapp.com",
  projectId: "cine-verse-b249e",
  storageBucket: "cine-verse-b249e.firebasestorage.app",
  messagingSenderId: "386253694761",
  appId: "1:386253694761:web:4841b52682fa02ebcdb938"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);