import firebase from "firebase/app";
import "firebase/auth";

import config from "./config";

function getFirebase() {
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

  return firebase;
}

export default getFirebase;
