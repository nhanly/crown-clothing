import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyAQU1zxZUh9-biodkTZCULfEZpNxt63Xsw",
    authDomain: "crown-db-1710.firebaseapp.com",
    databaseURL: "https://crown-db-1710.firebaseio.com",
    projectId: "crown-db-1710",
    storageBucket: "crown-db-1710.appspot.com",
    messagingSenderId: "316268783935",
    appId: "1:316268783935:web:255a5dda5ba64d2e134b8a",
    measurementId: "G-H3SEFDYGGL",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
