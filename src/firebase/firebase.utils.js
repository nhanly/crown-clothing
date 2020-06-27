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

class Services {
    internalServices = {
        initGoogleAuthProvider() {
            const provider = new firebase.auth.GoogleAuthProvider();

            provider.setCustomParameters({ prompt: "select_account" });

            return provider;
        },
    };

    externalServices = {};
}

firebase.initializeApp(config);

const services = new Services();
const provider = services.internalServices.initGoogleAuthProvider();

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) {
        return;
    }

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;

        try {
            await userRef.set({
                displayName,
                email,
                createdAt: new Date(),
                ...additionalData,
            });
        } catch (error) {
            console.log("Error creating user", error.message);
        }
    }

    return userRef;
};

export default firebase;
