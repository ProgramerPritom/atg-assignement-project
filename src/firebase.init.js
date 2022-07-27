// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQRQ7B4J0UUb4KyEXd1Eo2_J8J99HqClc",
  authDomain: "atg-assignment-6d66b.firebaseapp.com",
  projectId: "atg-assignment-6d66b",
  storageBucket: "atg-assignment-6d66b.appspot.com",
  messagingSenderId: "759482887510",
  appId: "1:759482887510:web:0ce75d0aae53c60dba3af7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
