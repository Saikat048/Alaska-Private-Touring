// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqecjbUkxOj3nHmlDdbbLRsElD_hkVCco",
  authDomain: "my-assignment-10-27082.firebaseapp.com",
  projectId: "my-assignment-10-27082",
  storageBucket: "my-assignment-10-27082.appspot.com",
  messagingSenderId: "381003594419",
  appId: "1:381003594419:web:90f80126444af732460ec6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;