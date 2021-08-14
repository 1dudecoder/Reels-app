import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"


var firebaseConfig = {
    apiKey: "AIzaSyBeNg5HyY6tv_rh-vUfCr4U3-YG3MEfV-Q",
    authDomain: "learningfirebase-688f1.firebaseapp.com",
    projectId: "learningfirebase-688f1",
    storageBucket: "learningfirebase-688f1.appspot.com",
    messagingSenderId: "906551655288",
    appId: "1:906551655288:web:1708b14c41ae71a06ba68d"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

 export const firestore = firebase.firestore();

 export const auth = firebase.auth();

 let provider = new firebase.auth.GoogleAuthProvider()

 export const signInWithGoogle = ()=> auth.signInWithPopup(provider)

 export default firebase;