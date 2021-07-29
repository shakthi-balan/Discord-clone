import firebase from "firebase";



const firebaseConfig = {
    apiKey: "AIzaSyDhvq6DcaPQ00wsbI6hgxuEtC5pVwcokXs",
    authDomain: "discord-cfb2a.firebaseapp.com",
    projectId: "discord-cfb2a",
    storageBucket: "discord-cfb2a.appspot.com",
    messagingSenderId: "5709226143",
    appId: "1:5709226143:web:0e9959575b950eb14fc2aa",
    measurementId: "G-S48GB89M3N"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider }; //explicit imports
  export default db; //