import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC4Lr0mhcHD5abvIOExR1QpnbfgonWF5Jk",
    authDomain: "haridi-blog.firebaseapp.com",
    projectId: "haridi-blog",
    storageBucket: "haridi-blog.appspot.com",
    messagingSenderId: "558179989493",
    appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
