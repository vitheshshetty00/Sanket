import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import 'firebase/compat/firestore';

const firebaseConfig = {

  apiKey: "AIzaSyBtWomUHxl5ZpJjKWGBxsglDulB3u5meRY",

  authDomain: "sign-language-ai-1d7e4.firebaseapp.com",

  projectId: "sign-language-ai-1d7e4",

  storageBucket: "sign-language-ai-1d7e4.appspot.com",

  messagingSenderId: "708724597887",

  appId: "1:708724597887:web:50b07ad5f0f7c91f970b4a"

};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { firebase, auth, db};

