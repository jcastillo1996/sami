/* eslint-disable import/prefer-default-export */
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyClu8ND4AobMUnHijaD49bYmyolNBCk3YA',
  authDomain: 'sami-app-6acdd.firebaseapp.com',
  projectId: 'sami-app-6acdd',
  storageBucket: 'sami-app-6acdd.appspot.com',
  messagingSenderId: '9783241207',
  appId: '1:9783241207:web:53546ae3b745ea5bf2a6f2',
};

// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();
export const auth = fb.auth();
