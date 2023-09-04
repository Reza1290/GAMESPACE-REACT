// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage"
 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDi6qED5X--7nvv_Mc_L5GE8k343wNFD6U",
  authDomain: "komunitas-6e07e.firebaseapp.com",
  databaseURL: "https://komunitas-6e07e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "komunitas-6e07e",
  storageBucket: "komunitas-6e07e.appspot.com",
  messagingSenderId: "628937727329",
  appId: "1:628937727329:web:4fdc4ac1fa713c71a0b920",
  measurementId: "G-LWRZ29TGLT"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const fireDb = getFirestore(app);
export const storage = getStorage(app);

export const auth = getAuth(app);
export default app;

