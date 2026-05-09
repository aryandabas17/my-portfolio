import 'bootstrap';
import ScrollReveal from 'scrollreveal';
import Typed from 'typed.js';

// TYPING EFFECT

const typed = new Typed('.typing-text', {
  strings: [
    'AI Application Builder',
    'Backend Developer',
    'Automation Enthusiast',
    'Problem Solver'
  ],

  typeSpeed: 60,
  backSpeed: 40,
  backDelay: 2000,
  loop: true
});

// SCROLL REVEAL

ScrollReveal().reveal('.hero-title', {
  delay: 200,
  distance: '50px',
  origin: 'left',
  duration: 1000
});

ScrollReveal().reveal('.hero-subtitle', {
  delay: 400,
  distance: '50px',
  origin: 'bottom',
  duration: 1000
});

ScrollReveal().reveal('.hero-description', {
  delay: 600,
  distance: '50px',
  origin: 'bottom',
  duration: 1000
});

ScrollReveal().reveal('.hero-buttons', {
  delay: 800,
  distance: '50px',
  origin: 'bottom',
  duration: 1000
});

ScrollReveal().reveal('.hero-image', {
  delay: 500,
  distance: '50px',
  origin: 'right',
  duration: 1200
});

// SECTION REVEALS

ScrollReveal().reveal(
  '.about-card, .stat-card, .skill-card, .project-card, .experience-card',
  {
    interval: 150,
    distance: '50px',
    duration: 1000,
    origin: 'bottom'
  }
);