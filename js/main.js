import { papers } from './papers.js';
import './features/navigation.js';
import './features/particles.js';
import './features/typing.js';
import './features/ui.js';
import './features/contact.js';

// ==========================================
// RENDER FUNCTION - Generates paper cards
// ==========================================
function renderPapers() {
    const container = document.getElementById('papers-container');
    if (!container) return;

    container.innerHTML = papers.map(paper => `
        <a href="${paper.link}" target="_blank" class="block w-full max-w-md mx-auto">
            <div class="service-card card-bg h-full overflow-hidden rounded-lg group cursor-pointer hover:scale-105 transition-transform duration-300">
                <div class="p-6 h-full flex flex-col">
                    <div class="flex items-center justify-between mb-4">
                        <span class="text-xs text-blue-500 bg-blue-500/10 px-2 py-1 rounded font-bold">${paper.year}</span>
                        <span class="text-xs text-gray-500">${paper.type}</span>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">${paper.title}</h3>
                    <p class="text-sm text-gray-400 mb-4">${paper.authors}</p>
                    <p class="text-sm text-gray-500 mb-6">${paper.venue}</p>
                    <div class="w-full h-36 bg-gray-800 rounded-lg overflow-hidden relative">
                        <img src="${paper.image}" alt="${paper.imageAlt}" class="w-full h-full object-cover opacity-40">
                    </div>
                    <div class="flex justify-between mt-auto">
                        <span class="text-blue-500 font-medium text-sm flex items-center">
                            <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            Paper
                        </span>
                        <span class="text-purple-500 font-medium text-sm flex items-center">
                            <span class="bg-purple-500/20 px-2 py-1 rounded">${paper.tag}</span>
                        </span>
                    </div>
                </div>
            </div>
        </a>
    `).join('');
}

// Render papers on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderPapers);
} else {
    renderPapers();
}
