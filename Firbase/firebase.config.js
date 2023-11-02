// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLLnKkkHV9dwCjXmBN29LcjDKW-V7aASc",
  authDomain: "car-doctor-7b3db.firebaseapp.com",
  projectId: "car-doctor-7b3db",
  storageBucket: "car-doctor-7b3db.appspot.com",
  messagingSenderId: "650385756036",
  appId: "1:650385756036:web:687a7767ee00090b8517d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId,
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;