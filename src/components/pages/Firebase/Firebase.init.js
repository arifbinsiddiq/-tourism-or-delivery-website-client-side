import { initializeApp } from "firebase/app";
import firebaseConfig from "../Firebase/Firebase.config";

const firebaseAuthentication = () =>{
    initializeApp(firebaseConfig);
}

export default firebaseAuthentication;