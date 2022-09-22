import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  databaseURL: "https://chatappso-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
export default db = getDatabase(app);


//FIREBASE REALTIME DATABASE DOCUMENTATION
//https://firebase.google.com/docs/database/web/read-and-write#web-version-9
