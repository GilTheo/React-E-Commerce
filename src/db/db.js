import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()

export default db