import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCth6PUOC6OztasCWzFvBf-x7j97iT9jyQ",
    authDomain: "twitter-clone-e2812.firebaseapp.com",
    databaseURL: "https://twitter-clone-e2812.firebaseio.com",
    projectId: "twitter-clone-e2812",
    storageBucket: "twitter-clone-e2812.appspot.com",
    messagingSenderId: "610035071691",
    appId: "1:610035071691:web:c3a21263a2dccc5622b94e",
    measurementId: "G-B7MC7G18CZ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;