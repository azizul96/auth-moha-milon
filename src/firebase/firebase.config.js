// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCA_hJWtIpvp0TxX9Rbd7arcQlF2ReG-Og",
  authDomain: "auth-moha-milon-4793c.firebaseapp.com",
  projectId: "auth-moha-milon-4793c",
  storageBucket: "auth-moha-milon-4793c.appspot.com",
  messagingSenderId: "1062989889186",
  appId: "1:1062989889186:web:b28be39a409007d91a61fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;