import '../src/main.css';
import './style/frustration.scss';
import './style/calm.scss';
import './style/joy.scss';


console.log('Creative Development Initialized');

// FRUSTRATION SECTION 

const frustrationBtn = document.getElementById('frustration-btn');
const frustrationSection = document.getElementById('frustration-section');

frustrationBtn.addEventListener('click', () => {
    frustrationSection.scrollIntoView({ behavior: 'smooth' });
});
