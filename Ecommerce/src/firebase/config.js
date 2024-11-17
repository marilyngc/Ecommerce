// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1RuANPE6apSA_u8uolHNGUM-jn6bWrVg",
  authDomain: "ecommerce-6e999.firebaseapp.com",
  projectId: "ecommerce-6e999",
  storageBucket: "ecommerce-6e999.appspot.com",
  messagingSenderId: "925229553487",
  appId: "1:925229553487:web:b3f1a929fe8f282ca9d73a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const dataBase = getFirestore(app)
export const auth = getAuth(app)