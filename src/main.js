// import * as THREE from "three";

import '../src/main.css';
import './style/frustration.scss';
import './style/calm.scss';
import './style/joy.scss';
import './scrollContainer.js';

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

  //   const banner = document.createElement("div");
  //   banner.style.position = "fixed";
  //   banner.style.top = "10px";
  //   banner.style.left = "0";
  //   banner.style.width = "100%";
  //   banner.style.whiteSpace = "wrapping";
  //   banner.style.overflow = "hidden";
  //   banner.style.fontSize = "20px";
  //   banner.style.fontWeight = "bold";
  //   banner.style.color = "white";
  //   banner.style.backgroundColor = "transparent";
  //   banner.style.padding = "10px";
  //   banner.style.zIndex = "0";
  //   document.body.appendChild(banner);

  //   const words = [
  //     "Trop lent !",
  //     "Tu ne m'auras pas !",
  //     "Essaie encore !",
  //     "Tu peux faire mieux !",
  //     "Pas si vite !",
  //     "Attrape-moi si tu peux !",
  //   ];
  //   let wordIndex = 0;
  //   let bannerText = "";

  //   const updateBanner = () => {
  //     const section = document.querySelector("#frustration-section");
  //     const sectionRect = section.getBoundingClientRect();

  //     if (sectionRect.bottom > 0) {
  //       bannerText += ` ${words[wordIndex]}`;
  //       wordIndex = (wordIndex + 1) % words.length;
  //       banner.textContent = bannerText;
  //     }
  //   };

  //   let lastMouseX = 0;
  //   window.addEventListener("mousemove", (event) => {
  //     if (Math.abs(event.clientX - lastMouseX) > 50) {
  //       updateBanner();
  //       lastMouseX = event.clientX;
  //     }
  //   });
  // });

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
  angryGif.src = '/assets/images/skyrim-skeleton.gif';
  angryGif.style.position = 'absolute';
  angryGif.style.bottom = '20px';
  angryGif.style.left = '20px';
  angryGif.style.width = '200px';
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
    const sectionRect = frustrationSection.getBoundingClientRect();
    const btnWidth = frustrationBtn.offsetWidth;
    const btnHeight = frustrationBtn.offsetHeight;

    const maxX = sectionRect.width - btnWidth - 40; // 40px de marge
    const maxY = sectionRect.height - btnHeight - 40; // 40px de marge

    var x = Math.random() * maxX + 20; // +20px de marge minimale
    var y = Math.random() * maxY + 20; // +20px de marge minimale

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

  const fireCount = 10;

  for (let i = 0; i < fireCount; i++) {
    const fire = document.createElement('div');
    fire.className = 'fire';
    fire.style.position = 'absolute';
    const useTop = Math.random() > 0.2;
    const useLeft = Math.random() > 0.2;

    if (useTop) {
      fire.style.top = `${Math.random() * 60 + 50}%`;
    } else {
      fire.style.bottom = `${Math.random() * 60 + 20}%`;
    }

    if (useLeft) {
      fire.style.left = `${Math.random() * 60 + 20}%`;
    } else {
      fire.style.right = `${Math.random() * 60 + 20}%`;
    }

    fire.innerHTML = `
      <div class="fire-left">
        <div class="main-fire"></div>
        <div class="particle-fire"></div>
      </div>
      <div class="fire-center">
        <div class="main-fire"></div>
        <div class="particle-fire"></div>
      </div>
      <div class="fire-right">
        <div class="main-fire"></div>
        <div class="particle-fire"></div>
      </div>
      <div class="fire-bottom">
        <div class="main-fire"></div>
      </div>
    `;

    frustrationSection.appendChild(fire);
  }
});


const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let w = canvas.width = window.innerWidth;
let h = canvas.height = window.innerHeight;

const img = new Image();
img.src = './public/assets/images/joie.png';

let mouseX = -1000;
let mouseY = -1000;

window.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function draw() {
  ctx.clearRect(0, 0, w, h);

  const centerX = w / 2;
  const centerY = h * 0.6; 
  const numberOfLines = 200;
  let baseScale = Math.min(w, h) / 40;

  const dx = mouseX - centerX;
  const dy = mouseY - centerY;
  const dist = Math.sqrt(dx*dx + dy*dy);

  
  let scale = baseScale;
  let brightness = 60; 
  if (dist < 300) {
    scale *= 1 + (300 - dist)/300; 
    brightness = 90; 
  }

  for (let i = 0; i < numberOfLines; i++) {
    const t = (i / numberOfLines) * Math.PI * 2;
    const x = centerX + scale * 16 * Math.pow(Math.sin(t), 3);
    const y = centerY - scale * (13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t));

    const hue = 50; 
    ctx.strokeStyle = `hsl(${hue}, 100%, ${brightness}%)`;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(x, y);
    ctx.stroke();
  }

  if (img.complete) {
    const imgWidth = 500;
    const imgHeight = 500;
    ctx.drawImage(img, centerX - imgWidth/2, h - imgHeight, imgWidth, imgHeight);
  }

  requestAnimationFrame(draw);
}

img.onload = draw;

window.addEventListener('resize', () => {
  w = canvas.width = window.innerWidth;
  // h = canvas.height = window.innerHeight - 200;
});
