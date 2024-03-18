'use strict';

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('#navbar');

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
            });
        }
    }); // Sluitende haakjes toegevoegd hier
} // Sluitende accolade toegevoegd hier

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// /*animation for the home en about */ 
// const phrases = [
//   "Full Stack Developer",
//   "Ethical Hacker",
//   "Cybersecurity",
//   "Computer Science",
//   "Network Engineer"
// ];

// const textAnimationSpan = document.querySelector('.text-animation span');
// let phraseIndex = 0;

// const cyclePhrases = () => {
//   textAnimationSpan.textContent = phrases[phraseIndex++ % phrases.length];
//   setTimeout(cyclePhrases, 3000); // Verander de tekst elke 4 seconden
// };

// cyclePhrases(); // Start de cyclus


  