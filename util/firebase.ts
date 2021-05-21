import firebase from "firebase/app";
import "firebase/auth";

const config = {
   apiKey: "AIzaSyDSHi3DZfaHQ8NufG8fMvelbzUrrC6t-HE",
    authDomain: "hackathon2-901e8.firebaseapp.com",
    projectId: "hackathon2-901e8",
    storageBucket: "hackathon2-901e8.appspot.com",
    messagingSenderId: "732442230061",
    appId: "1:732442230061:web:db09c11fa3519ffcdbe7a4",
    measurementId: "G-SLRCBX2V5E",
};

const initFirebase = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
};

initFirebase();

export { firebase };
