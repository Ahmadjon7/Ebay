import firebase from 'firebase/app'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyBFycGg-zFwah4_NYdhtdKzGnCLXA2XMaU",
    authDomain: "ebay-862d7.firebaseapp.com",
    projectId: "ebay-862d7",
    storageBucket: "ebay-862d7.appspot.com",
    messagingSenderId: "995018656161",
    appId: "1:995018656161:web:c6bf99b0f4c7883555a3e0",
    measurementId: "G-1Q5KJK2E6Y"
  };

  const server = firebase.initializeApp(firebaseConfig);
  const auth = server.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export {auth , provider};