import firebase from "firebase";

const firebaseConfig = {
  /*

  YOUR FIREBASE CONFIG SETUP
  
  */
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
