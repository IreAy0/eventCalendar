// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD75EUrda_0Wzm9ZrwCA9xhHng6U4XukaM",
  authDomain: "events-55e25.firebaseapp.com",
  projectId: "events-55e25",
  storageBucket: "events-55e25.appspot.com",
  messagingSenderId: "462826604133",
  appId: "1:462826604133:web:61d7c2959b3b949bb8688c",
  measurementId: "G-YWMTKYZHLE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;