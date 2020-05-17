import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCjlp7Fy_LeyNkDOD_1H1APCSCYoZTnxso",
    authDomain: "crwn-db-7ae5a.firebaseapp.com",
    databaseURL: "https://crwn-db-7ae5a.firebaseio.com",
    projectId: "crwn-db-7ae5a",
    storageBucket: "crwn-db-7ae5a.appspot.com",
    messagingSenderId: "221864406630",
    appId: "1:221864406630:web:03d21e7df8849a8996c7a7",
    measurementId: "G-QRJRF98V6T"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {

    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){

      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try{

        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })

      }catch(error){
        console.log('error creating the user', error.message)
      }

    }

    return userRef;
  }

  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;