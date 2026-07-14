// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPBt2mADfkPkqSTM1-nnsL6Ojszmheotc",
  authDomain: "react-c26122.firebaseapp.com",
  projectId: "react-c26122",
  storageBucket: "react-c26122.firebasestorage.app",
  messagingSenderId: "692518090120",
  appId: "1:692518090120:web:bfd11064008308b924763d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };