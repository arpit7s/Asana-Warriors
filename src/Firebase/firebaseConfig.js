import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBBXg98iQT9chxPBuHSD7uEZ0U_LKxmT88",
    authDomain: "yoga-app-ab988.firebaseapp.com",
    projectId: "yoga-app-ab988",
    storageBucket: "yoga-app-ab988.firebasestorage.app",
    messagingSenderId: "834840981177",
    appId: "1:834840981177:web:77ff44d55b6f35c027b568",
    measurementId: "G-13EBJBK5G8"
  };

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
