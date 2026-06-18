// lesson-page.js
// Runs a lesson end-to-end: renders each exercise (choice / match / type),
// grades answers, shows feedback, advances through the lesson, and on
// completion writes XP/streak to Firestore then shows a summary screen.

import { watchAuthState } from "./auth.js";
import { completeLesson } from "./progress.js";
import { getLessonById } from "../lessons/lesson-1.js";

const lessonBody = document.getElementById("lesson-body");
const lessonLoading = document.getElementById("lesson-loading");
const progressFill = document.getElementById("progress-fill");
const feedbackBanner = document.getElementById("feedback-banner");
const feedbackText = document.getElementById("feedback-text");
const feedbackContinueBtn = document.getElementById("feedback-continue-btn");
const exitBtn = document.getElementById("lesson-exit-btn");

exitBtn.addEventListener("click", () => {
  window.location.href = "dashboard.html";
});

// ---- State ----
let currentUser = null;
let lesson = null;
let exerciseIndex = 0;
let correctCount = 0;

// Match-exercise temporary state (re-initialized per exercise render)
let matchState = null;

function getLessonIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

function updateProgressBar() {
  const pct = Math.round((exerciseIndex / lesson.exercises.length) * 100);
  progressFill.style.width = `${pct}%`;
}

function showFeedback(isCorrect, onContinue) {
  feedbackBanner.classList.remove("correct", "incorrect");
  feedbackBanner.classList.add(isCorrect ? "correct" : "incorrect", "show");
  feedbackText.textContent = isCorrect ? "Correct!" : "Not quite — keep going.";

  // Replace the continue handler each time to avoid stacking listeners.
  feedbackContinueBtn.onclick = () => {
    feedbackBanner.classList.remove("show");
    onContinue();
  };
}

function nextExercise() {
  exerciseIndex += 1;
  if (exerciseIndex >= lesson.exercises.length) {
    finishLesson();
  } else {
    renderExercise(lesson.exercises[exerciseIndex]);
  }
  updateProgressBar();
}

// ---- Render: Choice exercise ----
function renderChoiceExercise(exercise) {
  const card = document.createElement("div");
  card.className = "exercise-card";

  const prompt = document.createElement("h2");
  prompt.className = "exercise-prompt";
  prompt.textContent = exercise.prompt;

  const hint = document.createElement("p");
  hint.className = "exercise-hint";
  hint.textContent = exercise.hint || "";

  const grid = document.createElement("div");
  grid.className = "choice-grid";

  let answered = false;

  exercise.options.forEach((option) => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.textContent = option;

    btn.addEventListener("click", () => {
      if (answered) return;
      answered = true;

      const isCorrect = option === exercise.correctAnswer;
      const allBtns = grid.querySelectorAll(".choice-btn");
      allBtns.forEach((b) => (b.disabled = true));

      btn.classList.add(isCorrect ? "correct" : "incorrect");
      if (!isCorrect) {
        allBtns.forEach((b) => {
          if (b.textContent === exercise.correctAnswer) {
            b.classList.add("correct");
          }
        });
      }

      if (isCorrect) correctCount += 1;
      showFeedback(isCorrect, nextExercise);
    });

    grid.appendChild(btn);
  });

  card.appendChild(prompt);
  card.appendChild(hint);
  card.appendChild(grid);
  lessonBody.appendChild(card);
}

// ---- Render: Match exercise ----
function renderMatchExercise(exercise) {
  const card = document.createElement("div");
  card.className = "exercise-card";

  const prompt = document.createElement("h2");
  prompt.className = "exercise-prompt";
  prompt.textContent = exercise.prompt;

  const hint = document.createElement("p");
  hint.className = "exercise-hint";
  hint.textContent = exercise.hint || "";

  const grid = document.createElement("div");
  grid.className = "match-grid";

  const leftCol = document.createElement("div");
  leftCol.className = "match-col";
  const rightCol = document.createElement("div");
  rightCol.className = "match-col";

  // Shuffle right-side values so matching isn't trivially positional.
  const shuffledRights = exercise.pairs
    .map((p) => p.right)
    .sort(() => Math.random() - 0.5);

  matchState = {
    selectedLeft: null,
    selectedLeftEl: null,
    matchedPairsCount: 0,
    totalPairs: exercise.pairs.length,
    incorrectAttemptMade: false
  };

  exercise.pairs.forEach((pair) => {
    const leftEl = document.createElement("button");
    leftEl.className = "match-item";
    leftEl.textContent = pair.left;
    leftEl.dataset.value = pair.left;
    leftEl.dataset.correctRight = pair.right;

    leftEl.addEventListener("click", () => {
      if (leftEl.classList.contains("matched-correct")) return;
      // Deselect previous selection visual state
      leftCol.querySelectorAll(".match-item").forEach((el) => el.classList.remove("selected"));
      leftEl.classList.add("selected");
      matchState.selectedLeft = pair.left;
      matchState.selectedLeftEl = leftEl;
    });

    leftCol.appendChild(leftEl);
  });

  shuffledRights.forEach((rightValue) => {
    const rightEl = document.createElement("button");
    rightEl.className = "match-item";
    rightEl.textContent = rightValue;
    rightEl.dataset.value = rightValue;

    rightEl.addEventListener("click", () => {
      if (!matchState.selectedLeft || rightEl.classList.contains("matched-correct")) return;

      const leftEl = matchState.selectedLeftEl;
      const isCorrect = leftEl.dataset.correctRight === rightValue;

      if (isCorrect) {
        leftEl.classList.remove("selected");
        leftEl.classList.add("matched-correct");
        rightEl.classList.add("matched-correct");
        matchState.matchedPairsCount += 1;
        matchState.selectedLeft = null;
        matchState.selectedLeftEl = null;

        if (matchState.matchedPairsCount === matchState.totalPairs) {
          const allCorrect = !matchState.incorrectAttemptMade;
          if (allCorrect) correctCount += 1;
          setTimeout(() => showFeedback(allCorrect, nextExercise), 400);
        }
      } else {
        matchState.incorrectAttemptMade = true;
        rightEl.classList.add("matched-incorrect");
        leftEl.classList.add("matched-incorrect");
        setTimeout(() => {
          rightEl.classList.remove("matched-incorrect");
          leftEl.classList.remove("matched-incorrect", "selected");
        }, 500);
        matchState.selectedLeft = null;
        matchState.selectedLeftEl = null;
      }
    });

    rightCol.appendChild(rightEl);
  });

  grid.appendChild(leftCol);
  grid.appendChild(rightCol);
  card.appendChild(prompt);
  card.appendChild(hint);
  card.appendChild(grid);
  lessonBody.appendChild(card);
}

// ---- Render: Type exercise ----
function renderTypeExercise(exercise) {
  const card = document.createElement("div");
  card.className = "exercise-card";

  const prompt = document.createElement("h2");
  prompt.className = "exercise-prompt";
  prompt.textContent = exercise.prompt;

  const hint = document.createElement("p");
  hint.className = "exercise-hint";
  hint.textContent = exercise.hint || "";

  const input = document.createElement("input");
  input.type = "text";
  input.className = "type-input";
  input.autocomplete = "off";
  input.autocapitalize = "off";
  input.spellcheck = false;

  const submitBtn = document.createElement("button");
  submitBtn.className = "btn btn-primary";
  submitBtn.textContent = "Check";
  submitBtn.style.marginTop = "20px";
  submitBtn.style.display = "block";
  submitBtn.style.marginLeft = "auto";
  submitBtn.style.marginRight = "auto";

  let answered = false;

  function submitAnswer() {
    if (answered) return;
    answered = true;

    const normalize = (s) => s.trim().toLowerCase();
    const isCorrect = normalize(input.value) === normalize(exercise.correctAnswer);

    input.disabled = true;
    submitBtn.disabled = true;
    input.classList.add(isCorrect ? "correct" : "incorrect");

    if (!isCorrect) {
      const correctNote = document.createElement("p");
      correctNote.className = "exercise-hint";
      correctNote.style.marginTop = "12px";
      correctNote.textContent = `Correct answer: ${exercise.correctAnswer}`;
      card.appendChild(correctNote);
    }

    if (isCorrect) correctCount += 1;
    showFeedback(isCorrect, nextExercise);
  }

  submitBtn.addEventListener("click", submitAnswer);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") submitAnswer();
  });

  card.appendChild(prompt);
  card.appendChild(hint);
  card.appendChild(input);
  card.appendChild(submitBtn);
  lessonBody.appendChild(card);

  input.focus();
}

function renderExercise(exercise) {
  lessonBody.innerHTML = "";
  if (exercise.type === "choice") {
    renderChoiceExercise(exercise);
  } else if (exercise.type === "match") {
    renderMatchExercise(exercise);
  } else if (exercise.type === "type") {
    renderTypeExercise(exercise);
  }
}

// ---- Completion screen ----
async function finishLesson() {
  lessonBody.innerHTML = "";

  let xpResult = { xp: 0, streak: 0 };
  try {
    xpResult = await completeLesson(currentUser.uid, lesson.id, lesson.xpReward);
  } catch (err) {
    console.error("Failed to save progress:", err);
  }

  const screen = document.createElement("div");
  screen.className = "complete-screen";
  screen.innerHTML = `
    <div class="complete-star star"></div>
    <h1 class="complete-title">Lesson complete!</h1>
    <p class="exercise-hint">You got ${correctCount} out of ${lesson.exercises.length} right.</p>
    <div class="complete-stats">
      <div class="complete-stat">
        <div class="complete-stat-value">+${lesson.xpReward}</div>
        <div class="complete-stat-label">XP earned</div>
      </div>
      <div class="complete-stat">
        <div class="complete-stat-value">${xpResult.streak}</div>
        <div class="complete-stat-label">Day streak</div>
      </div>
    </div>
    <button class="btn btn-primary" id="back-to-dashboard-btn">Back to dashboard</button>
  `;
  lessonBody.appendChild(screen);

  document.getElementById("back-to-dashboard-btn").addEventListener("click", () => {
    window.location.href = "dashboard.html";
  });

  progressFill.style.width = "100%";
}

// ---- Init ----
watchAuthState((user) => {
  if (!user) {
    window.location.href = "index.html";
    return;
  }
  currentUser = user;

  const lessonId = getLessonIdFromUrl();
  lesson = getLessonById(lessonId);

  if (!lesson) {
    lessonLoading.textContent = "Lesson not found.";
    return;
  }

  lessonLoading.remove();
  renderExercise(lesson.exercises[0]);
  updateProgressBar();
});
