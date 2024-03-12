// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import "firebase/storage";
import { GoogleAuthProvider, getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPdiZeveWegDYGcPnHJUNET5gth2QOyvI",
  authDomain: "microproyecto-2-50a18.firebaseapp.com",
  projectId: "microproyecto-2-50a18",
  storageBucket: "microproyecto-2-50a18.appspot.com",
  messagingSenderId: "448320551230",
  appId: "1:448320551230:web:bc9c2a7db7c35e2cea546f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export default firebaseConfig;
export const googleProvider = new GoogleAuthProvider();


