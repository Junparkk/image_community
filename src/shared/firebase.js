import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDMj5vvF_eimVZvdB1OqDuIoFREcpNk_fQ",
  authDomain: "image-community-4fcd2.firebaseapp.com",
  projectId: "image-community-4fcd2",
  storageBucket: "image-community-4fcd2.appspot.com",
  messagingSenderId: "650768601285",
  appId: "1:650768601285:web:4e7f93d9b9e83a4d91e0ac",
  measurementId: "G-5DEK0EZKS3",
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();

export { auth, apiKey, firestore, storage };
