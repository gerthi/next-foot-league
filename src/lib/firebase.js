import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: process.env.API_KEY,
  authDomain: "footleague-565ef.firebaseapp.com",
  databaseURL: "https://footleague-565ef.firebaseio.com",
  projectId: "footleague-565ef",
  storageBucket: "footleague-565ef.appspot.com",
  messagingSenderId: "851400288945",
  appId: "1:851400288945:web:d4c0c2c372423bdef71090",
};

const firebase = Firebase;

try {
  firebase.initializeApp(config);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack);
  }
}

export default firebase.firestore();
