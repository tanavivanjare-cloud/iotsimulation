import { initializeApp } from "firebase/app";

import {getDatabase, ref, onValue} from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyBUmxQmqPzEfAl_maOxwdP8FmO0pTGfaSE",
  authDomain: "project1-ede30.firebaseapp.com",
  databaseURL: "https://project1-ede30-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "project1-ede30",
  storageBucket: "project1-ede30.firebasestorage.app",
  messagingSenderId: "400976716950",
  appId: "1:400976716950:web:6204f451370b7c156e0eb7",
  measurementId: "G-4VZQR3Z402"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database= getDatabase(app);
export {database, ref, onValue}