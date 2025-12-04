// firebase-config.js
// Replace the values inside firebaseConfig with your Firebase project values
export const firebaseConfig = {
  apiKey: "AIzaSyAJnlrtazUWr_HjQiEkFNcbnsve73g1pEQ",
  authDomain: "smart-opd-69488.firebaseapp.com",
  projectId: "smart-opd-69488",
  storageBucket: "smart-opd-69488.firebasestorage.app",
  messagingSenderId: "373276983810",
  appId: "1:373276983810:web:a4b8808e566d81150d1d1b"
  measurementId: "G-PN4RQWNCS9"
};

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
