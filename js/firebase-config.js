// firebase-config.js
// Initializes Firebase App, Auth, and Firestore.
// Replace the placeholder values below with your real Firebase project config
// (Firebase Console > Project Settings > General > Your apps > SDK setup and config).

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCjB-bL7NoQzyIZ9Y0eA5EdHgQgsTQZeDU",
  authDomain: "barosomali-438dd.firebaseapp.com",
  projectId: "barosomali-438dd",
  storageBucket: "barosomali-438dd.firebasestorage.app",
  messagingSenderId: "649615790890",
  appId: "1:649615790890:web:5d30f5bb872b62c42e8453",
  measurementId: "G-X28SLBD0KM"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
