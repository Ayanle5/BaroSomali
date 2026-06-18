// dashboard-page.js
// Guards the dashboard behind auth, loads user progress, and renders the lesson path.

import { watchAuthState, logOut } from "./auth.js";
import { getUserProgress } from "./progress.js";
import { lessons } from "../lessons/lesson-1.js";

const loadingEl = document.getElementById("dashboard-loading");
const contentEl = document.getElementById("dashboard-content");
const xpValueEl = document.getElementById("xp-value");
const streakValueEl = document.getElementById("streak-value");
const lessonPathEl = document.getElementById("lesson-path");

document.getElementById("logout-btn").addEventListener("click", async () => {
  await logOut();
  window.location.href = "index.html";
});

function renderLessonPath(progress) {
  const completed = progress.completedLessons || [];
  lessonPathEl.innerHTML = "";

  lessons.forEach((lesson, index) => {
    const isCompleted = completed.includes(lesson.id);
    // A lesson is unlocked if it's the first lesson, or the previous lesson is completed.
    const isUnlocked = index === 0 || completed.includes(lessons[index - 1].id);

    let stateClass = "locked";
    if (isCompleted) stateClass = "completed";
    else if (isUnlocked) stateClass = "unlocked";

    const node = document.createElement("div");
    node.className = "lesson-node";

    const btn = document.createElement("button");
    btn.className = `lesson-node-btn ${stateClass}`;
    btn.innerHTML = `<span class="star"></span>`;
    btn.disabled = stateClass === "locked";
    btn.setAttribute("aria-label", `${lesson.title} — ${stateClass}`);

    if (stateClass !== "locked") {
      btn.addEventListener("click", () => {
        window.location.href = `lesson.html?id=${lesson.id}`;
      });
    }

    const label = document.createElement("div");
    label.className = "lesson-node-label";
    label.textContent = lesson.title;

    const desc = document.createElement("div");
    desc.className = "lesson-node-desc";
    desc.textContent = stateClass === "locked" ? "Locked" : lesson.description;

    node.appendChild(btn);
    node.appendChild(label);
    node.appendChild(desc);
    lessonPathEl.appendChild(node);
  });
}

watchAuthState(async (user) => {
  if (!user) {
    window.location.href = "index.html";
    return;
  }

  const progress = await getUserProgress(user.uid);
  xpValueEl.textContent = progress.xp || 0;
  streakValueEl.textContent = progress.streak || 0;
  renderLessonPath(progress);

  loadingEl.classList.add("hidden");
  contentEl.classList.remove("hidden");
});
