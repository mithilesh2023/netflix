import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA0DQjbxTHDGihw9ztw8Fn2B3KPzVhNsuk",
  authDomain: "react-netflix-clone-6e2c9.firebaseapp.com",
  projectId: "react-netflix-clone-6e2c9",
  storageBucket: "react-netflix-clone-6e2c9.appspot.com",
  messagingSenderId: "777302772285",
  appId: "1:777302772285:web:0a24bfde1e22974dd73854",
  measurementId: "G-H41X317778"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth=getAuth(app)