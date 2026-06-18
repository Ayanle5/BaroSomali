// auth.js
// Handles signup, login, logout, and auth state changes using Firebase Auth.
// Also creates a Firestore user-progress document on first signup.

import { auth, db } from "./firebase-config.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import {
  doc,
  setDoc,
  getDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Creates the initial progress document for a new user.
async function createUserProgressDoc(user) {
  const userRef = doc(db, "users", user.uid);
  const existing = await getDoc(userRef);
  if (!existing.exists()) {
    await setDoc(userRef, {
      email: user.email,
      xp: 0,
      streak: 0,
      lastActiveDate: null,
      completedLessons: [],
      createdAt: serverTimestamp()
    });
  }
}

export async function signUp(email, password) {
  const credential = await createUserWithEmailAndPassword(auth, email, password);
  await createUserProgressDoc(credential.user);
  return credential.user;
}

export async function logIn(email, password) {
  const credential = await signInWithEmailAndPassword(auth, email, password);
  return credential.user;
}

export async function logOut() {
  await signOut(auth);
}

// Calls callback(user) whenever auth state changes (user logs in/out, or on page load).
export function watchAuthState(callback) {
  onAuthStateChanged(auth, callback);
}

// Friendly error messages for common Firebase Auth error codes.
export function friendlyAuthError(error) {
  const code = error.code || "";
  const map = {
    "auth/email-already-in-use": "That email is already registered. Try logging in instead.",
    "auth/invalid-email": "That doesn't look like a valid email address.",
    "auth/weak-password": "Password should be at least 6 characters.",
    "auth/user-not-found": "No account found with that email.",
    "auth/wrong-password": "Incorrect password. Try again.",
    "auth/invalid-credential": "Incorrect email or password.",
    "auth/too-many-requests": "Too many attempts. Please wait a moment and try again."
  };
  return map[code] || "Something went wrong. Please try again.";
}
