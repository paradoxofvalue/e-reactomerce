import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyA-66LqpSBEDhEHVAjX4w_5XyHaLtz8Obk",
  authDomain: "e-reactomerce.firebaseapp.com",
  databaseURL: "https://e-reactomerce.firebaseio.com",
  projectId: "e-reactomerce",
  storageBucket: "e-reactomerce.appspot.com",
  messagingSenderId: "1059545175554",
  appId: "1:1059545175554:web:5a912599c4ee51e4efb91b",
  measurementId: "G-Z2PYBM3P69"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;