// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRDSWP6FEXgeHrNe5kYX5n6dABY4877Tg",
  authDomain: "mnba-c5a55.firebaseapp.com",
  projectId: "mnba-c5a55",
  storageBucket: "mnba-c5a55.appspot.com",
  messagingSenderId: "384379729870",
  appId: "1:384379729870:web:0a59eea92cce50f0a39d9f",
  measurementId: "G-0JRPF58E5C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);