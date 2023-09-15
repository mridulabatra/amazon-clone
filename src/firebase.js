import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAkqYDMJEiIQwVRvWhgzy0HMrYLbbnkk4I",
    authDomain: "clone-ec612.firebaseapp.com",
    projectId: "clone-ec612",
    storageBucket: "clone-ec612.appspot.com",
    messagingSenderId: "744807557035",
    appId: "1:744807557035:web:15a7a4bc277be800f1d4ee",
    measurementId: "G-9N1NRRY9PM"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth};