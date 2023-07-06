// import { initializeApp } from "firebase/app";
// import {getAuth} from "firebase/auth";
// import { GoogleAuthProvider } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCJAV2RkyBc_X7lkzVb_1MIAgKBkBtyEL8",
  authDomain: "hotstar-clone-19612.firebaseapp.com",
  projectId: "hotstar-clone-19612",
  storageBucket: "hotstar-clone-19612.appspot.com",
  messagingSenderId: "359130218015",
  appId: "1:359130218015:web:2158a727cbf3d9a0301f2a",
  measurementId: "G-3G2BSPBQ88",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { storage, auth, provider };
export default db;
