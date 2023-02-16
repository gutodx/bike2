import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBcZwB27AQEqcTLfJOBZjMYVraOlB5miC0",
  authDomain: "bicicleta-5b1ab.firebaseapp.com",
  projectId: "bicicleta-5b1ab",
  storageBucket: "bicicleta-5b1ab.appspot.com",
  messagingSenderId: "1049251838298",
  appId: "1:1049251838298:web:449e4b9866e63b6dc9db63"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
