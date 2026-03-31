import { $ } from '../utils/dom.js';

// Contact form
const contactForm = $('#contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Show a success message
        const sentMessage = document.createElement('div');
        sentMessage.className = 'mt-4 p-3 bg-green-600/20 border border-green-600 text-green-400 rounded-lg text-center flex items-center justify-center';
        sentMessage.innerHTML = `
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Thank you for your message! I'll get back to you soon.
        `;
        
        contactForm.appendChild(sentMessage);
        
        // Reset form
        contactForm.reset();
        
        // Remove message after 5 seconds
        setTimeout(() => {
            if (sentMessage.parentNode) {
                sentMessage.remove();
            }
        }, 5000);
    });
}
