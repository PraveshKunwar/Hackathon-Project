import firebase from "firebase";
import "firebase/auth";

require("dotenv").config();

const config = {
  apiKey: process.env.API_KEY,
  projectId: process.env.PROJECT_ID,
  authDomain: process.env.DOMAIN,
};

(async () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
})();

export { firebase };
