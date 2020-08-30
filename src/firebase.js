import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD2TuSxsOr-AhYRZVeyMdZzbiL31lEvqfU",
  authDomain: "whatsapp-clone-app-94ee4.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-app-94ee4.firebaseio.com",
  projectId: "whatsapp-clone-app-94ee4",
  storageBucket: "whatsapp-clone-app-94ee4.appspot.com",
  messagingSenderId: "943084769189",
  appId: "1:943084769189:web:5d8f80b93d784e4eec224c",
  measurementId: "G-PR7VW118SC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
