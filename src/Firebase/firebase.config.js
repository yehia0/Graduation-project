// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhkdalNpjeEopSZYN_bjGk3cwTuGv2ZF0",
  authDomain: "vulnera-scan.firebaseapp.com",
  projectId: "vulnera-scan",
  storageBucket: "vulnera-scan.appspot.com",
  messagingSenderId: "841800331866",
  appId: "1:841800331866:web:ce166df0838f97eefdde63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;