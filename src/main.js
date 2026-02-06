import * as THREE from 'three';

import '../src/main.css';
import './style/frustration.scss';
import './style/calm.scss';
import './style/joy.scss';

console.log('Creative Development Initialized');

document.addEventListener('DOMContentLoaded', () => {
  const interBubble = document.querySelector('.interactive');
  let curX = 0;
  let curY = 0;
  let tgX = 0;
  let tgY = 0;

  function move() {
    curX += (tgX - curX) / 5;
    curY += (tgY - curY) / 5;
    interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;

    requestAnimationFrame(() => {
      move();
    });
  }

  window.addEventListener('mousemove', (event) => {
    tgX = event.clientX;
    tgY = event.clientY;
  });

  move();
});

var rotateDeg = Math.floor(Math.random() * 360);

const g1 = document.querySelector('.g1');

g1.animate(
  [
    { transform: `rotate(${rotateDeg}deg)` },
    { transform: `rotate(${rotateDeg + 360}deg)` },
    // { transform: 'rotate(360deg)' },
  ],
  {
    duration: 20000,
    iterations: Infinity,
    easing: 'linear',
  },
);

// while (document.readyState !== 'complete') {
// }

// FRUSTRATION SECTION

const frustrationBtn = document.querySelector('.frustration-btn');
const frustrationSection = document.querySelector('#frustration-section');

const arrows = document.createElement('img');
arrows.src = '/assets/images/arrowsss.svg';
arrows.style.position = 'absolute';
arrows.style.top = '50%';
arrows.style.left = '50%';
arrows.style.width = '90rem';
arrows.style.transform = 'translate(-50%, -50%)';
arrows.style.filter =
  'brightness(0) saturate(100%) invert(17%) sepia(99%) saturate(7426%) hue-rotate(358deg) brightness(98%) contrast(118%)';
arrows.style.animation = 'blink 1.5s infinite';
arrows.style.transition = 'opacity 0.3s ease-out';
frustrationSection.appendChild(arrows);

// en bas a gauche mais utiliser autre methode pour le positionner
const angryGif = document.createElement('img');
angryGif.src = '/assets/images/angry.gif';
angryGif.style.position = 'absolute';
angryGif.style.bottom = '20px';
angryGif.style.left = '20px';
angryGif.style.width = '150px';
angryGif.style.opacity = '0';
angryGif.style.transition = 'opacity 0.3s ease-in-out';
angryGif.style.zIndex = '10';
frustrationSection.appendChild(angryGif);

frustrationBtn.addEventListener('click', () => {
  alert('Vous avez cliqué sur le bouton de frustration !');
});

frustrationSection.addEventListener('mousemove', (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;
  console.log('mouse moved', x, y);
  frustrationSection.style.backgroundPosition = `${x * 100}% ${y * 100}%`;
});

const moveButton = () => {
  const maxX = window.innerWidth - frustrationBtn.offsetWidth;
  const maxY = window.innerHeight - frustrationBtn.offsetHeight;

  var x = Math.random() * maxX;
  var y = Math.random() * maxY;

  frustrationBtn.style.position = 'absolute';
  frustrationBtn.style.left = `${x}px`;
  frustrationBtn.style.top = `${y}px`;
  frustrationBtn.style.transition = 'all 0.3s ease-out';
  frustrationBtn.style.transform = `scale(1.1)`;

  //disparaître
  arrows.style.opacity = '0';
  arrows.style.animation = 'none';

  // laisser à 1 pour afficher
  angryGif.style.opacity = '1';

  setTimeout(() => {
    angryGif.style.opacity = '0';
    // Arrêter le clignotement après 3 secondes
    arrows.style.animation = 'none';
  }, 3000);
};

frustrationBtn.addEventListener('click', moveButton);
frustrationBtn.addEventListener('mouseenter', moveButton);

if (frustrationBtn.style.transition()) {
}
