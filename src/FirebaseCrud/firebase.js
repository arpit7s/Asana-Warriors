import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAdkHxsg9D_-SyZaDqvW7mYXqjYlNamVro",
  authDomain: "pscques.firebaseapp.com",
  projectId: "pscques",
  // storageBucket: "pscques.firebasestorage.app",
  storageBucket: "pscques.appspot.com",
  messagingSenderId: "923380240043",
  appId: "1:923380240043:web:8ec37cb79c292e3b3131ee",
};

// const app = initializeApp(firebaseConfig);
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
