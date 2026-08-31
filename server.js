const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Ensure data directory exists
const LOCAL_DATA_DIR = path.join(__dirname, 'data');
const DATA_DIR = process.env.VERCEL ? '/tmp/data' : LOCAL_DATA_DIR;

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// If on Vercel, copy initial data files if present
if (process.env.VERCEL && fs.existsSync(LOCAL_DATA_DIR)) {
  try {
    const files = fs.readdirSync(LOCAL_DATA_DIR);
    for (const f of files) {
      const src = path.join(LOCAL_DATA_DIR, f);
      const dest = path.join(DATA_DIR, f);
      if (!fs.existsSync(dest)) {
        fs.copyFileSync(src, dest);
      }
    }
  } catch (e) {
    console.warn('Vercel data sync warning:', e);
  }
}

const QUIZZES_FILE = path.join(DATA_DIR, 'quizzes.json');
const LEADERBOARDS_FILE = path.join(DATA_DIR, 'leaderboards.json');

// Default initial quizzes (Only custom quizzes created by Birthday Girl Ash)
const DEFAULT_QUIZZES = {
  "ash-quiz": {
    "id": "ash-quiz",
    "title": "How Well Do You Know Ash (Tiddi/Daddu)? 🐸✨",
    "creator": "Ash (Birthday Queen)",
    "createdAt": new Date().toISOString(),
    "questions": [
      {
        "id": "q_1",
        "text": "What is Ash's biggest certified red flag?",
        "options": [
          "Losing 50/50 in Genshin to Qiqi",
          "Playing on a 500°C phone without a phone cooler",
          "Saying 'just one more minute' for 4 hours",
          "All of the above"
        ],
        "correctIndex": 3,
        "meme": "cat_thinking",
        "roast": "Facts only: All of the above!"
      }
    ]
  }
};
const DEFAULT_LEADERBOARDS = {
  "ash-quiz": []
};

function loadData(filePath, defaultData) {
  try {
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(data);
    }
  } catch (err) {
    console.error(`Error reading ${filePath}:`, err);
  }
  try {
    fs.writeFileSync(filePath, JSON.stringify(defaultData, null, 2), 'utf8');
  } catch (err) {
    console.error(`Error writing default data to ${filePath}:`, err);
  }
  return defaultData;
}

function saveData(filePath, data) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  } catch (err) {
    console.error(`Error writing ${filePath}:`, err);
  }
}

let quizzes = loadData(QUIZZES_FILE, DEFAULT_QUIZZES);
let leaderboards = loadData(LEADERBOARDS_FILE, DEFAULT_LEADERBOARDS);

// Secret birthday passcode auth
app.post('/api/auth-creator', (req, res) => {
  const { code } = req.body;
  if (!code) {
    return res.status(400).json({ success: false, message: "Passcode required" });
  }

  const normalized = code.trim().toLowerCase().replace(/\s+/g, ' ');
  // "nimar is smart"
  if (normalized === 'nimar is smart') {
    return res.json({
      success: true,
      message: "Access Granted! Welcome, Birthday Queen! 👑"
    });
  }

  return res.status(403).json({
    success: false,
    message: "Wrong Birthday Passcode! (Hint: Who is smart? 😉)"
  });
});

// Create custom quiz
app.post('/api/quizzes', (req, res) => {
  const { authCode, title, creator, questions } = req.body;

  const normalized = (authCode || '').trim().toLowerCase().replace(/\s+/g, ' ');
  if (normalized !== 'nimar is smart') {
    return res.status(403).json({ success: false, message: "Unauthorized creator" });
  }

  if (!title || !questions || !Array.isArray(questions) || questions.length === 0) {
    return res.status(400).json({ success: false, message: "Invalid quiz structure" });
  }

  const quizId = 'ash-quiz';
  const formattedQuestions = questions.map((q, idx) => ({
    id: 'q_' + (idx + 1),
    text: q.text || `Question ${idx + 1}`,
    options: Array.isArray(q.options) && q.options.length >= 2 ? q.options : ["Yes", "No"],
    correctIndex: typeof q.correctIndex === 'number' ? q.correctIndex : 0,
    meme: q.meme || 'cat_thinking',
    roast: q.roast || "Classic Daddu moment!"
  }));

  quizzes[quizId] = {
    id: quizId,
    title: title.trim(),
    creator: (creator || "Ash").trim(),
    createdAt: new Date().toISOString(),
    questions: formattedQuestions
  };

  // Reset or initialize leaderboard for fresh quiz
  if (!leaderboards[quizId]) {
    leaderboards[quizId] = [];
  }

  saveData(QUIZZES_FILE, quizzes);
  saveData(LEADERBOARDS_FILE, leaderboards);

  res.json({
    success: true,
    quizId,
    title: quizzes[quizId].title,
    shareUrl: `/?quiz=${quizId}`
  });
});

// Get latest quiz created by Ash
app.get('/api/latest-quiz', (req, res) => {
  const all = Object.values(quizzes);
  if (all.length === 0) {
    return res.json({ hasQuiz: false });
  }
  all.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  const latest = all[0];
  res.json({
    hasQuiz: true,
    id: latest.id,
    title: latest.title,
    creator: latest.creator,
    questionCount: latest.questions.length,
    createdAt: latest.createdAt
  });
});

// List all public quizzes
app.get('/api/quizzes', (req, res) => {
  const list = Object.values(quizzes).map(q => ({
    id: q.id,
    title: q.title,
    creator: q.creator,
    questionCount: q.questions.length,
    createdAt: q.createdAt
  }));
  res.json({ quizzes: list });
});

// Get quiz for playing (without exposing answers)
app.get('/api/quizzes/:id', (req, res) => {
  const quiz = quizzes[req.params.id];
  if (!quiz) {
    return res.status(404).json({ success: false, message: "Quiz not found" });
  }

  const clientQuestions = quiz.questions.map(q => ({
    id: q.id,
    text: q.text,
    options: q.options,
    meme: q.meme
  }));

  res.json({
    id: quiz.id,
    title: quiz.title,
    creator: quiz.creator,
    questions: clientQuestions
  });
});

// Submit friend answers and evaluate
app.post('/api/quizzes/:id/submit', (req, res) => {
  const quiz = quizzes[req.params.id];
  if (!quiz) {
    return res.status(404).json({ success: false, message: "Quiz not found" });
  }

  const { name, answers, timeSec } = req.body;
  const playerName = (name || "Anonymous Friend").trim().substring(0, 25);
  const playerAnswers = Array.isArray(answers) ? answers : [];
  const duration = Math.max(1, parseInt(timeSec) || 30);

  let correctCount = 0;
  const results = quiz.questions.map((q, idx) => {
    const chosen = playerAnswers[idx];
    const isCorrect = chosen === q.correctIndex;
    if (isCorrect) correctCount++;
    return {
      questionId: q.id,
      text: q.text,
      chosenIndex: chosen,
      correctIndex: q.correctIndex,
      isCorrect,
      roast: q.roast,
      meme: q.meme
    };
  });

  // Score algorithm: 100 base points per correct answer + time bonus
  const baseScore = correctCount * 100;
  const timeBonus = Math.max(0, Math.floor((300 - duration) / 3));
  const totalScore = correctCount > 0 ? baseScore + timeBonus : 0;

  if (!leaderboards[quiz.id]) {
    leaderboards[quiz.id] = [];
  }

  const entry = {
    name: playerName,
    score: totalScore,
    accuracy: `${correctCount}/${quiz.questions.length}`,
    timeSec: duration,
    date: new Date().toISOString()
  };

  leaderboards[quiz.id].push(entry);
  leaderboards[quiz.id].sort((a, b) => b.score - a.score || a.timeSec - b.timeSec);

  saveData(LEADERBOARDS_FILE, leaderboards);

  const rank = leaderboards[quiz.id].findIndex(
    e => e.name === playerName && e.score === totalScore && e.timeSec === duration
  ) + 1;

  res.json({
    success: true,
    score: totalScore,
    correctCount,
    totalQuestions: quiz.questions.length,
    accuracy: entry.accuracy,
    timeSec: duration,
    rank,
    results,
    totalParticipants: leaderboards[quiz.id].length
  });
});

// Get leaderboard
app.get('/api/quizzes/:id/leaderboard', (req, res) => {
  const board = leaderboards[req.params.id] || [];
  const quiz = quizzes[req.params.id];

  // Decorate with meme ranks
  const formatted = board.map((item, index) => {
    let rankTier = 'regular';
    let badge = '👾';
    let rankTitle = 'Phone Overheater';

    if (index === 0) {
      rankTier = 'champion';
      badge = '🕶️👑';
      rankTitle = 'GigaChad Archon';
    } else if (index === 1) {
      rankTier = 'top2';
      badge = '🔥🥈';
      rankTitle = 'Pro Phone Cooler';
    } else if (index === 2) {
      rankTier = 'top3';
      badge = '🥉✨';
      rankTitle = 'Certified Daddu';
    } else if (index < 5) {
      rankTier = 'mid';
      badge = '🐸';
      rankTitle = 'Tiddi Enthusiast';
    } else {
      rankTier = 'low';
      badge = '💀';
      rankTitle = 'Flat DEF Victim';
    }

    return {
      rank: index + 1,
      name: item.name,
      score: item.score,
      accuracy: item.accuracy,
      timeSec: item.timeSec,
      date: item.date,
      rankTier,
      badge,
      rankTitle
    };
  });

  res.json({
    quizTitle: quiz ? quiz.title : "Leaderboard",
    leaderboard: formatted
  });
});

if (!process.env.VERCEL) {
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🎉 Birthday App Server running on http://localhost:${PORT}`);
  });
}

module.exports = app;
