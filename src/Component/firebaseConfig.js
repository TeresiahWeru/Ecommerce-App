import firebase from 'firebase/compat/app';
import {collection, addDoc} from './firebaseConfig'

const firebaseConfig = {
    apiKey: "AIzaSyBx-QDg1QDFvGd3c9NWz2mag2v2NxN9B84",
    authDomain: "e-commerce-project-45f92.firebaseapp.com",
    databaseURL: "https://e-commerce-project-45f92-default-rtdb.firebaseio.com",
    projectId: "e-commerce-project-45f92",
    storageBucket: "e-commerce-project-45f92.appspot.com",
    messagingSenderId: "51154585925",
    appId: "1:51154585925:web:9c8309f2f8c7d20bdb562c"
  };

  const app = firebase.initializeApp(firebaseConfig);
  export const db = firebase.firestore();