# BaroSomali

A Duolingo-style web app for learning Somali from scratch. Plain HTML/CSS/JS, Firebase Auth (email/password), and Firestore for progress storage.

## File structure

```
barosomali/
├── index.html              Hero/landing page + login/signup modal
├── dashboard.html           Lesson path, XP, streak
├── lesson.html               Generic lesson runner (choice/match/type exercises)
├── firestore.rules           Security rules — users can only access their own data
├── css/
│   └── styles.css            All styles
├── js/
│   ├── firebase-config.js    <-- put your real Firebase config here
│   ├── auth.js                Signup/login/logout helpers
│   ├── progress.js            XP, streak, and completed-lesson logic (Firestore)
│   ├── index-page.js          Hero page modal + form behavior
│   ├── dashboard-page.js       Dashboard rendering logic
│   └── lesson-page.js         Lesson engine: renders/grades exercises, saves progress
└── lessons/
    └── lesson-1.js            Lesson content (Greetings). Add lesson-2.js, etc. here.
```

## Setup

1. **Firebase config** — Open `js/firebase-config.js` and replace the placeholder values with your real config from Firebase Console > Project Settings > General > Your apps.

2. **Enable Auth** — In Firebase Console > Authentication > Sign-in method, enable **Email/Password**.

3. **Enable Firestore** — In Firebase Console > Firestore Database, create a database (production mode is fine since we have rules).

4. **Deploy security rules** — Either paste the contents of `firestore.rules` into Firebase Console > Firestore > Rules, or deploy via CLI:
   ```
   firebase deploy --only firestore:rules
   ```

5. **Serve locally** — Because the JS uses ES modules (`type="module"`), you can't just double-click `index.html`; it needs to be served over http. From the project folder:
   ```
   npx serve .
   ```
   or
   ```
   python3 -m http.server 8000
   ```
   Then visit `http://localhost:8000`.

6. **Deploy** — Firebase Hosting is the natural fit since you're already on Firebase:
   ```
   firebase init hosting
   firebase deploy
   ```

## How progress works

Each user gets a Firestore doc at `users/{uid}` with: `xp`, `streak`, `lastActiveDate`, `completedLessons` (array of lesson IDs). Streak logic: if you completed a lesson yesterday, it increments; if today already, no change; otherwise it resets to 1. This lives in `js/progress.js`.

## Adding a new lesson

1. Create `lessons/lesson-2.js` following the shape in `lesson-1.js` (a `title`, `description`, `xpReward`, and an `exercises` array of `choice`/`match`/`type` items).
2. Import it in `lessons/lesson-1.js`'s `lessons` array (or better, create a central `lessons/index.js` that imports all lesson files — worth doing once you have 3+ lessons).
3. The dashboard automatically unlocks lessons in order based on `completedLessons`, so a new lesson just needs to be added to the `lessons` array.

## What's intentionally not built yet

Per the plan, this first version stops at: hero, login/signup, dashboard, and lesson 1 fully working end-to-end with XP/streak write-back. Things like hearts/lives, audio, more lessons, placement quizzes, etc. were explicitly deferred — tell me what to add next.
