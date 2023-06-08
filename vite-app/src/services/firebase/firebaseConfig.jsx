// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/app";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFPD3H7xcfar4gYpyMKDne-GDatgRBQ2I",
  authDomain: "proyectoreactcz.firebaseapp.com",
  projectId: "proyectoreactcz",
  storageBucket: "proyectoreactcz.appspot.com",
  messagingSenderId: "731008796382",
  appId: "1:731008796382:web:78778e5950aeba356de44f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =getFirestore(app)