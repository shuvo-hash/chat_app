// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyALdhxSxbL1L8-WVqjL1aJK38ZdXNPXwYU",
  authDomain: "whatsapp-clone-87325.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-87325-default-rtdb.firebaseio.com",
  projectId: "whatsapp-clone-87325",
  storageBucket: "whatsapp-clone-87325.appspot.com",
  messagingSenderId: "922308796026",
  appId: "1:922308796026:web:1222bf42d224861e97e5c3",
  measurementId: "G-N7T4RFM11T"
};
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider};
  export default db;