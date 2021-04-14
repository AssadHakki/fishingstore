import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
 
import {firebaseConfig} from './config';

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const GoogleProvider = new firebase.auth.GoogleAuthProvider();
GoogleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(GoogleProvider);

 // handleUserProfile it takes userAuth and check if it's exist on the database or not  
export const handleUserProfile = async (userAuth, additionalData) => {
    // checking if the user exist on DB
    if(!userAuth) return;   
    const { uid } = userAuth;

    const userRef = firestore.doc(`users/${uid}`);
    const snapshot =await userRef.get();

    if (!snapshot.exists) {   //if the user doesnt exists
        const { displayName, email } = userAuth;
        const timestamp = new Date();

        //we register him by creating a new document 
        try {
            await userRef.set({
                displayName,
                email,
                createdDate: timestamp,
                ...additionalData
            });
        } catch(err) {
            //console.log(err);
        }

    }
    return userRef; // return the user document and informations
};