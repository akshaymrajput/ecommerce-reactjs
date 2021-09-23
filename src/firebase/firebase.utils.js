import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDRyzhlW0so9d5_2wmmEIShZYNOUIlYKbU",
    authDomain: "ecommerce-reactjs-db-da135.firebaseapp.com",
    projectId: "ecommerce-reactjs-db-da135",
    storageBucket: "ecommerce-reactjs-db-da135.appspot.com",
    messagingSenderId: "1032779943112",
    appId: "1:1032779943112:web:966f0555a0134ffe9ae9fd",
    measurementId: "G-Q83MV0KNJ5"
  };

  // Initialize Firebase
  initializeApp(firebaseConfig)

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ params: 'select_account' });
  
  export const firestore = getFirestore();
  export const auth = getAuth();

  export const signInWithGoogle = () => signInWithPopup(auth, provider)
  .catch((error) => {
    // Handle errors here
    const errorCode = error.code
    const errorMessage = error.message
    // The email of the user's account used
    const email = error.email
    // The AuthCredential type that was used
    const credential = GoogleAuthProvider.credentialFromError(error)
    // Do whatever to handle error
    console.log({
      errorCode,
      errorMessage,
      email,
      credential
    })
  })
 

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = doc(firestore, `users/${userAuth.uid}`);

  const snapShot = await getDoc(userRef);
  
  if(!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try{
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
}



