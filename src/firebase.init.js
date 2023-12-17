// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; 
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSaovlzMMlA01-0Wedwfhtz2CBuRFkKII",
  authDomain: "healthcare-a-10.firebaseapp.com",
  projectId: "healthcare-a-10",
  storageBucket: "healthcare-a-10.appspot.com",
  messagingSenderId: "503177604644",
  appId: "1:503177604644:web:a04531c9dcb6c2c5edf2b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;