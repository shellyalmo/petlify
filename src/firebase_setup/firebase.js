// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmJitc3_Ir7MTmqZwkOKcjLtmWARU0Tlk",
  authDomain: "pets-shelly.firebaseapp.com",
  projectId: "pets-shelly",
  storageBucket: "pets-shelly.appspot.com",
  messagingSenderId: "892716607919",
  appId: "1:892716607919:web:e984ad253e71cf08fda75a",
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const firestore = getFirestore(app);
