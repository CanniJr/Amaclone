import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyAOgm2Ry8OxOte1kXcqdO27_-2KC3SgVYs",
    authDomain: "amaclone01.firebaseapp.com",
    projectId: "amaclone01",
    storageBucket: "amaclone01.appspot.com",
    messagingSenderId: "599033786107",
    appId: "1:599033786107:web:282346bca170a5f0c80a5e",
    measurementId: "G-WYYHWW3X3V"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };