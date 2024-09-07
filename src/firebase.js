// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider,signInWithPopup } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjhz32-md_eZDw_Qusqsg4LKyFB5AQiBI",
  authDomain: "carrento-9ea05.firebaseapp.com",
  databaseURL: "https://carrento-9ea05-default-rtdb.firebaseio.com",
  projectId: "carrento-9ea05",
  storageBucket: "carrento-9ea05.appspot.com",
  messagingSenderId: "600830250737",
  appId: "1:600830250737:web:f2c5c09bf17f3152622350",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);

export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
export { signInWithPopup };
