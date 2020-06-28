// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBEbvNcfOdtdkRthu215Pr47h83xRsuPRA",
  authDomain: "burger-app-6b068.firebaseapp.com",
  databaseURL: "https://burger-app-6b068.firebaseio.com",
  projectId: "burger-app-6b068",
  storageBucket: "burger-app-6b068.appspot.com",
  messagingSenderId: "511184133699",
  appId: "1:511184133699:web:e9ded889843412e9d27ef6",
  measurementId: "G-QV5SBG99WV"
};

firebase.initializeApp(firebaseConfig);

export default firebase;