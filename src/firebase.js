import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCFo0C1xXsYIjmbtljtuFiLsnJ9OozDYxM",
  authDomain: "socialband-5a62b.firebaseapp.com",
  projectId: "socialband-5a62b",
  storageBucket: "socialband-5a62b.appspot.com",
  messagingSenderId: "929236212464",
  appId: "1:929236212464:web:a25de6af4a5174ce288035",
  measurementId: "G-VKQKJY4677"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)