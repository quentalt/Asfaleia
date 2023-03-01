import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// Optionally import the services that you want to use
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// Initialize Firebase
 const firebaseConfig = {

    apiKey: "AIzaSyBG3qoLeqKVX5jexfmhMI7qaR_5MdMOxww",

    authDomain: "asfaleia-e4124.firebaseapp.com",

    projectId: "asfaleia-e4124",

    storageBucket: "asfaleia-e4124.appspot.com",

    messagingSenderId: "278681173287",

    appId: "1:278681173287:web:c184f162bf67c255bd3d02",

    measurementId: "G-VDNCMCZ1Y0"

};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
