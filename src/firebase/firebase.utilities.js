import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCyTmtr4EeFJvmNDl1DPmknzC9GsTC21F8",
    authDomain: "basketballshop-666ce.firebaseapp.com",
    projectId: "basketballshop-666ce",
    storageBucket: "basketballshop-666ce.appspot.com",
    messagingSenderId: "246242495048",
    appId: "1:246242495048:web:2f01e8e277202e6446267d",
    measurementId: "G-103YPN1D81"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//   Google authorization
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
