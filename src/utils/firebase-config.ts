
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBmv3kkI8bi2vj1NmEK3OsX3qzMeZub8KI",
  authDomain: "netflixclone-83ec9.firebaseapp.com",
  projectId: "netflixclone-83ec9",
  storageBucket: "netflixclone-83ec9.appspot.com",
  messagingSenderId: "414505564962",
  appId: "1:414505564962:web:f5b9de3b20e0acba05037b",
  measurementId: "G-WKMM5JFKGJ"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);