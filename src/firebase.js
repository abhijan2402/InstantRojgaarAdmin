// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAdh8UAjUntrIs_OQPx7wpMY5br_76adI",
  authDomain: "instantrozgar.firebaseapp.com",
  projectId: "instantrozgar",
  storageBucket: "instantrozgar.appspot.com",
  messagingSenderId: "771112073495",
  appId: "1:771112073495:web:adabf61233bcd527a61f52",
  measurementId: "G-CN13N200QV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export{db};