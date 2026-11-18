// SSC MATE - Firebase config (index.html aur admin.html dono isi ko use karte hain)
import {initializeApp} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {getFirestore} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import {getAuth} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

/* 1) Firebase Console > Project settings > Your apps > Web app se config yahan paste karo */
const firebaseConfig = {
  apiKey: "AIzaSyA4QTpdBvip1L-RvVEp5IR-tUn4ZQw9UxY",
  authDomain: "sikshapath-education.firebaseapp.com",
  databaseURL: "https://sikshapath-education-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sikshapath-education",
  storageBucket: "sikshapath-education.firebasestorage.app",
  messagingSenderId: "274162437758",
  appId: "1:274162437758:web:e153b0eba458598533522f"
};

/* 2) Sirf yahi email admin panel me ja sakti hai (Firebase Authentication me ye user banao) */
export const ADMIN_EMAIL = "admin@example.com";

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

// SSC MATE - Firebase config (index.html aur admin.html dono isi ko use karte hain)
import {initializeApp} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {getFirestore} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import {getAuth} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

/* 1) Firebase Console > Project settings > Your apps > Web app se config yahan paste karo */
const firebaseConfig = {
  apiKey: "AIzaSyA4QTpdBvip1L-RvVEp5IR-tUn4ZQw9UxY",
  authDomain: "sikshapath-education.firebaseapp.com",
  databaseURL: "https://sikshapath-education-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sikshapath-education",
  storageBucket: "sikshapath-education.firebasestorage.app",
  messagingSenderId: "274162437758",
  appId: "1:274162437758:web:e153b0eba458598533522f"
};

/* 2) Sirf yahi email admin panel me ja sakti hai (Firebase Authentication me ye user banao) */
export const ADMIN_EMAIL = "admin@example.com";

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
