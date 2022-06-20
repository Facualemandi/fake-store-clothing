import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBP0ESeWws-FxP8Lf_02_PUq7x3EavJ3sc",
  authDomain: "fake-store-commerce-b9d7f.firebaseapp.com",
  databaseURL: "https://fake-store-commerce-b9d7f-default-rtdb.firebaseio.com",
  projectId: "fake-store-commerce-b9d7f",
  storageBucket: "fake-store-commerce-b9d7f.appspot.com",
  messagingSenderId: "971702323280",
  appId: "1:971702323280:web:7ef1fe2c6db0da93cca955",
};



const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
