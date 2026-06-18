// progress.js
// Reads and writes user progress (xp, streak, completed lessons) in Firestore.

import { db } from "./firebase-config.js";
import {
  doc,
  getDoc,
  updateDoc,
  arrayUnion
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

export async function getUserProgress(uid) {
  const ref = doc(db, "users", uid);
  const snap = await getDoc(ref);
  if (!snap.exists()) {
    return { xp: 0, streak: 0, lastActiveDate: null, completedLessons: [] };
  }
  return snap.data();
}

// Returns today's date as YYYY-MM-DD in the user's local timezone.
function todayString() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function yesterdayString() {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

// Calculates the new streak value based on last active date.
function computeNewStreak(currentStreak, lastActiveDate) {
  const today = todayString();
  if (lastActiveDate === today) {
    // Already practiced today — streak unchanged.
    return currentStreak;
  }
  if (lastActiveDate === yesterdayString()) {
    // Practiced yesterday — streak continues.
    return currentStreak + 1;
  }
  // Missed a day (or first time ever) — streak restarts at 1.
  return 1;
}

// Call when a user completes a lesson. Awards XP, updates streak,
// and records the lesson as completed.
export async function completeLesson(uid, lessonId, xpReward) {
  const ref = doc(db, "users", uid);
  const current = await getUserProgress(uid);

  const newStreak = computeNewStreak(current.streak || 0, current.lastActiveDate || null);
  const newXp = (current.xp || 0) + xpReward;

  await updateDoc(ref, {
    xp: newXp,
    streak: newStreak,
    lastActiveDate: todayString(),
    completedLessons: arrayUnion(lessonId)
  });

  return { xp: newXp, streak: newStreak };
}
