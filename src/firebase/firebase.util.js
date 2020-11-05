import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyA3ntTK1TuOLkCvV-Yb7t5jH6M-Q-o1o9M",
    authDomain: "bluemoon-81a3a.firebaseapp.com",
    databaseURL: "https://bluemoon-81a3a.firebaseio.com",
    projectId: "bluemoon-81a3a",
    storageBucket: "bluemoon-81a3a.appspot.com",
    messagingSenderId: "606613585180",
    appId: "1:606613585180:web:6cd888dfe80e7a49388ed9",
    measurementId: "G-QJ5S3ZQZQP"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const  firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt:'select_account'});


  export const createUserProfile = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists) {
      const {displayName, email} = userAuth;
      const createAt = new Date();
      
      try {
        await userRef.set({
          displayName,
          email,
          createAt,
          ...additionalData
        })
      } catch (error) {
        console.log('userProfile not created error');
      }
    }

    return userRef;
  }

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;