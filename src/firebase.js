import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCIUEUaD0O7HIt-sMvXXxAPtffLvIynJro",
  authDomain: "instagram-clone-2e87e.firebaseapp.com",
  projectId: "instagram-clone-2e87e",
  storageBucket: "instagram-clone-2e87e.appspot.com",
  messagingSenderId: "802381649890",
  appId: "1:802381649890:web:be80a504de4d9a93dd0bbb",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
