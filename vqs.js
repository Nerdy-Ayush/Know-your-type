const bgaudio = document.getElementById('bgaudio');
bgaudio.volume = 0.25;

const clicksound1 = new Audio("computer-processing-sound-effects-short-click-select-01-122134.mp3");
document.querySelector(".page3").addEventListener("click", (e) => {
  if (e.target.classList.contains("b2")) {
    clicksound1.currentTime = 0;
    clicksound1.play();
    bgaudio.volume = 0.1;
  }
});

const questions = [
  {
    question: "1. What kind of physique turns you on in a woman?",
    options: ["Muscular", "Curvy", "Petite", "Doesn’t matter"]
  },
  {
    question: "2. Breast size preference?",
    options: ["Small", "Medium", "Large", "Doesn’t matter"]
  },
  {
    question: "3. Height preference?",
    options: ["Tall", "Short", "Doesn’t matter", "Just face matters"]
  },
  {
    question: "4. Personality vibe you like most?",
    options: ["Outgoing", "Introverted", "Funny", "Serious"]
  },
  {
    question: "5. Style that attracts you?",
    options: ["Casual", "Glam", "Sporty", "Vintage"]
  },
  {
    question: "6. Emotional side?",
    options: ["Deep and expressive", "Reserved", "Balanced", "Not sure"]
  },
  {
    question: "7. Preferred lifestyle?",
    options: ["Adventurous", "Homebody", "Party-goer", "Doesn’t matter"]
  },
  {
    question: "8. Intelligence type you prefer?",
    options: ["Book smart", "Street smart", "Socially smart", "Don’t care"]
  },
  {
    question: "9. You like a partner who is...",
    options: ["Dominant", "Equal", "Submissive", "Depends"]
  },
  {
    question: "10. Hobbies that attract you?",
    options: ["Fitness-focused", "Arts & crafts", "Gaming", "Reading"]
  },
  {
    question: "11. Social media presence?",
    options: ["Active poster", "Rare poster", "Only selfies", "Meme sharer"]
  },
  {
    question: "12. Communication style?",
    options: ["Texts frequently", "Occasional thoughtful", "Voice notes only", "Sporadic"]
  },
  {
    question: "13. Sense of humor?",
    options: ["Sarcastic", "Goofy", "Dry", "Dark"]
  },
  {
    question: "14. Tolerance for red flags?",
    options: ["Jealousy okay", "Independence first", "Clingy sometimes", "Freedom-loving"]
  },
  {
    question: "15. One “toxic” trait you can tolerate:",
    options: ["Flaky", "Overthinker", "Workaholic", "Drama"]
  }
];

const types = {
  "Muscle Mommy": {
    traits: ["Muscular", "Fitness-focused", "Glam", "Dominant", "Texts frequently", "Doesn’t matter"],
    message: "You’re into the ‘Muscle Mommy’—strong, confident, and lifts more than your expectations. Get ready for some heavy conversations and heavier lifts."
  },
  "Curvy Queen": {
    traits: ["Curvy", "Medium", "Balanced", "Casual", "Equal", "Homebody"],
    message: "Curvy Queen it is—soft in the right places, balanced in emotions, and probably binge-watching your favorite show right now."
  },
  "Petite Pixie": {
    traits: ["Petite", "Small", "Funny", "Casual", "Introverted", "Reading"],
    message: "Petite Pixie: small but mighty—charming wit, cozy book nights, and a heart bigger than her stature."
  },
  "Glam Goddess": {
    traits: ["Doesn’t matter", "Large", "Outgoing", "Glam", "Texts frequently", "Active poster"],
    message: "Glam Goddess: always camera-ready, lives for the spotlight, and will make you feel like every day is a runway."
  },
  "Tall Elegance": {
    traits: ["Tall", "Medium", "Serious", "Vintage", "Reserved", "Book smart"],
    message: "Tall Elegance: statuesque, thoughtful, and likely to quote classic literature over brunch."
  },
  "Homebody Honey": {
    traits: ["Doesn’t matter", "Doesn’t matter", "Short", "Homebody", "Balanced", "Reading"],
    message: "Homebody Honey: comfy nights in, deep chats on the couch, and possibly snacks queued up already."
  },
  "Party Princess": {
    traits: ["Doesn’t matter", "Large", "Outgoing", "Party-goer", "Meme sharer", "Texts frequently"],
    message: "Party Princess: lives for the weekend, always up for late-night dances, and memes are her love language."
  },
  "Sporty Spice": {
    traits: ["Muscular", "Fitness-focused", "Sporty", "Confident", "Occasional thoughtful", "Adventurous"],
    message: "Sporty Spice: always on the move, adrenaline junkie, and will challenge you to keep up—both in fitness and life."
  },
  "Bookworm Beauty": {
    traits: ["Doesn’t matter", "Small", "Introverted", "Vintage", "Book smart", "Reading"],
    message: "Bookworm Beauty: quiet strength, sharp mind, and probably knows more stories than Netflix."
  },
  "Meme Mistress": {
    traits: ["Doesn’t matter", "Doesn’t matter", "Funny", "Casual", "Socially smart", "Meme sharer"],
    message: "Meme Mistress: humor is her superpower—she’ll have you laughing at 2 AM and dragging you into obscure internet jokes."
  },
  "Vintage Vixen": {
    traits: ["Doesn’t matter", "Medium", "Serious", "Vintage", "Reserved", "Reading"],
    message: "Vintage Vixen: retro aesthetic, classic taste, and an air of mystery from another era."
  },
  "Adventurer Queen": {
    traits: ["Doesn’t matter", "Doesn’t matter", "Outgoing", "Sporty", "Adventurous", "Texts frequently"],
    message: "Adventurer Queen: always planning the next trip, fearless, and will drag you into spontaneous escapes."
  },
  "Emotional Empath": {
    traits: ["Doesn’t matter", "Medium", "Deep and expressive", "Casual", "Balanced", "Voice notes only"],
    message: "Emotional Empath: feels deeply, speaks from the heart, and will hold space for your entire mood spectrum."
  },
  "Independent Icon": {
    traits: ["Doesn’t matter", "Doesn’t matter", "Reserved", "Casual", "Independence first", "Occasional thoughtful"],
    message: "Independent Icon: self-sufficient, sets boundaries, and will push you to grow alongside her."
  },
  "Drama Diva": {
    traits: ["Doesn’t matter", "Doesn’t matter", "Serious", "Glam", "Drama", "Party-goer"],
    message: "Drama Diva: high stakes, high drama, and emotional rollercoasters are part of the package—buckle up."
  },
  "Zodiac Siren": {
    traits: ["Doesn’t matter", "Doesn’t matter", "Funny", "Glam", "Overthinking", "Meme sharer"],
    message: "Zodiac Siren: everything is aligned with the stars—your breakup? Mercury retrograde’s fault, obviously."
  }
};

let currentQuestion = 0;
let userAnswers = [];
let remainingTypes = Object.keys(types);
let lastValidTypes = [...remainingTypes];

function loadQuestion() {
  const q = questions[currentQuestion];
  const questionTextEl = document.getElementById("question-text");
  const optionsDiv = document.getElementById("options");
  if (!questionTextEl || !optionsDiv) {
    console.error("Missing #question-text or #options in HTML");
    return;
  }
  questionTextEl.textContent = q.question;
  optionsDiv.innerHTML = "";
  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.className = "b2";
    btn.dataset.answer = option;
    btn.addEventListener("click", handleAnswer);
    optionsDiv.appendChild(btn);
  });
}

function handleAnswer(e) {
  const selected = e.target.dataset.answer;
  userAnswers.push(selected);
  if (remainingTypes.length > 0) {
    lastValidTypes = [...remainingTypes];
  }
  remainingTypes = remainingTypes.filter(typeName => {
    return types[typeName].traits.includes(selected);
  });

  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  const quizDiv = document.querySelector(".page3");
  if (!quizDiv) {
    console.error("Missing .page3 container in HTML");
    return;
  }

  quizDiv.innerHTML = "<h1>Your Type:</h1>";
  let finalPool = remainingTypes.length > 0 ? remainingTypes : lastValidTypes;
  const finalType = finalPool[Math.floor(Math.random() * finalPool.length)];

  const result = document.createElement("p");
  result.textContent = types[finalType].message;
  result.style.fontSize = "50px";
  result.style.fontFamily = "cursive";
  result.style.padding = "20px";
  result.style.borderRadius = "10px";
  quizDiv.appendChild(result);

  const buttonsContainer = document.createElement("div");
  buttonsContainer.style.marginTop = "20px";
  buttonsContainer.style.display = "flex";
  buttonsContainer.style.gap = "10px";

  const btnSatisfied = document.createElement("button");
  btnSatisfied.textContent = "Satisfied";
  btnSatisfied.className = "b2";
  btnSatisfied.style.padding = "10px 20px";
  btnSatisfied.addEventListener("click", () => {
    quizDiv.innerHTML = `
      <h1>Glad you’re satisfied!</h1>
      <p>Thanks for taking the quiz.</p>
    `;
  });
  buttonsContainer.appendChild(btnSatisfied);

  const btnRetake = document.createElement("button");
  btnRetake.textContent = "Retake Quiz";
  btnRetake.className = "b2";
  btnRetake.style.padding = "10px 20px";

  const weebHover = new Audio("weeb-alert-182941.mp3");
  btnRetake.addEventListener("mouseenter", () => {
    weebHover.currentTime = 0;
    weebHover.play();
  });
  btnRetake.addEventListener("mouseleave", () => {
    weebHover.pause();
    weebHover.currentTime = 0;
  });

  btnRetake.addEventListener("click", () => {
    currentQuestion = 0;
    userAnswers = [];
    remainingTypes = Object.keys(types);
    lastValidTypes = [...remainingTypes];
    quizDiv.innerHTML = `
      <h1>Know your type</h1>
      <p id="question-text"></p>
      <div id="options"></div>
    `;
    loadQuestion();
  });

  buttonsContainer.appendChild(btnRetake);
  quizDiv.appendChild(buttonsContainer);
}

loadQuestion();
lottie.loadAnimation({
    container: document.getElementById('anime1'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'leaves.json' 
})
lottie.loadAnimation({
    container: document.getElementById('anime2'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'greybirds.json' 
})
lottie.loadAnimation({
    container: document.getElementById('anime3'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'clouds.json' 
})

