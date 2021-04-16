import firebase from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBEctGsLYCLQXQF2Se4w5V_F1iELR2Z9I0",
  projectId: "hackathon-cba40",
  authDomain: "hackathon-cba40.firebaseapp.com",
};

const initFirebase = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
};

initFirebase();

export { firebase };
