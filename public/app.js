/* =========================================================
   MEME DATA & EMBEDDED GRAPHICS (100% RELIABLE & NEVER FAILS)
   ========================================================= */

const MEMES = {
  cat_thinking: {
    title: "Cat Analyzing Deeply...",
    url: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="360" height="240" viewBox="0 0 360 240"><rect width="360" height="240" fill="%23111111"/><rect x="15" y="15" width="330" height="210" fill="%23FFE600" stroke="%23FFFFFF" stroke-width="4" rx="12"/><text x="180" y="105" font-size="64" text-anchor="middle">🐱🤔</text><text x="180" y="160" font-size="22" font-weight="900" font-family="sans-serif" text-anchor="middle" fill="%23111111">HMM... THINK CAREFULLY</text><text x="180" y="195" font-size="14" font-weight="800" font-family="sans-serif" text-anchor="middle" fill="%23FF1493">ANALYZING ASH'S LOGIC</text></svg>`,
    fallbackSvg: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="360" height="240" viewBox="0 0 360 240"><rect width="360" height="240" fill="%23111"/><text x="180" y="120" font-size="60" text-anchor="middle">🐱🤔</text></svg>`
  },
  ralph_waving: {
    title: "Is She Badash Herself?!",
    url: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="360" height="240" viewBox="0 0 360 240"><rect width="360" height="240" fill="%23111111"/><rect x="15" y="15" width="330" height="210" fill="%23FF1493" stroke="%23FFFFFF" stroke-width="4" rx="12"/><text x="180" y="105" font-size="64" text-anchor="middle">👑🕶️✨</text><text x="180" y="155" font-size="20" font-weight="900" font-family="sans-serif" text-anchor="middle" fill="%23FFFFFF">IS SHE BADASH HERSELF?!</text><text x="180" y="190" font-size="14" font-weight="800" font-family="sans-serif" text-anchor="middle" fill="%23FFE600">100% CERTIFIED ACCURACY</text></svg>`,
    fallbackSvg: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="360" height="240" viewBox="0 0 360 240"><rect width="360" height="240" fill="%23111"/><text x="180" y="120" font-size="60" text-anchor="middle">👑🕶️</text></svg>`
  },
  kurt_stare: {
    title: "Kurt Angle Unblinking Stare",
    url: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="360" height="240" viewBox="0 0 360 240"><rect width="360" height="240" fill="%23111111"/><rect x="15" y="15" width="330" height="210" fill="%2300F0FF" stroke="%23111111" stroke-width="4" rx="12"/><text x="180" y="105" font-size="64" text-anchor="middle">👁️👄👁️</text><text x="180" y="155" font-size="20" font-weight="900" font-family="sans-serif" text-anchor="middle" fill="%23111111">UNBLINKING 1000-YARD STARE</text><text x="180" y="190" font-size="14" font-weight="800" font-family="sans-serif" text-anchor="middle" fill="%23FF1493">JUDGING YOUR ANSWER</text></svg>`,
    fallbackSvg: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="360" height="240" viewBox="0 0 360 240"><rect width="360" height="240" fill="%23111"/><text x="180" y="120" font-size="60" text-anchor="middle">👁️👄👁️</text></svg>`
  },
  red_angry: {
    title: "ACCESS DENIED! Pure Rage",
    url: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="360" height="240" viewBox="0 0 360 240"><rect width="360" height="240" fill="%23111111"/><rect x="15" y="15" width="330" height="210" fill="%23FF2A2A" stroke="%23FFFFFF" stroke-width="4" rx="12"/><text x="180" y="105" font-size="64" text-anchor="middle">😡🔴💥</text><text x="180" y="155" font-size="22" font-weight="900" font-family="sans-serif" text-anchor="middle" fill="%23FFFFFF">❌ ACCESS DENIED!</text><text x="180" y="190" font-size="14" font-weight="800" font-family="sans-serif" text-anchor="middle" fill="%23FFE600">YOU ARE 0% NORMAL!</text></svg>`,
    fallbackSvg: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="360" height="240" viewBox="0 0 360 240"><rect width="360" height="240" fill="%23FF2A2A"/><text x="180" y="120" font-size="60" text-anchor="middle">😡</text></svg>`
  },
  cat_wide: {
    title: "Wide Eyed Shock",
    url: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="360" height="240" viewBox="0 0 360 240"><rect width="360" height="240" fill="%23111111"/><rect x="15" y="15" width="330" height="210" fill="%2300FF66" stroke="%23111111" stroke-width="4" rx="12"/><text x="180" y="105" font-size="64" text-anchor="middle">😳🐸</text><text x="180" y="155" font-size="20" font-weight="900" font-family="sans-serif" text-anchor="middle" fill="%23111111">SHOCK & DISBELIEF</text><text x="180" y="190" font-size="14" font-weight="800" font-family="sans-serif" text-anchor="middle" fill="%23FF5500">DADDU IS WATCHING YOU</text></svg>`,
    fallbackSvg: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="360" height="240" viewBox="0 0 360 240"><rect width="360" height="240" fill="%23111"/><text x="180" y="120" font-size="60" text-anchor="middle">😳</text></svg>`
  },
  pigeon_wall: {
    title: "Molten Phone Alert",
    url: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="360" height="240" viewBox="0 0 360 240"><rect width="360" height="240" fill="%23111111"/><rect x="15" y="15" width="330" height="210" fill="%23FF5500" stroke="%23FFFFFF" stroke-width="4" rx="12"/><text x="180" y="105" font-size="64" text-anchor="middle">📱🔥🌋</text><text x="180" y="155" font-size="20" font-weight="900" font-family="sans-serif" text-anchor="middle" fill="%23FFFFFF">PHONE HEATING TO 450°C</text><text x="180" y="190" font-size="14" font-weight="800" font-family="sans-serif" text-anchor="middle" fill="%23FFE600">STILL NO COOLER IN SIGHT</text></svg>`,
    fallbackSvg: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="360" height="240" viewBox="0 0 360 240"><rect width="360" height="240" fill="%23FF5500"/><text x="180" y="120" font-size="60" text-anchor="middle">🔥</text></svg>`
  },
  bobby_bike: {
    title: "Bobby Hill on Bike",
    url: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="360" height="240" viewBox="0 0 360 240"><rect width="360" height="240" fill="%23111111"/><rect x="15" y="15" width="330" height="210" fill="%23FFE600" stroke="%23111111" stroke-width="4" rx="12"/><text x="180" y="105" font-size="64" text-anchor="middle">🚲🏃‍♂️💨</text><text x="180" y="155" font-size="18" font-weight="900" font-family="sans-serif" text-anchor="middle" fill="%23111111">PEDALING AWAY WITH COOLER</text><text x="180" y="190" font-size="14" font-weight="800" font-family="sans-serif" text-anchor="middle" fill="%23FF1493">CATCH IT IF YOU CAN!</text></svg>`,
    fallbackSvg: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="360" height="240" viewBox="0 0 360 240"><rect width="360" height="240" fill="%23111"/><text x="180" y="120" font-size="60" text-anchor="middle">🚲</text></svg>`
  },
  minion_dark: {
    title: "In The Void Without A Cooler",
    url: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="360" height="240" viewBox="0 0 360 240"><rect width="360" height="240" fill="%23111111"/><rect x="15" y="15" width="330" height="210" fill="%237928CA" stroke="%23FFFFFF" stroke-width="4" rx="12"/><text x="180" y="105" font-size="64" text-anchor="middle">🟡👀🕳️</text><text x="180" y="155" font-size="20" font-weight="900" font-family="sans-serif" text-anchor="middle" fill="%23FFFFFF">LOST IN THE VOID</text><text x="180" y="190" font-size="14" font-weight="800" font-family="sans-serif" text-anchor="middle" fill="%2300F0FF">WHERE IS THE PHONE COOLER?!</text></svg>`,
    fallbackSvg: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="360" height="240" viewBox="0 0 360 240"><rect width="360" height="240" fill="%237928CA"/><text x="180" y="120" font-size="60" text-anchor="middle">👀</text></svg>`
  },
  crying_kid: {
    title: "Internal Screaming",
    url: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="360" height="240" viewBox="0 0 360 240"><rect width="360" height="240" fill="%23111111"/><rect x="15" y="15" width="330" height="210" fill="%23FF1493" stroke="%23FFFFFF" stroke-width="4" rx="12"/><text x="180" y="105" font-size="64" text-anchor="middle">🥲💀😭</text><text x="180" y="155" font-size="20" font-weight="900" font-family="sans-serif" text-anchor="middle" fill="%23FFFFFF">INTERNAL SCREAMING</text><text x="180" y="190" font-size="14" font-weight="800" font-family="sans-serif" text-anchor="middle" fill="%23FFE600">ZERO PHONE COOLERS FOUND</text></svg>`,
    fallbackSvg: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="360" height="240" viewBox="0 0 360 240"><rect width="360" height="240" fill="%23FF1493"/><text x="180" y="120" font-size="60" text-anchor="middle">😭</text></svg>`
  }
};

function getMemeImg(key) {
  const meme = MEMES[key] || MEMES.cat_thinking;
  return meme.url;
}

function attachImageFallback(imgElement, memeKey) {
  const meme = MEMES[memeKey] || MEMES.cat_thinking;
  imgElement.onerror = () => {
    imgElement.src = meme.fallbackSvg;
  };
}

/* =========================================================
   WEB AUDIO SOUND SYNTHESIZER (8-BIT RETRO FX)
   ========================================================= */

class SoundSynthesizer {
  constructor() {
    this.enabled = true;
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
  }

  toggleSound() {
    this.enabled = !this.enabled;
    const icon = document.getElementById('sound-icon');
    if (icon) icon.innerText = this.enabled ? '🔊' : '🔇';
  }

  playBeep(freq, type = 'square', duration = 0.1, delay = 0) {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    setTimeout(() => {
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + duration);
      } catch (e) {
        console.warn('Audio play error:', e);
      }
    }, delay * 1000);
  }

  playCorrect() {
    this.playBeep(523.25, 'triangle', 0.08, 0);    // C5
    this.playBeep(659.25, 'triangle', 0.08, 0.08); // E5
    this.playBeep(783.99, 'triangle', 0.15, 0.16); // G5
    this.playBeep(1046.5, 'triangle', 0.25, 0.24); // C6
  }

  playWrong() {
    this.playBeep(220, 'sawtooth', 0.12, 0);
    this.playBeep(185, 'sawtooth', 0.15, 0.1);
    this.playBeep(140, 'sawtooth', 0.3, 0.2);
  }

  playPop() {
    this.playBeep(800, 'sine', 0.05, 0);
  }

  playWish() {
    // Genshin 5-star golden wish arpeggio
    [440, 554.37, 659.25, 830.61, 880, 1108.7, 1318.5].forEach((f, i) => {
      this.playBeep(f, 'sine', 0.2, i * 0.07);
    });
  }

  playCooling() {
    this.playBeep(400, 'sine', 0.06, 0);
  }

  playFanfare() {
    const notes = [523.25, 523.25, 523.25, 659.25, 783.99, 1046.5];
    notes.forEach((f, i) => {
      this.playBeep(f, 'square', 0.12, i * 0.12);
    });
  }
}

const sound = new SoundSynthesizer();

/* =========================================================
   SOLID COLOR CONFETTI ENGINE
   ========================================================= */

class SolidConfettiEngine {
  constructor() {
    this.canvas = document.getElementById('confetti-canvas');
    this.ctx = this.canvas ? this.canvas.getContext('2d') : null;
    this.particles = [];
    this.animating = false;
    this.colors = ['#FFE600', '#FF1493', '#00F0FF', '#00FF66', '#FF5500', '#FFFFFF', '#111111'];
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  explode(x = window.innerWidth / 2, y = window.innerHeight / 2, count = 90) {
    if (!this.canvas || !this.ctx) return;
    this.resize();
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 4 + Math.random() * 9;
      this.particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2,
        size: 8 + Math.random() * 10,
        color: this.colors[Math.floor(Math.random() * this.colors.length)],
        rotation: Math.random() * 360,
        vRot: (Math.random() - 0.5) * 15,
        opacity: 1,
        shape: Math.random() > 0.5 ? 'rect' : 'circle'
      });
    }

    if (!this.animating) {
      this.animating = true;
      this.loop();
    }
  }

  loop() {
    if (!this.ctx) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.22; // gravity
      p.vx *= 0.98;
      p.rotation += p.vRot;
      p.opacity -= 0.012;

      this.ctx.save();
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate((p.rotation * Math.PI) / 180);
      this.ctx.fillStyle = p.color;
      this.ctx.globalAlpha = Math.max(0, p.opacity);

      if (p.shape === 'rect') {
        this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      } else {
        this.ctx.beginPath();
        this.ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
        this.ctx.fill();
      }

      this.ctx.restore();

      if (p.opacity <= 0 || p.y > this.canvas.height + 50) {
        this.particles.splice(i, 1);
      }
    }

    if (this.particles.length > 0) {
      requestAnimationFrame(() => this.loop());
    } else {
      this.animating = false;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
}

const confetti = new SolidConfettiEngine();

/* =========================================================
   CORE APPLICATION STATE & NAVIGATION
   ========================================================= */

const app = {
  currentScreen: 'landing',

  showScreen(screenId) {
    document.querySelectorAll('.screen-section').forEach(el => el.classList.remove('active'));
    const target = document.getElementById(`screen-${screenId}`);
    if (target) {
      target.classList.add('active');
      this.currentScreen = screenId;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  },

  openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.add('active');
  },

  closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove('active');
  },

  openCreatorAuthModal() {
    const input = document.getElementById('auth-secret-input');
    if (input) input.value = '';
    const err = document.getElementById('auth-error-msg');
    if (err) err.style.display = 'none';
    this.openModal('modal-creator-auth');
  },

  async openLeaderboard(quizId = null) {
    try {
      // If no quizId given, try to fetch the latest quiz
      if (!quizId) {
        const latestRes = await fetch('/api/latest-quiz');
        const latestData = await latestRes.json();
        if (latestData.hasQuiz) {
          quizId = latestData.id;
        }
      }

      if (!quizId) {
        alert("No quiz leaderboards available yet! Ask Ash to publish a quiz in her Creator Studio! 👑");
        return;
      }

      const res = await fetch(`/api/quizzes/${quizId}/leaderboard`);
      const data = await res.json();
      
      const titleEl = document.getElementById('leaderboard-modal-title');
      if (titleEl) titleEl.innerText = `${data.quizTitle} Leaderboard`;

      const container = document.getElementById('leaderboard-items-container');
      if (!container) return;

      if (!data.leaderboard || data.leaderboard.length === 0) {
        container.innerHTML = `<div style="text-align: center; padding: 20px; font-weight: 800;">No submissions yet! Be the first to play! 🎯</div>`;
      } else {
        container.innerHTML = data.leaderboard.map((item, idx) => {
          let rankClass = '';
          let emojiAnimClass = '';
          if (idx === 0) {
            rankClass = 'rank-1';
            emojiAnimClass = 'swag-dance';
          } else if (idx === 1) rankClass = 'rank-2';
          else if (idx === 2) rankClass = 'rank-3';

          // 4th position divider: "Do they even deserve to be Ash's friend? 🤔"
          let dividerHtml = '';
          if (idx === 3) {
            dividerHtml = `
              <div class="leaderboard-divider">
                <div class="divider-line"></div>
                <div class="divider-text">Do they even deserve to be Ash's friend? 🤔</div>
              </div>
            `;
          }

          return `
            ${dividerHtml}
            <div class="leaderboard-item ${rankClass}">
              <div class="leaderboard-left">
                <span class="rank-number">#${item.rank}</span>
                <span class="rank-emoji-box ${emojiAnimClass}">${item.badge}</span>
                <div>
                  <div class="rank-name">${item.name}</div>
                  <div class="rank-title-badge">${item.rankTitle}</div>
                </div>
              </div>
              <div style="text-align: right;">
                <div class="rank-score">${item.score} PTS</div>
                <div class="rank-sub">🎯 ${item.accuracy} • ⏱️ ${item.timeSec}s</div>
              </div>
            </div>
          `;
        }).join('');
      }

      this.openModal('modal-leaderboard');
    } catch (e) {
      console.error('Failed to load leaderboard', e);
      alert('Could not load leaderboard data.');
    }
  }
};

/* =========================================================
   STORY QUEST (5 INTERACTIVE PUZZLE STAGES)
   ========================================================= */

const storyQuest = {
  currentStage: 1,
  phoneTemp: 420,
  coolingInterval: null,

  start() {
    this.currentStage = 1;
    app.showScreen('story');
    this.renderStage();
  },

  renderStage() {
    const indicator = document.getElementById('story-stage-indicator');
    const title = document.getElementById('story-title');
    const desc = document.getElementById('story-description');
    const memeImg = document.getElementById('story-meme-img');
    const memeCaption = document.getElementById('story-meme-caption');
    const area = document.getElementById('story-interactive-area');
    const feedback = document.getElementById('story-feedback');

    if (feedback) feedback.style.display = 'none';
    if (indicator) indicator.innerText = `STAGE ${this.currentStage} / 5`;

    if (this.currentStage === 1) {
      // Stage 1: Identity Clearance
      title.innerText = "Stage 1: Identity & Legal Alter-Ego Clearance 🛑";
      desc.innerText = "Before entering the Birthday Vault, you must select your certified legal identities:";
      memeImg.src = getMemeImg('kurt_stare');
      attachImageFallback(memeImg, 'kurt_stare');
      memeCaption.innerText = "Kurt Angle is observing your credentials...";

      area.innerHTML = `
        <div class="options-grid two-col">
          <button class="option-btn" onclick="storyQuest.handleStage1('tiddi')">
            <span class="option-key">A</span>
            <span>🦗 Tiddi (Grasshopper menace)</span>
          </button>
          <button class="option-btn" onclick="storyQuest.handleStage1('daddu')">
            <span class="option-key">B</span>
            <span>🐸 Daddu (Certified Frog)</span>
          </button>
          <button class="option-btn" onclick="storyQuest.handleStage1('badash')">
            <span class="option-key">C</span>
            <span>😈 Badash (Chaos Incarnate)</span>
          </button>
          <button class="option-btn" onclick="storyQuest.handleStage1('normal')">
            <span class="option-key">D</span>
            <span>👤 A normal, polite, well-adjusted human</span>
          </button>
        </div>
      `;
    } else if (this.currentStage === 2) {
      // Stage 2: The Thermal Crisis
      title.innerText = "Stage 2: The Genshin Impact Thermal Meltdown 🔥";
      desc.innerText = "You launched Genshin Impact at 60 FPS on mobile. Your phone is at 420°C. Another year WITHOUT a phone cooler. How do you respond?";
      memeImg.src = getMemeImg('crying_kid');
      attachImageFallback(memeImg, 'crying_kid');
      memeCaption.innerText = "Internal crying intensifies...";

      area.innerHTML = `
        <div class="options-grid">
          <button class="option-btn" onclick="storyQuest.handleStage2(1)">
            <span class="option-key">1</span>
            <span>Fry an omelette directly on the back camera bump 🍳</span>
          </button>
          <button class="option-btn" onclick="storyQuest.handleStage2(2)">
            <span class="option-key">2</span>
            <span>Stick the phone in the freezer between frozen peas and butter 🧊</span>
          </button>
          <button class="option-btn" onclick="storyQuest.handleStage2(3)">
            <span class="option-key">3</span>
            <span>Blow on the screen like hot chai while grinding daily commissions ☕</span>
          </button>
          <button class="option-btn" onclick="storyQuest.handleStage2(4)">
            <span class="option-key">4</span>
            <span>Accept thermal doom and claim it's Pyro Elemental Resonance 🔥</span>
          </button>
        </div>
      `;
    } else if (this.currentStage === 3) {
      // Stage 3: Emergency Phone Cooling Mini-Game (Difficult + Fast Reheat)
      this.phoneTemp = 450;
      title.innerText = "Stage 3: EMERGENCY PHONE COOLING (HARDCORE) 📱❄️";
      desc.innerText = "WARNING: Your battery is at 450°C and reheating rapidly! RAPIDLY TAP the ice cube to cool it down to 24°C before detonation!";
      memeImg.src = getMemeImg('pigeon_wall');
      attachImageFallback(memeImg, 'pigeon_wall');
      memeCaption.innerText = "Pigeon banging head while your phone melts...";

      area.innerHTML = `
        <div class="cooler-game-box">
          <div style="font-size: 1.1rem; font-weight: 800;">CURRENT BATTERY TEMPERATURE</div>
          <div class="temp-display" id="game-temp-display">450°C 🔥</div>
          <div class="temp-gauge-container">
            <div class="temp-gauge-bar" id="game-temp-bar" style="width: 100%;"></div>
          </div>
          <div class="cooling-actions">
            <div class="ice-tap-target" onclick="storyQuest.tapCoolPhone()">
              🧊 DROP ICE CUBE (RAPID TAP!) ❄️
            </div>
          </div>
          <div style="margin-top: 20px;">
            <button type="button" class="solid-btn btn-orange" style="font-size: 1.15rem; font-weight: 900; padding: 14px 28px; width: 100%; max-width: 360px;" onclick="storyQuest.openAmazonHelp()">
              🆘 GET HELP 🆘
            </button>
          </div>
        </div>
      `;

      // Rapid auto reheat if player hesitates
      if (this.coolingInterval) clearInterval(this.coolingInterval);
      this.coolingInterval = setInterval(() => {
        if (this.phoneTemp < 450 && this.phoneTemp > 24) {
          this.phoneTemp += 5;
          this.updateGameTemp();
        }
      }, 220);
    } else if (this.currentStage === 4) {
      // Stage 4: Catch The Runaway Phone Cooler (1-Hit Catch)
      if (this.coolingInterval) clearInterval(this.coolingInterval);
      title.innerText = "Stage 4: CATCH THE RUNAWAY PHONE COOLER 🎯💨";
      desc.innerText = "The Birthday Phone Cooler is evading capture! Click it once to claim your birthday gear:";
      memeImg.src = getMemeImg('bobby_bike');
      attachImageFallback(memeImg, 'bobby_bike');
      memeCaption.innerText = "Bobby Hill pedaling away with your cooler...";

      area.innerHTML = `
        <div style="position: relative; height: 260px; background-color: var(--bg-black); border-radius: 12px; border: var(--border-thick); overflow: hidden; display: flex; align-items: center; justify-content: center;" id="cooler-arena">
          <button id="runaway-cooler-btn" class="solid-btn btn-yellow" style="position: absolute; transition: all 0.15s ease;" onmouseover="storyQuest.dodgeCooler()" onclick="storyQuest.catchCooler()">
            📱❄️ BUY PHONE COOLER (CLICK ME)
          </button>
        </div>
        <p style="font-size: 0.85rem; font-weight: 700; color: #666; margin-top: 10px; text-align: center;">
          (Click the cooler before it gets away!)
        </p>
      `;
    } else if (this.currentStage === 5) {
      // Stage 5: Grand Celebration & Interactive Cake
      title.innerText = "Stage 5: GRAND BIRTHDAY CELEBRATION! 🎂✨";
      desc.innerText = "You survived another year as Tiddi, Daddu, and Badash without a phone cooler! Click the cake candles to blow them out!";
      memeImg.src = getMemeImg('ralph_waving');
      attachImageFallback(memeImg, 'ralph_waving');
      memeCaption.innerText = "Happy Birthday from all of us!";

      area.innerHTML = `
        <div class="cake-container">
          <div class="cake-visual" id="cake-visual" onclick="storyQuest.blowCandles()">
            <div id="candle-flames"><span class="candle-flame">🔥</span><span class="candle-flame">🔥</span><span class="candle-flame">🔥</span></div>
            🎂
          </div>
          <p id="cake-instruction" style="font-size: 1.1rem; font-weight: 900; margin-top: 8px;">
            👆 CLICK THE CAKE TO BLOW OUT THE CANDLES!
          </p>

          <div id="birthday-roast-card" style="display:none; margin-top: 24px; background-color: var(--bg-yellow); border: var(--border-thick); border-radius: 14px; padding: 22px; box-shadow: var(--shadow-main); text-align: left;">
            <div class="hero-tags">
              <span class="hero-tag tag-tiddi">OFFICIAL CERTIFICATE</span>
            </div>
            <h3 style="font-size: 1.5rem; font-weight: 900; margin: 10px 0;">
              🎉 HAPPY BIRTHDAY TIDDI / DADDU / BADASH! 👑
            </h3>
            <p style="font-weight: 700; line-height: 1.5; color: #222; margin-bottom: 14px;">
              May your next Genshin 5-star win the 50/50, may your artifacts NEVER roll flat DEF again, and may this finally be the year you acquire a certified phone cooler! ❤️
            </p>
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
              <button class="solid-btn btn-pink" onclick="confetti.explode(window.innerWidth/2, window.innerHeight/2, 120); sound.playFanfare();">
                🎊 BLAST MORE CONFETTI
              </button>
            </div>
          </div>
        </div>
      `;
      confetti.explode(window.innerWidth / 2, window.innerHeight / 3, 100);
      sound.playWish();
    }
  },

  handleStage1(choice) {
    const feedback = document.getElementById('story-feedback');
    const memeImg = document.getElementById('story-meme-img');

    if (choice === 'normal') {
      sound.playWrong();
      memeImg.src = getMemeImg('red_angry');
      attachImageFallback(memeImg, 'red_angry');
      feedback.style.display = 'block';
      feedback.style.backgroundColor = 'var(--bg-red)';
      feedback.style.color = '#fff';
      feedback.innerText = "❌ ACCESS DENIED! Who are you kidding?! You are 0% normal. Pick your true nicknames!";
      document.querySelector('.puzzle-card').classList.add('shake');
      setTimeout(() => document.querySelector('.puzzle-card').classList.remove('shake'), 500);
    } else {
      sound.playCorrect();
      feedback.style.display = 'block';
      feedback.style.backgroundColor = 'var(--bg-lime)';
      feedback.style.color = '#111';
      feedback.innerText = `✅ Legal identity confirmed as certified ${choice.toUpperCase()}! Proceeding to Thermal Analysis...`;
      setTimeout(() => {
        this.currentStage = 2;
        this.renderStage();
      }, 1200);
    }
  },

  handleStage2(optionNum) {
    sound.playCorrect();
    const feedback = document.getElementById('story-feedback');
    feedback.style.display = 'block';
    feedback.style.backgroundColor = 'var(--bg-lime)';
    feedback.style.color = '#111';
    feedback.innerText = "🔥 Truly authentic resinless gamer response. Emergency cooling protocol engaged!";
    setTimeout(() => {
      this.currentStage = 3;
      this.renderStage();
    }, 1200);
  },

  openAmazonHelp() {
    sound.playPop();
    window.open('https://www.amazon.in/s?k=mobile+phone+cooler+for+gaming', '_blank');
  },

  tapCoolPhone() {
    sound.playCooling();
    this.phoneTemp -= 12; // Challenging cooling rate
    if (this.phoneTemp <= 24) {
      this.phoneTemp = 24;
      this.updateGameTemp();
      if (this.coolingInterval) clearInterval(this.coolingInterval);
      sound.playFanfare();
      confetti.explode();

      const feedback = document.getElementById('story-feedback');
      if (feedback) {
        feedback.style.display = 'block';
        feedback.style.backgroundColor = 'var(--bg-cyan)';
        feedback.style.color = '#111';
        feedback.innerText = "❄️ PHONE COOLED DOWN TO 24°C! Battery saved from total explosion!";
      }

      setTimeout(() => {
        this.currentStage = 4;
        this.renderStage();
      }, 1400);
    } else {
      this.updateGameTemp();
    }
  },

  updateGameTemp() {
    const disp = document.getElementById('game-temp-display');
    const bar = document.getElementById('game-temp-bar');
    if (!disp || !bar) return;

    disp.innerText = `${Math.round(this.phoneTemp)}°C ${this.phoneTemp > 100 ? '🔥' : '❄️'}`;
    const pct = Math.max(0, Math.min(100, (this.phoneTemp / 450) * 100));
    bar.style.width = `${pct}%`;
    bar.style.backgroundColor = this.phoneTemp > 80 ? 'var(--bg-red)' : 'var(--bg-cyan)';
  },

  dodgeCooler() {
    const btn = document.getElementById('runaway-cooler-btn');
    const arena = document.getElementById('cooler-arena');
    if (!btn || !arena) return;

    sound.playPop();
    const maxX = arena.clientWidth - btn.clientWidth - 20;
    const maxY = arena.clientHeight - btn.clientHeight - 20;
    const randX = Math.max(10, Math.floor(Math.random() * maxX));
    const randY = Math.max(10, Math.floor(Math.random() * maxY));

    btn.style.left = `${randX}px`;
    btn.style.top = `${randY}px`;
  },

  catchCooler() {
    sound.playCorrect();
    confetti.explode();
    const feedback = document.getElementById('story-feedback');
    if (feedback) {
      feedback.style.display = 'block';
      feedback.style.backgroundColor = 'var(--bg-lime)';
      feedback.style.color = '#111';
      feedback.innerText = "🎉 YOU CAUGHT THE COOLER! Unlocking Grand Celebration...";
    }
    setTimeout(() => {
      this.currentStage = 5;
      this.renderStage();
    }, 1200);
  },

  blowCandles() {
    sound.playWish();
    confetti.explode(window.innerWidth / 2, window.innerHeight / 2, 140);
    const flames = document.getElementById('candle-flames');
    if (flames) flames.innerHTML = `<span>💨</span><span>💨</span><span>💨</span>`;
    const instr = document.getElementById('cake-instruction');
    if (instr) instr.innerText = "✨ CANDLES BLOWN! MAKE A WISH! ✨";
    const card = document.getElementById('birthday-roast-card');
    if (card) card.style.display = 'block';
  }
};

/* =========================================================
   FRIENDS QUIZ PLAYER ENGINE (ONLY ASH-CREATED QUIZZES)
   ========================================================= */

const quizPlayer = {
  currentQuizId: null,
  currentQuizData: null,
  playerName: '',
  currentIndex: 0,
  playerAnswers: [],
  startTime: null,
  timerInterval: null,

  async openFriendQuizPicker() {
    try {
      const res = await fetch('/api/quizzes');
      const data = await res.json();

      if (!data.quizzes || data.quizzes.length === 0) {
        alert("👑 Ash hasn't published her custom questionnaire yet!\nTell the Birthday Queen to create one in her Creator Studio!");
        return;
      }

      // If only 1 quiz exists, jump straight into it!
      if (data.quizzes.length === 1) {
        this.initPlay(data.quizzes[0].id);
        return;
      }

      const container = document.getElementById('available-quizzes-container');
      if (container) {
        container.innerHTML = `
          <div style="display: flex; flex-direction: column; gap: 10px;">
            <div style="font-weight: 900; font-size: 0.85rem;">AVAILABLE QUIZZES CREATED BY ASH:</div>
            ${data.quizzes.map(q => `
              <div style="background-color: #FFFDF0; border: var(--border-thick); border-radius: 10px; padding: 14px; display: flex; justify-content: space-between; align-items: center; box-shadow: var(--shadow-small);">
                <div>
                  <div style="font-weight: 900; font-size: 1rem;">${q.title}</div>
                  <div style="font-size: 0.8rem; font-weight: 700; color: #555;">By ${q.creator} • ${q.questionCount} Questions</div>
                </div>
                <button class="solid-btn btn-pink" style="padding: 8px 14px; font-size: 0.85rem;" onclick="quizPlayer.initPlay('${q.id}')">
                  PLAY ▶️
                </button>
              </div>
            `).join('')}
          </div>
        `;
      }

      app.openModal('modal-quiz-picker');
    } catch (e) {
      alert('Could not load quizzes: ' + e.message);
    }
  },

  playDirectCode() {
    const input = document.getElementById('direct-quiz-code-input');
    let code = (input ? input.value : '').trim();
    if (!code) {
      alert('Please enter a Quiz Code or Link!');
      return;
    }

    // If full URL pasted, extract ?quiz=xyz
    if (code.includes('quiz=')) {
      const match = code.match(/quiz=([^&]+)/);
      if (match) code = match[1];
    }

    app.closeModal('modal-quiz-picker');
    this.initPlay(code);
  },

  async openLatestLeaderboard() {
    try {
      const res = await fetch('/api/latest-quiz');
      const data = await res.json();
      if (data.hasQuiz) {
        app.openLeaderboard(data.id);
      } else {
        alert("No custom quiz has been created yet! Ask Ash to publish one in her Creator Studio! 👑");
      }
    } catch (e) {
      alert('Could not load leaderboard: ' + e.message);
    }
  },

  initPlay(quizId) {
    if (!quizId) return;
    this.currentQuizId = quizId;
    app.closeModal('modal-quiz-picker');
    const input = document.getElementById('player-name-input');
    if (input) input.value = '';
    app.openModal('modal-name-entry');
  },

  generateRandomName() {
    const funnyNames = [
      "Qiqi C7 Haver",
      "Emergency Phone Cooler",
      "0 Primogem Andy",
      "Flat DEF Enthusiast",
      "Resinless Paimon",
      "Certified Tiddi Fan",
      "Daddu's Victim #1",
      "Molten Phone Survivor",
      "Badash Appreciator",
      "Freezer Phone Specialist",
      "Pyro Resonance Phone"
    ];
    const picked = funnyNames[Math.floor(Math.random() * funnyNames.length)];
    const input = document.getElementById('player-name-input');
    if (input) {
      input.value = picked;
      sound.playPop();
    }
  },

  async startWithPlayerName() {
    const input = document.getElementById('player-name-input');
    this.playerName = (input ? input.value : '').trim() || 'Anonymous Friend';
    app.closeModal('modal-name-entry');

    try {
      const res = await fetch(`/api/quizzes/${this.currentQuizId}`);
      if (!res.ok) throw new Error('Quiz not found');
      this.currentQuizData = await res.json();
      this.currentIndex = 0;
      this.playerAnswers = [];
      this.startTime = Date.now();

      app.showScreen('quiz');
      this.startTimer();
      this.renderQuestion();
    } catch (e) {
      alert('Could not load quiz: ' + e.message);
    }
  },

  startTimer() {
    if (this.timerInterval) clearInterval(this.timerInterval);
    const display = document.getElementById('quiz-timer-display');
    this.timerInterval = setInterval(() => {
      const elapsed = Math.floor((Date.now() - this.startTime) / 1000);
      const mins = String(Math.floor(elapsed / 60)).padStart(2, '0');
      const secs = String(elapsed % 60).padStart(2, '0');
      if (display) display.innerText = `${mins}:${secs}`;
    }, 1000);
  },

  renderQuestion() {
    const q = this.currentQuizData.questions[this.currentIndex];
    const pill = document.getElementById('quiz-progress-pill');
    const text = document.getElementById('quiz-question-text');
    const memeImg = document.getElementById('quiz-meme-img');
    const memeCaption = document.getElementById('quiz-meme-caption');
    const container = document.getElementById('quiz-options-container');
    const feedback = document.getElementById('quiz-feedback-box');

    if (feedback) feedback.style.display = 'none';
    if (pill) pill.innerText = `QUESTION ${this.currentIndex + 1} / ${this.currentQuizData.questions.length}`;
    if (text) text.innerText = q.text;

    const memeKey = q.meme || 'cat_thinking';
    if (memeImg) {
      memeImg.src = getMemeImg(memeKey);
      attachImageFallback(memeImg, memeKey);
    }
    if (memeCaption) memeCaption.innerText = MEMES[memeKey]?.title || "Think carefully...";

    if (container) {
      container.innerHTML = q.options.map((opt, idx) => `
        <button class="option-btn" onclick="quizPlayer.selectOption(${idx})">
          <span class="option-key">${String.fromCharCode(65 + idx)}</span>
          <span>${opt}</span>
        </button>
      `).join('');
    }
  },

  selectOption(optionIndex) {
    sound.playPop();
    this.playerAnswers.push(optionIndex);

    if (this.currentIndex + 1 < this.currentQuizData.questions.length) {
      this.currentIndex++;
      this.renderQuestion();
    } else {
      this.finishAndSubmit();
    }
  },

  async finishAndSubmit() {
    if (this.timerInterval) clearInterval(this.timerInterval);
    const duration = Math.max(1, Math.floor((Date.now() - this.startTime) / 1000));

    try {
      const res = await fetch(`/api/quizzes/${this.currentQuizId}/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: this.playerName,
          answers: this.playerAnswers,
          timeSec: duration
        })
      });
      const result = await res.json();
      this.displayResults(result);
    } catch (e) {
      alert('Error submitting results: ' + e.message);
    }
  },

  displayResults(data) {
    app.showScreen('result');

    document.getElementById('result-score-val').innerText = data.score;
    document.getElementById('result-accuracy-val').innerText = data.accuracy;
    document.getElementById('result-rank-val').innerText = `#${data.rank}`;

    const memeImg = document.getElementById('result-meme-img');
    const memeCaption = document.getElementById('result-meme-caption');

    if (data.correctCount === data.totalQuestions) {
      sound.playFanfare();
      confetti.explode(window.innerWidth / 2, window.innerHeight / 2, 100);
      memeImg.src = getMemeImg('ralph_waving');
      attachImageFallback(memeImg, 'ralph_waving');
      memeCaption.innerText = "100% Accuracy! Is she Badash herself?! 👑🕶️";
    } else if (data.correctCount >= 2) {
      sound.playCorrect();
      memeImg.src = getMemeImg('cat_wide');
      attachImageFallback(memeImg, 'cat_wide');
      memeCaption.innerText = "Decent effort, but your phone is still overheating!";
    } else {
      sound.playWrong();
      memeImg.src = getMemeImg('crying_kid');
      attachImageFallback(memeImg, 'crying_kid');
      memeCaption.innerText = "Do you even deserve to be Ash's friend?! 💀";
    }
  }
};

/* =========================================================
   BIRTHDAY GIRL CREATOR STUDIO
   ========================================================= */

const creatorStudio = {
  authenticatedCode: null,
  questions: [
    {
      text: "What is my biggest red flag?",
      options: ["Losing 50/50 in Genshin", "Playing on a 500°C phone", "Saying 'just one more minute' for 4 hours", "All of the above"],
      correctIndex: 3,
      meme: "cat_thinking",
      roast: "Facts only!"
    }
  ],

  async verifyCode() {
    const input = document.getElementById('auth-secret-input');
    const code = (input ? input.value : '').trim();
    const errMsg = document.getElementById('auth-error-msg');

    try {
      const res = await fetch('/api/auth-creator', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code })
      });
      const data = await res.json();

      if (data.success) {
        this.authenticatedCode = code;
        sound.playWish();
        app.closeModal('modal-creator-auth');
        this.renderStudio();
        app.openModal('modal-creator-studio');
      } else {
        sound.playWrong();
        if (errMsg) {
          errMsg.style.display = 'block';
          errMsg.innerText = data.message || "Invalid Passcode!";
        }
      }
    } catch (e) {
      alert('Verification request failed.');
    }
  },

  renderStudio() {
    const container = document.getElementById('custom-questions-container');
    if (!container) return;

    container.innerHTML = this.questions.map((q, qIdx) => `
      <div style="background-color: var(--bg-yellow); border: var(--border-thick); border-radius: 10px; padding: 16px; margin-bottom: 16px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
          <span style="font-weight: 900;">QUESTION #${qIdx + 1}</span>
          ${this.questions.length > 1 ? `<button class="solid-btn btn-white" style="padding: 4px 8px; font-size: 0.75rem;" onclick="creatorStudio.removeQuestion(${qIdx})">✕ DELETE</button>` : ''}
        </div>
        
        <input type="text" class="solid-input" style="margin-bottom: 10px;" value="${q.text}" placeholder="Enter question..." onchange="creatorStudio.updateQuestionText(${qIdx}, this.value)">

        <div style="margin-top: 10px;">
          <label style="font-size: 0.8rem; font-weight: 800;">OPTIONS & CORRECT ANSWER (SELECT RADIO TO MARK CORRECT):</label>
          ${q.options.map((opt, optIdx) => `
            <div style="display: flex; gap: 8px; align-items: center; margin-top: 6px;">
              <input type="radio" name="correct_${qIdx}" ${q.correctIndex === optIdx ? 'checked' : ''} onchange="creatorStudio.setCorrect(${qIdx}, ${optIdx})" style="width: 20px; height: 20px; cursor: pointer;">
              <input type="text" class="solid-input" style="padding: 8px 10px;" value="${opt}" placeholder="Option ${optIdx + 1}" onchange="creatorStudio.updateOption(${qIdx}, ${optIdx}, this.value)">
            </div>
          `).join('')}
        </div>

        <div style="display: flex; gap: 10px; margin-top: 12px; flex-wrap: wrap;">
          <div style="flex: 1; min-width: 160px;">
            <label style="font-size: 0.8rem; font-weight: 800;">MEME REACTION:</label>
            <select class="solid-input" style="padding: 8px;" onchange="creatorStudio.setMeme(${qIdx}, this.value)">
              <option value="cat_thinking" ${q.meme === 'cat_thinking' ? 'selected' : ''}>🐱 Cat Thinking</option>
              <option value="red_angry" ${q.meme === 'red_angry' ? 'selected' : ''}>😡 Red M&M Angry</option>
              <option value="crying_kid" ${q.meme === 'crying_kid' ? 'selected' : ''}>😭 Crying Kid</option>
              <option value="kurt_stare" ${q.meme === 'kurt_stare' ? 'selected' : ''}>👁️ Kurt Angle Stare</option>
              <option value="pigeon_wall" ${q.meme === 'pigeon_wall' ? 'selected' : ''}>🐦 Pigeon Headbang</option>
              <option value="bobby_bike" ${q.meme === 'bobby_bike' ? 'selected' : ''}>🚲 Bobby Hill</option>
            </select>
          </div>
          <div style="flex: 2; min-width: 200px;">
            <label style="font-size: 0.8rem; font-weight: 800;">ROAST MESSAGE:</label>
            <input type="text" class="solid-input" style="padding: 8px;" value="${q.roast || ''}" placeholder="Custom roast comment..." onchange="creatorStudio.setRoast(${qIdx}, this.value)">
          </div>
        </div>
      </div>
    `).join('');
  },

  addQuestion() {
    this.questions.push({
      text: `Custom Question ${this.questions.length + 1}`,
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      correctIndex: 0,
      meme: "cat_thinking",
      roast: "Classic Daddu logic!"
    });
    this.renderStudio();
  },

  removeQuestion(idx) {
    this.questions.splice(idx, 1);
    this.renderStudio();
  },

  updateQuestionText(qIdx, val) {
    this.questions[qIdx].text = val;
  },

  updateOption(qIdx, optIdx, val) {
    this.questions[qIdx].options[optIdx] = val;
  },

  setCorrect(qIdx, optIdx) {
    this.questions[qIdx].correctIndex = optIdx;
  },

  setMeme(qIdx, memeKey) {
    this.questions[qIdx].meme = memeKey;
  },

  setRoast(qIdx, roast) {
    this.questions[qIdx].roast = roast;
  },

  async publishQuiz() {
    const title = (document.getElementById('custom-quiz-title')?.value || "Birthday Girl's Roast Arena").trim();
    const creator = (document.getElementById('custom-quiz-creator')?.value || "Birthday Queen").trim();

    try {
      const res = await fetch('/api/quizzes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          authCode: this.authenticatedCode,
          title,
          creator,
          questions: this.questions
        })
      });

      const data = await res.json();
      if (data.success) {
        sound.playWish();
        confetti.explode();
        const shareBox = document.getElementById('custom-share-box');
        const shareInput = document.getElementById('custom-share-url');
        // Use live Vercel domain by default so shared links always work for friends everywhere
        const currentOrigin = window.location.origin;
        const liveDomain = 'https://birthday-quest-4u.vercel.app';
        const baseDomain = currentOrigin.includes('localhost') || currentOrigin.includes('127.0.0.1')
          ? liveDomain
          : currentOrigin;

        const fullUrl = `${baseDomain}/?quiz=${data.quizId}`;
        if (shareInput) shareInput.value = fullUrl;
        if (shareBox) shareBox.style.display = 'block';
      } else {
        alert(data.message || 'Could not publish quiz');
      }
    } catch (e) {
      alert('Failed to publish quiz: ' + e.message);
    }
  },

  copyShareUrl() {
    const input = document.getElementById('custom-share-url');
    if (input) {
      input.select();
      input.setSelectionRange(0, 99999);
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(input.value);
        } else {
          document.execCommand('copy');
        }
      } catch (e) {
        document.execCommand('copy');
      }
      sound.playPop();
      alert('🎉 Quiz link copied to clipboard! Share it with your friends! 🚀\n\n' + input.value);
    }
  }
};

/* =========================================================
   INITIALIZATION
   ========================================================= */

window.addEventListener('DOMContentLoaded', () => {
  // Check URL params for direct quiz link e.g. /?quiz=bday-123
  const params = new URLSearchParams(window.location.search);
  const quizId = params.get('quiz');
  if (quizId) {
    quizPlayer.initPlay(quizId);
  }
});
