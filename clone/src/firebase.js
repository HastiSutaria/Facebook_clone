import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyCWxveQyMhXc3W6E0Moc7zq22uMhY0Ss3k",
    authDomain: "fb-clone-d2416.firebaseapp.com",
    projectId: "fb-clone-d2416",
    storageBucket: "fb-clone-d2416.appspot.com",
    messagingSenderId: "325237182323",
    appId: "1:325237182323:web:de22079131d5bb29817f06",
    measurementId: "G-24RSJ7WJ2C"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }
export default db
