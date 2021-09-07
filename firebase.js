// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSsGNuV5RDiHvXHeWW0kwb9jcn1FIASfg",
  authDomain: "react-netflix-5ca08.firebaseapp.com",
  projectId: "react-netflix-5ca08",
  storageBucket: "react-netflix-5ca08.appspot.com",
  messagingSenderId: "585121479593",
  appId: "1:585121479593:web:e04def6f55189d50a7e2b8",
  measurementId: "G-VPFSFRF2BT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
