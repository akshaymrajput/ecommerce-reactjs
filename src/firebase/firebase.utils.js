import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
 
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
initializeApp(firebaseConfig);
 
export const auth = getAuth();
export const firestore = getFirestore();
 
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ params: 'select_account' });
export const signInWithGoogle = () => signInWithPopup(auth, provider);

// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';

// const config = {
//         apiKey: "AIzaSyDRyzhlW0so9d5_2wmmEIShZYNOUIlYKbU",
//         authDomain: "ecommerce-reactjs-db-da135.firebaseapp.com",
//         projectId: "ecommerce-reactjs-db-da135",
//         storageBucket: "ecommerce-reactjs-db-da135.appspot.com",
//         messagingSenderId: "1032779943112",
//         appId: "1:1032779943112:web:966f0555a0134ffe9ae9fd",
//         measurementId: "G-Q83MV0KNJ5"
//       };

// firebase.initializeApp(config);

// export const auth = firebase.auth();
// export const firestore = firebase.firestore();

// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: 'select_account' });
// export const signInWithGoogle = () => auth.signInWithPopup(provider);

// export default firebase;





