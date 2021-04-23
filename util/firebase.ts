import firebase from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBEctGsLYCLQXQF2Se4w5V_F1iELR2Z9I0",
  projectId: "hackathon-cba40",
  authDomain: "hackathon-cba40.firebaseapp.com",
  databaseURL: "https://hackathon-cba40-default-rtdb.firebaseio.com",
  storageBucket: "hackathon-cba40.appspot.com",
  messagingSenderId: "1072231438620",
  appId: "1:1072231438620:web:22ed9bbfae0a324aa102d9",
  measurementId: "G-D50FQNDVMJ",
};

const initFirebase = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
};

initFirebase();

export { firebase };
