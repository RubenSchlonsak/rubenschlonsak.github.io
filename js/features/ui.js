import { $, $$ } from '../utils/dom.js';

// Tab functionality
const tabButtons = $$('.tab-btn');
const tabContents = $$('.tab-content');

if (tabButtons.length && tabContents.length) {
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            
            // Remove active state from all buttons
            tabButtons.forEach(btn => {
                btn.classList.remove('tab-active');
                btn.className = 'tab-btn px-6 py-2 mx-2 rounded-full bg-gray-700 text-gray-300 hover:bg-gray-600 transition-colors';
            });
            
            // Add active state to clicked button
            button.classList.add('tab-active');
            button.className = 'tab-btn px-6 py-2 mx-2 rounded-full tab-active transition-colors';
            
            // Show/hide content
            tabContents.forEach(content => {
                if (content.id === tabId) {
                    content.classList.remove('hidden');
                } else {
                    content.classList.add('hidden');
                }
            });
        });
    });
}

// Animate skill bars on scroll
const skillBars = $$('.skill-bar');
if (skillBars.length) {
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.getAttribute('data-width');
                entry.target.style.width = width;
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
}

// Project filtering
const projectFilters = $$('.project-filter');
const projectItems = $$('.project-item');

if (projectFilters.length && projectItems.length) {
    projectFilters.forEach(filter => {
        filter.addEventListener('click', () => {
            const filterCategory = filter.getAttribute('data-filter');
            
            // Update button styles
            projectFilters.forEach(btn => {
                btn.classList.remove('tab-active');
                btn.classList.add('bg-gray-700', 'hover:bg-gray-600');
            });
            
            filter.classList.add('tab-active');
            filter.classList.remove('bg-gray-700', 'hover:bg-gray-600');
            
            // Filter projects
            projectItems.forEach(item => {
                if (filterCategory === 'all' || item.getAttribute('data-category') === filterCategory) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// Animate elements on scroll
const animatedElements = $$('.service-card');
if (animatedElements.length) {
    const elementObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        elementObserver.observe(element);
    });
}
