import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBuF_KWoxn3fF0WY0zHPWgI8GsV8yh1pZg',
  authDomain: 'react-journal-app-2b074.firebaseapp.com',
  projectId: 'react-journal-app-2b074',
  storageBucket: 'react-journal-app-2b074.appspot.com',
  messagingSenderId: '306283528546',
  appId: '1:306283528546:web:46a8cdd03cfa75375fac3b',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    firebase, 
    db,
    googleAuthProvider
}