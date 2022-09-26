
import { initializeApp } from "firebase/app";

// Firebase 

const firebaseConfig = {
  apiKey: "AIzaSyBZFCcYEJGFRzdv9H8bfhC-droESyu8H08",
  authDomain: "chatappso.firebaseapp.com",
  databaseURL: "https://chatappso-default-rtdb.firebaseio.com",
  projectId: "chatappso",
  storageBucket: "chatappso.appspot.com",
  messagingSenderId: "619106802049",
  appId: "1:619106802049:web:cfe09680e74fff15713080"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyCNHYCHRzkeYqA55ZzlQPsAB605QOhEwpQ",
//   authDomain: "chatappsoresp.firebaseapp.com",
//   projectId: "chatappsoresp",
//   storageBucket: "chatappsoresp.appspot.com",
//   messagingSenderId: "945755747618",
//   appId: "1:945755747618:web:e5e0063fe2ba481e05e17b",
//   measurementId: "G-WFFXG68G4Z"
// };
// const firebaseConfig = {
//   apiKey: "AIzaSyBs6jJRWzErf3MRMcRst5RvX-aO_YVGYhQ",
//   authDomain: "chatappso-2.firebaseapp.com",
//   projectId: "chatappso-2",
//   storageBucket: "chatappso-2.appspot.com",
//   messagingSenderId: "507193150854",
//   appId: "1:507193150854:web:0747c07cf18cff8030f007",
//   measurementId: "G-EG9GZ1FK78"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;