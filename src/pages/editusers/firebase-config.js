import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCxQq6zWFkbDR8Ys0GSWylVqL7C4aUMtwE",
    authDomain: "ecomm-web-database.firebaseapp.com",
    projectId: "ecomm-web-database",
    storageBucket: "ecomm-web-database.appspot.com",
    messagingSenderId: "247863962961",
    appId: "1:247863962961:web:28ab3390f3612d58d53770",
    measurementId: "G-X60R4QG597"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);