// lesson-1.js
// Lesson 1: Greetings — basic hello/goodbye/how are you phrases.
// Each exercise has a "type" of "choice", "match", or "type".

export const lesson1 = {
  id: "lesson-1",
  title: "Greetings",
  description: "Say hello and introduce basic greetings",
  xpReward: 20,
  exercises: [
    {
      type: "choice",
      prompt: "How do you say \"Hello\" in Somali?",
      hint: "Choose the correct translation",
      options: ["Salaan", "Nabad", "Maalin", "Waan"],
      correctAnswer: "Nabad"
    },
    {
      type: "choice",
      prompt: "What does \"Subax wanaagsan\" mean?",
      hint: "Choose the correct translation",
      options: ["Good morning", "Good night", "Thank you", "See you later"],
      correctAnswer: "Good morning"
    },
    {
      type: "match",
      prompt: "Match the Somali word to its English meaning",
      hint: "Tap a word, then tap its match",
      pairs: [
        { left: "Nabad", right: "Hello" },
        { left: "Mahadsanid", right: "Thank you" },
        { left: "Haa", right: "Yes" },
        { left: "Maya", right: "No" }
      ]
    },
    {
      type: "choice",
      prompt: "How do you say \"How are you?\" in Somali?",
      hint: "Choose the correct translation",
      options: ["Iska warran?", "Subax wanaagsan", "Mahadsanid", "Nabad gelyo"],
      correctAnswer: "Iska warran?"
    },
    {
      type: "type",
      prompt: "Type the Somali word for \"Goodbye\"",
      hint: "Hint: starts with N",
      correctAnswer: "Nabad gelyo"
    },
    {
      type: "choice",
      prompt: "What does \"Mahadsanid\" mean?",
      hint: "Choose the correct translation",
      options: ["Thank you", "Please", "Sorry", "Welcome"],
      correctAnswer: "Thank you"
    },
    {
      type: "type",
      prompt: "Type the Somali word for \"Yes\"",
      hint: "Two letters",
      correctAnswer: "Haa"
    }
  ]
};

// Lessons registry — add more lessons here as they're created.
export const lessons = [lesson1];

export function getLessonById(id) {
  return lessons.find((l) => l.id === id) || null;
}
