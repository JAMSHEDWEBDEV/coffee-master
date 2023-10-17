// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlOZ9vxgtLJkVAu6aUGoU4MDpUdtFAkFQ",
  authDomain: "coffee-master-ccbf9.firebaseapp.com",
  projectId: "coffee-master-ccbf9",
  storageBucket: "coffee-master-ccbf9.appspot.com",
  messagingSenderId: "349565538544",
  appId: "1:349565538544:web:7c56466cbead398763f235"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;