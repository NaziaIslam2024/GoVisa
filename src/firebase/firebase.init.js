// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAX_PoZZhvFUDVgIvnNXFWYfJL2Q5pqgdc",
  authDomain: "govisa-8542a.firebaseapp.com",
  projectId: "govisa-8542a",
  storageBucket: "govisa-8542a.firebasestorage.app",
  messagingSenderId: "972853641732",
  appId: "1:972853641732:web:c04d73aaeeb521d579ab51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
