
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBZFCcYEJGFRzdv9H8bfhC-droESyu8H08",
  authDomain: "chatappso.firebaseapp.com",
  databaseURL: "https://chatappso-default-rtdb.firebaseio.com",
  projectId: "chatappso",
  storageBucket: "chatappso.appspot.com",
  messagingSenderId: "619106802049",
  appId: "1:619106802049:web:cfe09680e74fff15713080"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;