'use strict';


/*animation */ 
const phrases = [
  "Full Stack Developer",
  "Ethical Hacker",
  "Cybersecurity",
  "Computer Science",
  "Network Engineer"
];

const textAnimationSpan = document.querySelector('.text-animation span');
let phraseIndex = 0;

const cyclePhrases = () => {
  textAnimationSpan.textContent = phrases[phraseIndex++ % phrases.length];
  setTimeout(cyclePhrases, 5000); // Verander de tekst elke 4 seconden
};

cyclePhrases(); // Start de cyclus


  