// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKp8j8NuqcLX8J1qpiS663l7BQtooXx7g",
  authDomain: "tryfire-4e079.firebaseapp.com",
  projectId: "tryfire-4e079",
  storageBucket: "tryfire-4e079.appspot.com",
  messagingSenderId: "1077150204765",
  appId: "1:1077150204765:web:6308b4438dc6fd3bb29eb4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
