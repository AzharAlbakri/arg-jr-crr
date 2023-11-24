
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
    apiKey: "AIzaSyC12bWVMCsDeOmrS3L-1G6cpkpXMQTFhR4",
    authDomain: "agr-ju-crr.firebaseapp.com",
    projectId: "agr-ju-crr",
    storageBucket: "agr-ju-crr.appspot.com",
    messagingSenderId: "493898884068",
    appId: "1:493898884068:web:721f6629e16e4a6dc31df1",
    measurementId: "G-LRWE64B09F"
  };

  const app = initializeApp(config);

export const db = getFirestore(app);