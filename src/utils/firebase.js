import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
firebase.initializeApp({
  apiKey: "AIzaSyAOY4bJYmRIQt683ibM0KcvWQWp5sS1cM0",
  // databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: "lunchlearnjs",
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET
});
firebase.firestore().settings({ experimentalForceLongPolling: true });

export default firebase;
