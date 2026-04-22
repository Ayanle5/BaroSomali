// ==============================
// DATA: LESSONS
// ==============================
const LESSONS = [
  {
    id: 'greetings',
    title: 'Greetings',
    emoji: '👋',
    desc: 'Say hello in Somali',
    questions: [
      { type: 'mc', q: 'What does "Salaan" mean?', options: ['Goodbye','Hello / Greeting','Thank you','Please'], answer: 'Hello / Greeting', hint: 'It\'s how you start a conversation' },
      { type: 'mc', q: 'How do you say "How are you?" in Somali?', options: ['Mahadsanid','Nabad','Sideed tahay?','Subax wanaagsan'], answer: 'Sideed tahay?', hint: 'You ask this when meeting someone' },
      { type: 'type', q: 'Type the Somali word for "Good morning"', answer: 'Subax wanaagsan', hint: 'Subax = morning, wanaagsan = good' },
      { type: 'mc', q: 'What does "Nabad" mean?', options: ['Hello','Peace / Goodbye','Yes','Water'], answer: 'Peace / Goodbye', hint: 'It also means peace' },
      { type: 'type', q: 'How do you say "Thank you" in Somali?', answer: 'Mahadsanid', hint: 'A word of gratitude' },
      { type: 'mc', q: 'What is "Subax wanaagsan"?', options: ['Good night','Good afternoon','Good morning','See you later'], answer: 'Good morning', hint: 'Subax = morning' },
      { type: 'type', q: 'Translate to Somali: "Goodbye"', answer: 'Nabad', hint: 'Also means peace' },
    ]
  },
  {
    id: 'numbers',
    title: 'Numbers',
    emoji: '🔢',
    desc: 'Count in Somali 1–10',
    questions: [
      { type: 'mc', q: 'What is "Kow" in English?', options: ['Two','Three','One','Four'], answer: 'One', hint: 'The first number' },
      { type: 'mc', q: 'How do you say "Five" in Somali?', options: ['Afar','Shan','Lix','Toddoba'], answer: 'Shan', hint: 'Five fingers on one hand' },
      { type: 'type', q: 'Type the Somali word for "Three"', answer: 'Saddex', hint: 'S-A-D-D-E-X' },
      { type: 'mc', q: 'What does "Sideed" mean?', options: ['Six','Seven','Eight','Nine'], answer: 'Eight', hint: 'Close to the end of our count' },
      { type: 'type', q: 'How do you say "Ten" in Somali?', answer: 'Toban', hint: 'The last number in this lesson' },
      { type: 'mc', q: 'What is "Laba" in English?', options: ['One','Two','Three','Six'], answer: 'Two', hint: 'A pair' },
      { type: 'type', q: 'Translate to Somali: "Seven"', answer: 'Toddoba', hint: 'T-O-D-D-O-B-A' },
    ]
  },
  {
    id: 'colors',
    title: 'Colors',
    emoji: '🎨',
    desc: 'Learn colors in Somali',
    questions: [
      { type: 'mc', q: 'What does "Cad" mean?', options: ['Black','Red','White','Blue'], answer: 'White', hint: 'The color of snow' },
      { type: 'mc', q: 'How do you say "Blue" in Somali?', options: ['Cagaar','Buluug','Cas','Huruud'], answer: 'Buluug', hint: 'Like the Somali flag' },
      { type: 'type', q: 'Type the Somali word for "Red"', answer: 'Cas', hint: 'Short and simple — C-A-S' },
      { type: 'mc', q: 'What is "Madow"?', options: ['Yellow','Green','White','Black'], answer: 'Black', hint: 'The darkest color' },
      { type: 'type', q: 'How do you say "Green" in Somali?', answer: 'Cagaar', hint: 'Think of grass' },
      { type: 'mc', q: 'What does "Huruud" mean?', options: ['Orange','Purple','Yellow','Pink'], answer: 'Yellow', hint: 'The color of the sun' },
      { type: 'type', q: 'Translate to Somali: "White"', answer: 'Cad', hint: 'Short — C-A-D' },
    ]
  },
  {
    id: 'alphabet',
    title: 'Alphabet',
    emoji: '🔤',
    desc: 'Somali letters & sounds',
    questions: [
      { type: 'mc', q: 'The Somali alphabet uses which script?', options: ['Arabic','Cyrillic','Latin','Osmanya'], answer: 'Latin', hint: 'Same script as English' },
      { type: 'mc', q: 'Which of these is a Somali-specific letter sound?', options: ['Q (deep K)','Z','J','M'], answer: 'Q (deep K)', hint: 'Pronounced far back in the throat' },
      { type: 'type', q: 'What letter makes the "kh" sound in Somali?', answer: 'Kh', hint: 'Like the ch in "loch"' },
      { type: 'mc', q: 'In Somali, "X" is pronounced as which sound?', options: ['ks','h (breathy)','sh','z'], answer: 'h (breathy)', hint: 'A soft, breathy H' },
      { type: 'mc', q: 'Which Somali letter is pronounced deep in the throat like Arabic qaf?', options: ['K','G','Q','C'], answer: 'Q', hint: 'Very back of the throat' },
      { type: 'type', q: 'The letter "C" in Somali makes what English sound?', answer: 'ayn', hint: 'Like the Arabic letter ع' },
      { type: 'mc', q: 'How many letters does the official Somali Latin alphabet have?', options: ['21','26','24','28'], answer: '21', hint: 'Fewer than English' },
    ]
  },
  {
    id: 'phrases',
    title: 'Common Phrases',
    emoji: '💬',
    desc: 'Everyday Somali phrases',
    questions: [
      { type: 'mc', q: 'What does "Magacaygu waa..." mean?', options: ['Where is...?','My name is...','I am from...','How much?'], answer: 'My name is...', hint: 'You use this to introduce yourself' },
      { type: 'type', q: 'How do you say "Yes" in Somali?', answer: 'Haa', hint: 'Short and simple' },
      { type: 'mc', q: 'What is "Maya" in English?', options: ['Yes','Maybe','No','Please'], answer: 'No', hint: 'The opposite of Haa' },
      { type: 'type', q: 'Translate "I don\'t understand" to Somali', answer: 'Ma garan', hint: 'Ma = not, garan = understand' },
      { type: 'mc', q: 'What does "Fadlan" mean?', options: ['Sorry','Excuse me','Please','Help'], answer: 'Please', hint: 'Used when making a polite request' },
      { type: 'mc', q: 'How do you say "I need help" in Somali?', options: ['Garab siiya','Ma garan','Fadlan','Intee?'], answer: 'Garab siiya', hint: 'Garab = help, siiya = give me' },
      { type: 'type', q: 'Type the Somali word for "No"', answer: 'Maya', hint: 'M-A-Y-A' },
    ]
  },
  {
    id: 'family',
    title: 'Family',
    emoji: '👨‍👩‍👧',
    desc: 'Family words in Somali',
    questions: [
      { type: 'mc', q: 'What does "Hooyo" mean?', options: ['Father','Sister','Mother','Brother'], answer: 'Mother', hint: 'The word for mom' },
      { type: 'mc', q: 'How do you say "Father" in Somali?', options: ['Walaal','Aabbe','Hooyo','Wiil'], answer: 'Aabbe', hint: 'The word for dad' },
      { type: 'type', q: 'Type the Somali word for "Brother/Sister"', answer: 'Walaal', hint: 'Used for both siblings' },
      { type: 'mc', q: 'What is "Wiil" in English?', options: ['Girl','Boy / Son','Baby','Uncle'], answer: 'Boy / Son', hint: 'Male child' },
      { type: 'type', q: 'How do you say "Daughter / Girl" in Somali?', answer: 'Gabadh', hint: 'G-A-B-A-D-H' },
      { type: 'mc', q: 'What does "Awoowe" mean?', options: ['Uncle','Grandfather','Father','Brother'], answer: 'Grandfather', hint: 'Elderly male relative' },
      { type: 'type', q: 'Translate "Grandmother" to Somali', answer: 'Ayeeyo', hint: 'A-Y-E-E-Y-O' },
    ]
  },
];

// ==============================
// DATA: WORD BANK
// ==============================
const PHRASEBOOK = [
  { somali: 'Salaan', english: 'Hello / Greeting', lesson: 'Greetings', emoji: '👋' },
  { somali: 'Sideed tahay?', english: 'How are you?', lesson: 'Greetings', emoji: '👋' },
  { somali: 'Subax wanaagsan', english: 'Good morning', lesson: 'Greetings', emoji: '👋' },
  { somali: 'Nabad', english: 'Peace / Goodbye', lesson: 'Greetings', emoji: '👋' },
  { somali: 'Mahadsanid', english: 'Thank you', lesson: 'Greetings', emoji: '👋' },
  { somali: 'Habeennimo wanaagsan', english: 'Good night', lesson: 'Greetings', emoji: '👋' },
  { somali: 'Waan ku faraxsanahay', english: 'I am happy to meet you', lesson: 'Greetings', emoji: '👋' },
  { somali: 'Kow', english: 'One', lesson: 'Numbers', emoji: '🔢' },
  { somali: 'Laba', english: 'Two', lesson: 'Numbers', emoji: '🔢' },
  { somali: 'Saddex', english: 'Three', lesson: 'Numbers', emoji: '🔢' },
  { somali: 'Afar', english: 'Four', lesson: 'Numbers', emoji: '🔢' },
  { somali: 'Shan', english: 'Five', lesson: 'Numbers', emoji: '🔢' },
  { somali: 'Lix', english: 'Six', lesson: 'Numbers', emoji: '🔢' },
  { somali: 'Toddoba', english: 'Seven', lesson: 'Numbers', emoji: '🔢' },
  { somali: 'Sideed', english: 'Eight', lesson: 'Numbers', emoji: '🔢' },
  { somali: 'Sagaal', english: 'Nine', lesson: 'Numbers', emoji: '🔢' },
  { somali: 'Toban', english: 'Ten', lesson: 'Numbers', emoji: '🔢' },
  { somali: 'Cad', english: 'White', lesson: 'Colors', emoji: '🎨' },
  { somali: 'Madow', english: 'Black', lesson: 'Colors', emoji: '🎨' },
  { somali: 'Cas', english: 'Red', lesson: 'Colors', emoji: '🎨' },
  { somali: 'Buluug', english: 'Blue', lesson: 'Colors', emoji: '🎨' },
  { somali: 'Cagaar', english: 'Green', lesson: 'Colors', emoji: '🎨' },
  { somali: 'Huruud', english: 'Yellow', lesson: 'Colors', emoji: '🎨' },
  { somali: 'Oranjo', english: 'Orange', lesson: 'Colors', emoji: '🎨' },
  { somali: 'Q', english: 'Deep K sound (back of throat)', lesson: 'Alphabet', emoji: '🔤' },
  { somali: 'X', english: 'Breathy H sound', lesson: 'Alphabet', emoji: '🔤' },
  { somali: 'C', english: 'Ayn sound (like Arabic ع)', lesson: 'Alphabet', emoji: '🔤' },
  { somali: 'Kh', english: 'KH sound (like Scottish loch)', lesson: 'Alphabet', emoji: '🔤' },
  { somali: 'DH', english: 'Retroflex D sound', lesson: 'Alphabet', emoji: '🔤' },
  { somali: 'SH', english: 'SH sound (like "shoe")', lesson: 'Alphabet', emoji: '🔤' },
  { somali: '21 xaraf', english: '21 letters in the Somali alphabet', lesson: 'Alphabet', emoji: '🔤' },
  { somali: 'Magacaygu waa...', english: 'My name is...', lesson: 'Phrases', emoji: '💬' },
  { somali: 'Haa', english: 'Yes', lesson: 'Phrases', emoji: '💬' },
  { somali: 'Maya', english: 'No', lesson: 'Phrases', emoji: '💬' },
  { somali: 'Fadlan', english: 'Please', lesson: 'Phrases', emoji: '💬' },
  { somali: 'Ma garan', english: "I don't understand", lesson: 'Phrases', emoji: '💬' },
  { somali: 'Garab siiya', english: 'I need help', lesson: 'Phrases', emoji: '💬' },
  { somali: 'Intee?', english: 'How much?', lesson: 'Phrases', emoji: '💬' },
  { somali: 'Hooyo', english: 'Mother', lesson: 'Family', emoji: '👨‍👩‍👧' },
  { somali: 'Aabbe', english: 'Father', lesson: 'Family', emoji: '👨‍👩‍👧' },
  { somali: 'Walaal', english: 'Brother / Sister', lesson: 'Family', emoji: '👨‍👩‍👧' },
  { somali: 'Wiil', english: 'Boy / Son', lesson: 'Family', emoji: '👨‍👩‍👧' },
  { somali: 'Gabadh', english: 'Girl / Daughter', lesson: 'Family', emoji: '👨‍👩‍👧' },
  { somali: 'Awoowe', english: 'Grandfather', lesson: 'Family', emoji: '👨‍👩‍👧' },
  { somali: 'Ayeeyo', english: 'Grandmother', lesson: 'Family', emoji: '👨‍👩‍👧' },
];

// ==============================
// STATE
// ==============================
let currentUser = null;   // { uid, username, xp, streak, lastActive, progress }
let currentLesson = null;
let currentQ = 0;
let score = 0;
let wrongCount = 0;
let answered = false;
let chatUnsubscribe = null;  // holds the Firestore real-time listener

// ==============================
// FIREBASE REFERENCES
// ==============================
const auth = firebase.auth();
const db   = firebase.firestore();

// ==============================
// USER DATA (Firestore)
// ==============================
async function loadUserData(uid) {
  const snap = await db.collection('users').doc(uid).get();
  if (snap.exists) {
    return snap.data();
  }
  return null;
}

async function saveUserData(data) {
  await db.collection('users').doc(data.uid).set(data, { merge: true });
}

// ==============================
// AUTH
// ==============================
function switchTab(tab) {
  document.getElementById('tab-login').classList.toggle('active', tab === 'login');
  document.getElementById('tab-signup').classList.toggle('active', tab === 'signup');
  document.getElementById('login-form').style.display  = tab === 'login'  ? '' : 'none';
  document.getElementById('signup-form').style.display = tab === 'signup' ? '' : 'none';
  document.getElementById('auth-error').textContent = '';
}

async function doLogin() {
  const email = document.getElementById('login-user').value.trim();
  const pass  = document.getElementById('login-pass').value;
  if (!email || !pass) return setAuthError('Please fill in all fields.');
  try {
    await auth.signInWithEmailAndPassword(email, pass);
    // onAuthStateChanged will handle the rest
  } catch (e) {
    setAuthError(friendlyAuthError(e.code));
  }
}

async function doSignup() {
  const displayName = document.getElementById('signup-name').value.trim();
  const email       = document.getElementById('signup-user').value.trim();
  const pass        = document.getElementById('signup-pass').value;
  if (!displayName || !email || !pass) return setAuthError('Please fill in all fields.');
  if (displayName.length < 2) return setAuthError('Username must be at least 2 characters.');
  if (pass.length < 6) return setAuthError('Password must be at least 6 characters.');
  try {
    const cred = await auth.createUserWithEmailAndPassword(email, pass);
    // Create Firestore profile
    const profile = {
      uid: cred.user.uid,
      username: displayName,
      progress: {},
      xp: 0,
      streak: 0,
      lastActive: null,
    };
    await db.collection('users').doc(cred.user.uid).set(profile);
    // onAuthStateChanged will handle the rest
  } catch (e) {
    setAuthError(friendlyAuthError(e.code));
  }
}

function setAuthError(msg) {
  document.getElementById('auth-error').textContent = msg;
}

function friendlyAuthError(code) {
  const map = {
    'auth/user-not-found':      'No account found with that email.',
    'auth/wrong-password':      'Wrong password — try again.',
    'auth/email-already-in-use':'That email is already registered.',
    'auth/invalid-email':       'Please enter a valid email address.',
    'auth/weak-password':       'Password must be at least 6 characters.',
    'auth/invalid-credential':  'Email or password is incorrect.',
  };
  return map[code] || 'Something went wrong. Please try again.';
}

async function logout() {
  if (chatUnsubscribe) { chatUnsubscribe(); chatUnsubscribe = null; }
  await auth.signOut();
  // onAuthStateChanged will clean up
}

function updateStreak() {
  const today     = new Date().toDateString();
  const yesterday = new Date(Date.now() - 86400000).toDateString();
  if (currentUser.lastActive === today) return;
  if (currentUser.lastActive === yesterday) {
    currentUser.streak = (currentUser.streak || 0) + 1;
  } else {
    currentUser.streak = 1;
  }
  currentUser.lastActive = today;
  saveUserData(currentUser); // fire-and-forget
}

// ==============================
// AUTH STATE OBSERVER
// ==============================
auth.onAuthStateChanged(async (firebaseUser) => {
  if (firebaseUser) {
    // Signed in — load profile from Firestore
    const profile = await loadUserData(firebaseUser.uid);
    if (profile) {
      currentUser = profile;
    } else {
      // Fallback: create a minimal profile (edge case)
      currentUser = {
        uid: firebaseUser.uid,
        username: firebaseUser.displayName || firebaseUser.email.split('@')[0],
        progress: {},
        xp: 0,
        streak: 0,
        lastActive: null,
      };
      await saveUserData(currentUser);
    }
    updateStreak();
    document.getElementById('main-nav').style.display = '';
    showPage('dashboard');
    showToast('Welcome back, ' + currentUser.username + '! 👋');
  } else {
    // Signed out
    currentUser = null;
    document.getElementById('main-nav').style.display = 'none';
    showPage('hero');
  }
});

// ==============================
// PAGE ROUTING
// ==============================
function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(page + '-page').classList.add('active');
  if (page === 'dashboard')  renderDashboard();
  if (page === 'chat')       initChat();
  if (page === 'phrasebook') renderPhrasebook();
  // Detach chat listener when leaving chat
  if (page !== 'chat' && chatUnsubscribe) {
    chatUnsubscribe();
    chatUnsubscribe = null;
  }
}

// ==============================
// DASHBOARD
// ==============================
function renderDashboard() {
  const u = currentUser;
  const completedCount = Object.values(u.progress || {}).filter(p => p.completed).length;
  const html = `
    <div class="dash-header">
      <h2>Hey, ${u.username}! 👋</h2>
      <p>Keep going — you're doing great.</p>
    </div>
    <div class="stats-row">
      <div class="stat-card"><div class="stat-icon">🔥</div><div class="stat-info"><p>Streak</p><h3>${u.streak || 0} days</h3></div></div>
      <div class="stat-card"><div class="stat-icon">⭐</div><div class="stat-info"><p>Total XP</p><h3>${u.xp || 0}</h3></div></div>
      <div class="stat-card"><div class="stat-icon">📚</div><div class="stat-info"><p>Completed</p><h3>${completedCount}/${LESSONS.length}</h3></div></div>
    </div>
    <div class="section-title">📖 All Lessons</div>
    <div class="lessons-grid">
      ${LESSONS.map((l) => {
        const prog = (u.progress || {})[l.id] || {};
        const completed = prog.completed;
        const pct = prog.pct || 0;
        return `
          <div class="lesson-card ${completed ? 'completed' : ''}" onclick="startLesson('${l.id}')">
            ${completed ? '<div class="lesson-completed-badge">✓ Done</div>' : ''}
            <div class="lesson-emoji">${l.emoji}</div>
            <h4>${l.title}</h4>
            <p>${l.desc}</p>
            <div class="lesson-progress-bar"><div class="lesson-progress-fill" style="width:${pct}%"></div></div>
          </div>`;
      }).join('')}
    </div>
  `;
  document.getElementById('dash-content').innerHTML = html;
}

// ==============================
// LESSON
// ==============================
function startLesson(id) {
  currentLesson = LESSONS.find(l => l.id === id);
  currentQ = 0; score = 0; wrongCount = 0;
  showPage('lesson');
  renderQuestion();
}
function renderQuestion() {
  if (currentQ >= currentLesson.questions.length) {
    renderLessonComplete();
    return;
  }
  const q = currentLesson.questions[currentQ];
  const progress = Math.round((currentQ / currentLesson.questions.length) * 100);
  answered = false;

  let questionHTML = '';
  if (q.type === 'mc') {
    const letters = ['A','B','C','D'];
    questionHTML = `
      <div class="quiz-type-badge">Multiple Choice</div>
      <div class="quiz-question">${q.q}</div>
      <div class="quiz-hint">💡 Hint: ${q.hint}</div>
      <div class="mc-options">
        ${q.options.map((opt, i) => `
          <button class="mc-option" onclick="checkMC(this, '${opt.replace(/'/g,"\\'")}', '${q.answer.replace(/'/g,"\\'")}')">
            <div class="mc-letter">${letters[i]}</div>${opt}
          </button>`).join('')}
      </div>`;
  } else {
    questionHTML = `
      <div class="quiz-type-badge">Type the Answer</div>
      <div class="quiz-question">${q.q}</div>
      <div class="quiz-hint">💡 Hint: ${q.hint}</div>
      <input class="type-input" id="type-ans" placeholder="Type your answer here…" onkeydown="if(event.key==='Enter') checkType()"/>
      <button class="submit-type-btn" onclick="checkType()">Submit Answer</button>`;
  }

  document.getElementById('lesson-content').innerHTML = `
    <div class="lesson-top">
      <button class="back-btn" onclick="showPage('dashboard')">← Back</button>
      <div class="lesson-title-area">
        <h2>${currentLesson.emoji} ${currentLesson.title}</h2>
        <p>Question ${currentQ + 1} of ${currentLesson.questions.length}</p>
      </div>
    </div>
    <div class="xp-bar-wrap">
      <div class="xp-bar-label"><span>Progress</span><span>${progress}%</span></div>
      <div class="xp-bar"><div class="xp-bar-fill" style="width:${progress}%"></div></div>
    </div>
    <div class="quiz-card">
      ${questionHTML}
      <div class="quiz-feedback" id="quiz-feedback"></div>
      <button class="quiz-next-btn" id="next-btn" onclick="nextQuestion()">
        ${currentQ + 1 < currentLesson.questions.length ? 'Next Question →' : 'Finish Lesson 🎉'}
      </button>
    </div>
  `;
}
function checkMC(btn, chosen, correct) {
  if (answered) return;
  answered = true;
  const opts = document.querySelectorAll('.mc-option');
  opts.forEach(o => { o.disabled = true; });
  const fb = document.getElementById('quiz-feedback');
  if (chosen === correct) {
    btn.classList.add('correct');
    fb.className = 'quiz-feedback correct';
    fb.textContent = '✅ Correct! Well done!';
    score++;
  } else {
    btn.classList.add('wrong');
    fb.className = 'quiz-feedback wrong';
    fb.textContent = `❌ Not quite. The answer is: "${correct}"`;
    wrongCount++;
    opts.forEach(o => { if (o.textContent.includes(correct)) o.classList.add('correct'); });
  }
  document.getElementById('next-btn').classList.add('show');
}
function checkType() {
  if (answered) return;
  const inp = document.getElementById('type-ans');
  if (!inp) return;
  const val = inp.value.trim();
  if (!val) return;
  answered = true;
  const q = currentLesson.questions[currentQ];
  const correct = q.answer.toLowerCase().trim();
  const given = val.toLowerCase();
  const fb = document.getElementById('quiz-feedback');
  inp.disabled = true;
  if (given === correct) {
    inp.classList.add('correct');
    fb.className = 'quiz-feedback correct';
    fb.textContent = '✅ Correct! Great job!';
    score++;
  } else {
    inp.classList.add('wrong');
    fb.className = 'quiz-feedback wrong';
    fb.textContent = `❌ Not quite. The answer is: "${q.answer}"`;
    wrongCount++;
  }
  document.getElementById('next-btn').classList.add('show');
}
function nextQuestion() {
  currentQ++;
  renderQuestion();
}
async function renderLessonComplete() {
  const total    = currentLesson.questions.length;
  const xpEarned = score * 10;
  const pct      = Math.round((score / total) * 100);

  currentUser.xp = (currentUser.xp || 0) + xpEarned;
  if (!currentUser.progress) currentUser.progress = {};
  currentUser.progress[currentLesson.id] = {
    completed: true,
    pct: 100,
    score: pct,
    lastXP: xpEarned,
  };
  await saveUserData(currentUser);

  const emoji = pct >= 80 ? '🏆' : pct >= 50 ? '👏' : '📚';
  const msg   = pct >= 80 ? 'Outstanding work!' : pct >= 50 ? 'Good effort!' : 'Keep practicing!';

  document.getElementById('lesson-content').innerHTML = `
    <div class="lesson-complete">
      <div class="big-emoji">${emoji}</div>
      <h2>Lesson Complete!</h2>
      <p>${msg}</p>
      <div class="complete-stats">
        <div class="complete-stat"><h4>${score}/${total}</h4><p>Correct</p></div>
        <div class="complete-stat"><h4>${pct}%</h4><p>Accuracy</p></div>
        <div class="complete-stat"><h4>+${xpEarned}</h4><p>XP Earned</p></div>
      </div>
      <button class="go-dash-btn" onclick="showPage('dashboard')">Back to Dashboard</button>
    </div>
  `;
}

// ==============================
// WORD BANK
// ==============================
let pbFilter = 'All';
let pbSearch = '';

function renderPhrasebook() {
  const lessons  = ['All', ...LESSONS.map(l => l.title)];
  const filtered = PHRASEBOOK.filter(w => {
    const matchLesson  = pbFilter === 'All' || w.lesson === pbFilter;
    const matchSearch  = !pbSearch ||
      w.somali.toLowerCase().includes(pbSearch.toLowerCase()) ||
      w.english.toLowerCase().includes(pbSearch.toLowerCase());
    return matchLesson && matchSearch;
  });

  const filterBtns = lessons.map(l =>
    `<button class="pb-filter-btn ${pbFilter === l ? 'active' : ''}" onclick="setPBFilter('${l}')">${l}</button>`
  ).join('');

  const cards = filtered.length === 0
    ? '<div class="pb-empty">No words found. Try a different search or filter.</div>'
    : filtered.map(w => `
        <div class="pb-card">
          <div class="pb-somali">${w.somali}</div>
          <div class="pb-english">${w.english}</div>
          <span class="pb-tag">${w.emoji} ${w.lesson}</span>
        </div>`).join('');

  document.getElementById('phrasebook-content').innerHTML = `
    <div class="pb-header">
      <h2>📖 Word Bank</h2>
      <p>All vocabulary from every lesson — search, filter and revisit anytime.</p>
    </div>
    <div class="pb-controls">
      <input class="pb-search" placeholder="🔍 Search Somali or English…" value="${pbSearch}"
        oninput="pbSearch=this.value; renderPhrasebook()"/>
      ${filterBtns}
    </div>
    <div class="pb-count">${filtered.length} word${filtered.length !== 1 ? 's' : ''}</div>
    <div class="pb-grid">${cards}</div>
  `;
}
function setPBFilter(f) {
  pbFilter = f;
  renderPhrasebook();
}

// ==============================
// CHAT  (Firestore real-time)
// ==============================
function initChat() {
  // Detach any existing listener first
  if (chatUnsubscribe) { chatUnsubscribe(); chatUnsubscribe = null; }

  const box = document.getElementById('chat-messages');
  box.innerHTML = '<div class="chat-empty">Loading messages…</div>';

  // Listen to the last 100 messages, ordered by timestamp
  chatUnsubscribe = db.collection('chat')
    .orderBy('timestamp', 'asc')
    .limitToLast(100)
    .onSnapshot((snapshot) => {
      if (snapshot.empty) {
        box.innerHTML = '<div class="chat-empty">No messages yet. Be the first to say something! Try writing in Somali 🇸🇴</div>';
        return;
      }
      box.innerHTML = snapshot.docs.map(doc => {
        const m = doc.data();
        const isOwn    = m.uid === currentUser.uid;
        const initials = (m.username || '??').slice(0, 2).toUpperCase();
        // Format time from Firestore Timestamp
        const time = m.timestamp
          ? m.timestamp.toDate().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          : '';
        return `
          <div class="chat-msg ${isOwn ? 'own' : ''}">
            <div class="chat-avatar">${initials}</div>
            <div class="chat-bubble">
              <div class="chat-name">${escapeHtml(m.username || 'Unknown')}</div>
              <div class="chat-text">${escapeHtml(m.text)}</div>
              <div class="chat-time">${time}</div>
            </div>
          </div>`;
      }).join('');
      box.scrollTop = box.scrollHeight;
    }, (err) => {
      console.error('Chat listener error:', err);
      box.innerHTML = '<div class="chat-empty">Could not load messages. Please refresh.</div>';
    });
}

async function sendChat() {
  const inp  = document.getElementById('chat-input');
  const text = inp.value.trim();
  if (!text || !currentUser) return;
  inp.value = '';
  try {
    await db.collection('chat').add({
      uid:       currentUser.uid,
      username:  currentUser.username,
      text,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  } catch (e) {
    console.error('Failed to send message:', e);
    showToast('Could not send message. Please try again.');
  }
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;');
}

// ==============================
// TOAST
// ==============================
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

// ==============================
// MOBILE NAV DRAWER
// ==============================
function toggleDrawer() {
  document.getElementById('nav-drawer').classList.toggle('open');
}
function closeDrawer() {
  document.getElementById('nav-drawer').classList.remove('open');
}
// Close drawer when tapping outside
document.addEventListener('click', (e) => {
  const drawer = document.getElementById('nav-drawer');
  const hamburger = document.getElementById('hamburger-btn');
  if (drawer && hamburger && !drawer.contains(e.target) && !hamburger.contains(e.target)) {
    drawer.classList.remove('open');
  }
});

// ==============================
// DARK MODE
// ==============================
function toggleDark() {
  const isDark = document.body.classList.toggle('dark');
  localStorage.setItem('bs_dark', isDark ? '1' : '0');
  const icon = isDark ? '☀️' : '🌙';
  const btn = document.getElementById('dark-btn');
  const btnM = document.getElementById('dark-btn-mobile');
  if (btn) btn.textContent = icon;
  if (btnM) btnM.textContent = icon;
}

// ==============================
// BOOT
// ==============================
(function init() {
  if (localStorage.getItem('bs_dark') === '1') {
    document.body.classList.add('dark');
    const btn  = document.getElementById('dark-btn');
    const btnM = document.getElementById('dark-btn-mobile');
    if (btn)  btn.textContent  = '☀️';
    if (btnM) btnM.textContent = '☀️';
  }
  // Auth state is handled by onAuthStateChanged above — no localStorage session needed
})();
