import { $ } from '../utils/dom.js';

// Typing effect
const typingTexts = [
    "I'm a researcher passionate about understanding human activity through smart footwear",
    "Exploring the frontiers of AI and machine learning for real-world applications",
    "Turning sensor data into meaningful insights with intelligent algorithms",
    "Creating the bridge between human motion and artificial intelligence"
];

const typingElement = $('#typing-text');
if (typingElement) {
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeText() {
        const currentText = typingTexts[textIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = 100;
        
        if (isDeleting) {
            typeSpeed /= 2;
        }
        
        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % typingTexts.length;
            typeSpeed = 500;
        }
        
        typingElement.classList.add('typing-effect');
        setTimeout(() => {
            typeText();
        }, typeSpeed);
    }

    typeText();
}
