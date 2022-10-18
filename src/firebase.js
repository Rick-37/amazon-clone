import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD0fFk5JKhvmFja4A77GZwb9VhnHY_DGUA",
  authDomain: "challenge-b2c6e.firebaseapp.com",
  projectId: "challenge-b2c6e",
  storageBucket: "challenge-b2c6e.appspot.com",
  messagingSenderId: "1027974922354",
  appId: "1:1027974922354:web:d4082c87e69d2dfa8f42eb",
  measurementId: "G-52971PY731",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
