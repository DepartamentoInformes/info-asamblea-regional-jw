import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "",
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "",
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "",
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "",
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "",
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "",
// };
const firebaseConfig = {
  apiKey: "AIzaSyAKY2cV4n3KUGqbzv2Q_NBPI6TPF4OBcts",
  authDomain: "informes-asamblea.firebaseapp.com",
  projectId: "informes-asamblea",
  storageBucket: "informes-asamblea.firebasestorage.app",
  messagingSenderId: "401858524203",
  appId: "1:401858524203:web:9ed86803b01f24d181a66e",
  measurementId: "G-37JBJNTHKD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);