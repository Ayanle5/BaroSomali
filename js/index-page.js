// index-page.js
// Controls the auth modal on the landing page and handles login/signup submission.

import { signUp, logIn, friendlyAuthError, watchAuthState } from "./auth.js";

const overlay = document.getElementById("auth-overlay");
const loginWrap = document.getElementById("login-form-wrap");
const signupWrap = document.getElementById("signup-form-wrap");

function openModal(mode) {
  overlay.classList.add("open");
  if (mode === "signup") {
    loginWrap.classList.add("hidden");
    signupWrap.classList.remove("hidden");
  } else {
    signupWrap.classList.add("hidden");
    loginWrap.classList.remove("hidden");
  }
}

function closeModal() {
  overlay.classList.remove("open");
}

document.getElementById("nav-login-btn").addEventListener("click", () => openModal("login"));
document.getElementById("hero-login-btn").addEventListener("click", () => openModal("login"));
document.getElementById("hero-signup-btn").addEventListener("click", () => openModal("signup"));
document.getElementById("auth-close-btn").addEventListener("click", closeModal);
document.getElementById("switch-to-signup").addEventListener("click", (e) => {
  e.preventDefault();
  openModal("signup");
});
document.getElementById("switch-to-login").addEventListener("click", (e) => {
  e.preventDefault();
  openModal("login");
});
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) closeModal();
});

function showError(el, message) {
  el.textContent = message;
  el.classList.add("show");
}

function clearError(el) {
  el.classList.remove("show");
  el.textContent = "";
}

// Login submit
const loginForm = document.getElementById("login-form");
const loginError = document.getElementById("login-error");
const loginSubmitBtn = document.getElementById("login-submit-btn");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  clearError(loginError);
  loginSubmitBtn.disabled = true;
  loginSubmitBtn.textContent = "Logging in...";

  const email = document.getElementById("login-email").value.trim();
  const password = document.getElementById("login-password").value;

  try {
    await logIn(email, password);
    window.location.href = "dashboard.html";
  } catch (err) {
    showError(loginError, friendlyAuthError(err));
    loginSubmitBtn.disabled = false;
    loginSubmitBtn.textContent = "Log in";
  }
});

// Signup submit
const signupForm = document.getElementById("signup-form");
const signupError = document.getElementById("signup-error");
const signupSubmitBtn = document.getElementById("signup-submit-btn");

signupForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  clearError(signupError);
  signupSubmitBtn.disabled = true;
  signupSubmitBtn.textContent = "Creating account...";

  const email = document.getElementById("signup-email").value.trim();
  const password = document.getElementById("signup-password").value;

  try {
    await signUp(email, password);
    window.location.href = "dashboard.html";
  } catch (err) {
    showError(signupError, friendlyAuthError(err));
    signupSubmitBtn.disabled = false;
    signupSubmitBtn.textContent = "Create account";
  }
});

// If already logged in, skip straight to dashboard.
watchAuthState((user) => {
  if (user) {
    window.location.href = "dashboard.html";
  }
});
