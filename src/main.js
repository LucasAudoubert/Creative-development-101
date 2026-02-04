import '../src/main.css';
import './style/frustration.scss';
import './style/calm.scss';
import './style/joy.scss';
import './style/calm.scss';



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

while (document.readyState !== 'complete') {
}


// FRUSTRATION SECTION 

const frustrationBtn = document.getElementById('frustration-btn');
const frustrationSection = document.getElementById('frustration-section');

frustrationBtn.addEventListener('click', () => {
    frustrationSection.scrollIntoView({ behavior: 'smooth' });
});
