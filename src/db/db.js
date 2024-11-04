import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDTzKc9_FJqzVpNGW0iCxfyYq-zgGijWYA",
  authDomain: "ecommerce-coder-c1263.firebaseapp.com",
  projectId: "ecommerce-coder-c1263",
  storageBucket: "ecommerce-coder-c1263.appspot.com",
  messagingSenderId: "344143062998",
  appId: "1:344143062998:web:d5ff5bc44c9550d4f4e677"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()

export default db