// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkOt7Tmdl8FbEt61rf9dxVi2kyRVl1qbM",
  authDomain: "netflix-gpt-b8de9.firebaseapp.com",
  projectId: "netflix-gpt-b8de9",
  storageBucket: "netflix-gpt-b8de9.firebasestorage.app",
  messagingSenderId: "169589413478",
  appId: "1:169589413478:web:49bda5022b6731d1753fa7",
  measurementId: "G-6HE669DK2F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();