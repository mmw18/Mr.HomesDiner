// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZJTbNurmUKgZ15pZUrXfYYRzOGmEvmIE",
  authDomain: "mr-home-s-diner.firebaseapp.com",
  projectId: "mr-home-s-diner",
  storageBucket: "mr-home-s-diner.firebasestorage.app",
  messagingSenderId: "458934730014",
  appId: "1:458934730014:web:3507bda5bbef11b81c5d0f",
  measurementId: "G-ZMEDY5MSW2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Export Firestore instance
export default db;
