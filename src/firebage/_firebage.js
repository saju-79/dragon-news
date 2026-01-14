// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxN1YXPV9U9m20ZFJKYGwJhN5disr6pOE",
  authDomain: "dragone-news-cfa42.firebaseapp.com",
  projectId: "dragone-news-cfa42",
  storageBucket: "dragone-news-cfa42.firebasestorage.app",
  messagingSenderId: "922873180734",
  appId: "1:922873180734:web:06e35cd1ee3b2f4974176f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)