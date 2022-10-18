// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0fFk5JKhvmFja4A77GZwb9VhnHY_DGUA",
  authDomain: "challenge-b2c6e.firebaseapp.com",
  projectId: "challenge-b2c6e",
  storageBucket: "challenge-b2c6e.appspot.com",
  messagingSenderId: "1027974922354",
  appId: "1:1027974922354:web:d4082c87e69d2dfa8f42eb",
  measurementId: "G-52971PY731"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);