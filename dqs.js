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
    question: "1. What kind of physique turns you on?",
    options: ["Muscular", "Chubby", "Slim", "Who cares?"]
  },
  {
    question: "2. Facial hair preference?",
    options: ["Full Beard", "Clean-shaven", "Stubble", "Doesn’t matter"]
  },
  {
    question: "3. What's the vibe you go for?",
    options: ["Stoic", "Funny", "Chill", "Confident"]
  },
  {
    question: "4. Style you dig most?",
    options: ["Streetwear", "Formal", "Casual", "Traditional"]
  },
  {
    question: "5. Emotional personality?",
    options: ["Deep and expressive", "Reserved", "Balanced", "Not sure"]
  },
  {
    question: "6. Preferred lifestyle?",
    options: ["Adventurous", "Homebody", "Party-type", "Doesn’t matter"]
  },
  {
    question: "7. Height preference?",
    options: ["Tall", "Short", "Doesn’t matter", "Just cute face"]
  },
  {
    question: "8. Intelligence type that attracts you?",
    options: ["Book smart", "Street smart", "Socially smart", "Don’t care"]
  },
  {
    question: "9. In the relationship, you want someone...",
    options: ["Dominant", "Equal", "Submissive", "Depends"]
  },
  {
    question: "10. What instantly turns you off?",
    options: ["Emotional detachment", "Loud people", "Laziness", "Nothing really"]
  },
  { 
    question: "11. What kind of texter do you prefer?",
    options: ["Fast replies", "Late but thoughtful", "One-word answers", "Voice notes only"] 
  },
  { 
    question: "12. What’s their ideal weekend?", 
    options: ["Netflix & snacks", "Hiking & nature", "Gaming all day", "Party hopping"] 
  },
  { 
    question: "13. Their Instagram should be…",
    options: ["Aesthetic AF", "Zero posts", "Only memes", "Gym selfies"]
  },
  {
     question: "14. One red flag you secretly like?", 
     options: ["Jealousy", "Hot temper", "Dry texting", "Oversharing"] 
  },
  { 
    question: "15. Pick a toxic trait you can tolerate:", 
    options: ["Ghosting once in a while", "Attention-seeking", "Being too chill", "Overthinking"] 
  }
];

const types = {
  "Alpha Chad": {
    traits: ["Muscular", "Full Beard", "Confident", "Streetwear", "Dominant"],
    message: "You're into Alpha Chads — jacked, loud, full-beard energy. Testosterone has entered the chat."
  },
  "Soft Boi": {
    traits: ["Slim", "Clean-shaven", "Deep and expressive", "Casual", "Reserved"],
    message: "You're into Soft Bois — artsy eyes, deep convos, and an Instagram full of film pics and sadness."
  },
  "Fun Clown": {
    traits: ["Chubby", "Stubble", "Funny", "Casual", "Balanced"],
    message: "You want the funny fat guy. Can’t lift weights but can lift your mood."
  },
  "Mysterious Introvert": {
    traits: ["Slim", "Stubble", "Stoic", "Formal", "Homebody"],
    message: "You're into the hoodie-up, eyes-down, writes-poetry-on-notes-app kind of guy."
  },
  "Golden Retriever": {
    traits: ["Muscular", "Clean-shaven", "Chill", "Casual", "Equal"],
    message: "You’re into soft-hearted gym bros — they bench press emotions *and* plates."
  },
  "Cultural King": {
    traits: ["Chubby", "Full Beard", "Traditional", "Reserved", "Homebody"],
    message: "You're looking for someone desi-coded and full of sanskaar but secretly freaky."
  },
  "Party Animal": {
    traits: ["Tall", "Stubble", "Party-type", "Street smart", "Loud people"],
    message: "You're clearly into people who treat clubs as temples and tequila as prasad."
  },
  "Confused Cutie": {
    traits: ["Who cares?", "Doesn’t matter", "Not sure", "Don’t care", "Depends"],
    message: "You want someone... or maybe not? You’re either bisexual or just tired."
  },
    "Sadboy Intellectual": {
    traits: ["Deep and expressive", "Book smart", "Overthinking", "Slim", "Reserved"],
    message: "You’re into someone who probably reads Camus and smells like rainy Sundays."
  },
  "Gym Goth": {
    traits: ["Muscular", "Stoic", "Formal", "Laziness", "Zero posts", "Ghosting once in a while"],
    message: "You want someone deadlifting demons and dressing like he’s attending his own funeral."
  },
  "Green Flag Guy": {
    traits: ["Balanced", "Confident", "Equal", "Socially smart", "Late but thoughtful", "Netflix & snacks"],
    message: "You’re into emotionally intelligent kings who make eye contact *and* coffee."
  },
  "Delulu Romantic": {
    traits: ["Jealousy", "Oversharing", "Just cute face", "Not sure", "Attention-seeking"],
    message: "You're into the clingy fantasy lover who plans your wedding after one hug."
  },
  "Therapy Veteran": {
    traits: ["Book smart", "Balanced", "Voice notes only", "Hot temper", "Adventurous"],
    message: "They’ve been through it. But they journal, breathe, and will call you out in a healthy tone."
  },
  "Zodiac Freak": {
    traits: ["Don’t care", "Traditional", "Memes", "Overthinking", "Ghosting once in a while", "Dry texting"],
    message: "Everything is Mercury’s fault. Even their failed talking stages."
  },
  "Tech Bro Loner": {
    traits: ["Gaming all day", "Book smart", "One-word answers", "Doesn’t matter", "Homebody"],
    message: "You want someone who codes at 3 AM and panics when you say hi."
  }
};

let currentQuestion = 0;
let userAnswers = [];
let remainingTypes = Object.keys(types);
let lastValidTypes = [...remainingTypes];

function loadQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question-text").textContent = q.question;

  const optionsDiv = document.getElementById("options");
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
  quizDiv.innerHTML = "<h1>Your Type:</h1>";

  let finalPool = remainingTypes.length > 0 ? remainingTypes : lastValidTypes;

  const finalType = finalPool[Math.floor(Math.random() * finalPool.length)];

  const result = document.createElement("p");
  result.textContent = types[finalType].message;
  result.style.fontSize = "28px";
  result.style.fontFamily = "cursive";
  result.style.padding = "20px";
  result.style.backgroundColor = "#f3f3f3";
  result.style.borderRadius = "10px";

  quizDiv.appendChild(result);
}


loadQuestion();
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
      <p>Thanks for taking the quiz. Share it if you liked it.</p>
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

btnRetake.addEventListener("mouseleave", () =>{
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
