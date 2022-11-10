import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAOiodo92QThGZxHNP9QIBhbpGu_rFJXJg",
  authDomain: "brazunadev.firebaseapp.com",
  projectId: "brazunadev",
  storageBucket: "brazunadev.appspot.com",
  messagingSenderId: "174411038836",
  appId: "1:174411038836:web:9af8be1cc4872418fcd121",
  measurementId: "G-JM2S10RC8L"
};

const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)

export { db, auth }

