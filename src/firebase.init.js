// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwxVeYXFCnVpfUcGgmr7jIx1_BGzBxyXU",
  authDomain: "simple-login-auth-eff72.firebaseapp.com",
  projectId: "simple-login-auth-eff72",
  storageBucket: "simple-login-auth-eff72.appspot.com",
  messagingSenderId: "419460799581",
  appId: "1:419460799581:web:7d736bac17b673cc3c41b4",
  measurementId: "G-P09K0H71M1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;