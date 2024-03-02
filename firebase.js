// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD37Q-ifPlpj8k8h_OOoPLlCU3xSSvt__c",
  authDomain: "whatshappy-28363.firebaseapp.com",
  projectId: "whatshappy-28363",
  storageBucket: "whatshappy-28363.appspot.com",
  messagingSenderId: "539013684167",
  appId: "1:539013684167:web:5ef222512a28f4063117e2",
  measurementId: "G-S2L13ZR0N4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);