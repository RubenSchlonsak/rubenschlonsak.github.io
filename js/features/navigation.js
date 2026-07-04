import { $, $$ } from '../utils/dom.js';

// Mobile menu toggle
const mobileMenuButton = $('#mobile-menu-button');
const mobileMenu = $('#mobile-menu');
if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when a link is clicked
    const mobileNavLinks = mobileMenu.querySelectorAll('a');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

// Add shadow to header on scroll
const header = $('#header');
if (header) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            header.classList.add('shadow-lg');
        } else {
            header.classList.remove('shadow-lg');
        }
    });
}

// Active navigation link highlighting on scroll
const sections = $$('.section');
const navLinks = $$('.nav-link');

if (sections.length && navLinks.length) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === entry.target.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, { rootMargin: "-30% 0px -70% 0px" });

    sections.forEach(section => {
        observer.observe(section);
    });
}

// Back to top button
const backToTopButton = $('#back-to-top');
if (backToTopButton) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.remove('scale-0');
            backToTopButton.classList.add('scale-100');
        } else {
            backToTopButton.classList.remove('scale-100');
            backToTopButton.classList.add('scale-0');
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
