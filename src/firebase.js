import {initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAonZhYf3-r7TtjY_SYIfHjVESOpARjCmY",
    authDomain: "netflix-clone-portfolio-aebe3.firebaseapp.com",
    projectId: "netflix-clone-portfolio-aebe3",
    storageBucket: "netflix-clone-portfolio-aebe3.appspot.com",
    messagingSenderId: "60999195997",
    appId: "1:60999195997:web:aeb256be6ae5971f855cb4"
  };

  const firebaseApp =initializeApp(firebaseConfig);
  // const db = firebaseApp.firestore()
  const auth = getAuth()

  export {auth}
  // export default db