// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// import firebase from 'firebase'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBCqBD_w3D_yiV2w63rlLoH8ZSqRPS-wCM",
    authDomain: "gallery-360-africa.firebaseapp.com",
    projectId: "gallery-360-africa",
    storageBucket: "gallery-360-africa.appspot.com",
    messagingSenderId: "977191750253",
    appId: "1:977191750253:web:e904658e10a43b0e5fcd64",
    measurementId: "G-XDXYJT7HBJ",
  };

// Initialize Firebase
// let app;

// if (firebase.apps.length === 0){
//   app = firebase.initializeApp(firebaseConfig)
// }else{
//   app = firebase.app()
// }


const app = initializeApp(firebaseConfig);  
//const analytics = getAnalytics(app);

// const firestore = firebase.firestore()
// const auth = firebase.auth()
const db = getFirestore(app)
const auth = getAuth(app)
export {db,auth}