import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
// firebase init
function firebaseInitialize() {
  initializeApp(firebaseConfig);
}

export default firebaseInitialize;
