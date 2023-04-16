import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"; //Authentication için
import {getFirestore} from "firebase/firestore"; //Firestore

const firebaseConfig = {
    apiKey: "AIzaSyDn-ifUqPTkqf2-GHOZ7pt_K0-uc18n6XQ",
    authDomain: "mesaj-app-18eb7.firebaseapp.com",
    projectId: "mesaj-app-18eb7",
    storageBucket: "mesaj-app-18eb7.appspot.com",
    messagingSenderId: "785128929232",
    appId: "1:785128929232:web:d171ed69d0aedbf03b6bd5"
};

 const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
 export const db= getFirestore(app); //firestore yerine db yazdık