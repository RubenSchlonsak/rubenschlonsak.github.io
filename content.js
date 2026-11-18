// ================================================================
// SITE CONTENT — here you add papers, teaching and service entries.
// Edit this file, commit, push. index.html stays untouched.
// ================================================================
//
//  PAPERS — add an object to the array. Fields:
//    title     Paper title
//    authors   Author string, shown as-is ("R. Schlonsak" is highlighted)
//    venue     Venue string, shown after authors ("authors · venue")
//    year      Publication year (number) — controls sort order and
//              the year filter above the list
//    typeLabel Shown in the year badge: "Journal", "Conference",
//              "Workshop", "Demo" or "Ext. Abstract". The publication
//              counters in the Skills section are counted from this.
//    image     Path to thumbnail, e.g. "pics/thumbs/my-paper.webp".
//              Any image in pics/ works; ~800 px on the long side is
//              plenty. Images are never cropped: anything that is not
//              roughly 4:3 is shown whole on a soft blurred backdrop.
//    imageAlt  Alt text for the thumbnail
//    link      URL the card opens
//    tag       Category chip, e.g. HAR, HCI, Healthcare, Bio-AI
//
//  Optional:
//    award     Highlighted chip, e.g. "Best Paper"
//    linkLabel Text of the link on the right (default "Paper")
//    fit       "cover" to force-fill the thumbnail frame (crops),
//              "contain" to force showing the whole image
//
//  Papers are sorted by year (newest first). Within the same year
//  the array order is kept, so list your most important paper first.
//
// ----------------------------------------------------------------
//  TEACHING — add an object per semester:
//    term      Short label, e.g. "WS 24/25", "SS 26"
//    semester  Full label, e.g. "Winter Semester 2024/2025"
//    courses   Array of { name, kind }  (kind: "Lab", "Exercises", ...)
//    upcoming  true to show the "Upcoming" flag (default false)
//
//  Order is kept as written — newest first is your responsibility.
// ----------------------------------------------------------------
//  SERVICE — add an object per role:
//    term      e.g. "iWOAR 2026"
//    role      e.g. "Proceedings Chair"
//    upcoming  true to show the "Upcoming" flag (default false)
// ================================================================

const papers = [
    {
        title: "Joint Geometry and Readout Design for Additively Manufactured Dual-Sensing-Mode Smart Insoles",
        authors: "M. T. Gabrecht, R. Schlonsak, F. Seidensticker, P. Stagge, X. Luo, D. J. C. Matthies",
        venue: "11th ACM Symposium on Computational Fabrication (SCF '26), Tokyo, Japan · ACM · to appear",
        year: 2026,
        typeLabel: "Conference",
        image: "pics/thumbs/dual-mode-insoles.webp",
        imageAlt: "Printed dual-mode sensor insole: bottom and top electrode layout next to the assembled prototype",
        // Swap in https://doi.org/10.1145/3828611.3845657 once the proceedings are out (SCF is Dec 6-8, 2026)
        link: "http://www.denysmatthies.com/downloads/Gabrecht_Joint_Geometry_SCF26.pdf",
        linkLabel: "PDF",
        tag: "Fabrication"
    },
    {
        title: "Where to Sense Before What to Classify: A Full-Body Tracking Pilot Study on Real-Time HAR",
        authors: "R. Schlonsak, M. Gabrecht, J. Li, D. J. C. Matthies",
        venue: "11th International Workshop on Sensor-Based Activity Recognition and Artificial Intelligence (iWOAR 2026), Wiesbaden, Germany · Springer · in press",
        year: 2026,
        typeLabel: "Workshop",
        image: "pics/thumbs/where-to-sense.webp",
        imageAlt: "Participant in a full-body motion capture suit next to the tracked avatar",
        // No DOI yet: the Springer proceedings of iWOAR 2026 are not published
        link: "http://www.denysmatthies.com/downloads/Schlonsak_Where_to_Sense_iWOAR2026.pdf",
        linkLabel: "PDF",
        tag: "HAR"
    },
    {
        title: "The Evolution in Human Activity Recognition and Artificial Intelligence – A Decade of iWOAR",
        authors: "R. Schlonsak, M. Gabrecht, D. J. C. Matthies",
        venue: "11th International Workshop on Sensor-Based Activity Recognition and Artificial Intelligence (iWOAR 2026), Wiesbaden, Germany · Springer · in press",
        year: 2026,
        typeLabel: "Workshop",
        image: "pics/thumbs/decade-of-iwoar.webp",
        imageAlt: "Bar chart of iWOAR publications per year from 2014 to 2026",
        // No DOI yet: the Springer proceedings of iWOAR 2026 are not published
        link: "http://www.denysmatthies.com/downloads/Schlonsak_A_Decade_of_iWOAR_iWOAR2026.pdf",
        linkLabel: "PDF",
        tag: "Review"
    },
    {
        title: "The Future Smart Shoe: Demonstrating Sensing-to-Actuation Prototypes",
        authors: "M. T. Gabrecht, R. Schlonsak, T. Nachtigall, D. S. Elvitigala, D. J. C. Matthies",
        venue: "Extended Abstracts of the 2026 CHI Conference on Human Factors in Computing Systems (CHI EA '26), Barcelona, Spain · ACM",
        year: 2026,
        typeLabel: "Demo",
        image: "pics/thumbs/future-smart-shoe.webp",
        imageAlt: "Future Smart Shoe",
        link: "https://doi.org/10.1145/3772363.3799256",
        tag: "HAR"
    },
    {
        title: "The Cost of Convenience: How Delegation and Decision Horizons Erode Human Agency when overusing LLM Systems",
        authors: "R. Schlonsak, H.-C. Jetter, D. J. C. Matthies",
        venue: "Extended Abstracts of the 2026 CHI Conference on Human Factors in Computing Systems (CHI EA '26), Barcelona, Spain · ACM",
        year: 2026,
        typeLabel: "Ext. Abstract",
        image: "pics/thumbs/cost-of-convenience.webp",
        imageAlt: "Cost of Convenience",
        link: "https://doi.org/10.1145/3772363.3798760",
        tag: "HCI"
    },
    {
        title: "Aligning With the Dead: Posthumous Persistence as a Limit Case for Bidirectional Human-AI Alignment",
        authors: "R. Schlonsak, D. J. C. Matthies",
        venue: "CHI'26 Workshop on Human-AI Interaction Alignment",
        year: 2026,
        typeLabel: "Workshop",
        image: "pics/thumbs/aligning-with-the-dead.webp",
        imageAlt: "Bidirectional Alignment",
        link: "https://doi.org/10.13140/RG.2.2.19456.70400",
        tag: "HCI",
        award: "Best Paper"
    },
    {
        title: "How AI Is Shaping Society and Why We Must Keep It at Bay!",
        authors: "D. J. C. Matthies, R. Schlonsak, M. Gabrecht",
        venue: "10th International Workshop on Sensor-Based Activity Recognition and Artificial Intelligence · Springer",
        year: 2025,
        typeLabel: "Workshop",
        image: "pics/thumbs/how-ai-shaping-society.webp",
        imageAlt: "How AI Is Shaping Society",
        link: "https://doi.org/10.1007/978-3-032-13312-0_3",
        tag: "AI Ethics"
    },
    {
        title: "Hacking Rokoko Smart Gloves for Tool Detection using Recurrent Neural Networks",
        authors: "Z. Yu, R. Schlonsak, D. J. C. Matthies",
        venue: "10th International Workshop on Sensor-Based Activity Recognition and Artificial Intelligence · Springer",
        year: 2025,
        typeLabel: "Workshop",
        image: "pics/thumbs/rokoko-smart-gloves.webp",
        imageAlt: "Rokoko Smart Gloves",
        link: "https://doi.org/10.1007/978-3-032-13312-0_30",
        tag: "HAR"
    },
    {
        title: "Toward Low-Complexity Arrhythmia Classification for Ambient Assisted Living",
        authors: "H. Wu, R. Schlonsak, D. J. C. Matthies",
        venue: "10th International Workshop on Sensor-Based Activity Recognition and Artificial Intelligence · Springer",
        year: 2025,
        typeLabel: "Workshop",
        image: "pics/thumbs/arrhythmia-aal.webp",
        imageAlt: "Arrhythmia Classification",
        link: "https://doi.org/10.1007/978-3-032-13312-0_29",
        tag: "Healthcare"
    },
    {
        title: "No Cloud, No Problem: A Real-Time HAR Insole with On-Device Inference",
        authors: "R. Schlonsak, J. Yu, H.-C. Jetter, D. Matthies",
        venue: "10th International Workshop on Sensor-Based Activity Recognition and Artificial Intelligence · Springer",
        year: 2025,
        typeLabel: "Workshop",
        image: "pics/thumbs/no-cloud-insole.webp",
        imageAlt: "No Cloud No Problem HAR Insole",
        link: "https://doi.org/10.1007/978-3-032-13312-0_19",
        tag: "HAR"
    },
    {
        title: "ShoeTect2.0: Real-Time Activity Recognition Using MobileNet CNN with Multisensory Smart Footwear",
        authors: "R. Schlonsak, T. Yang, M. Gabrecht, D. J. C. Matthies",
        venue: "International Workshop on Sensor-Based Activity Recognition and Artificial Intelligence, 2024",
        year: 2024,
        typeLabel: "Workshop",
        image: "pics/thumbs/shoetect2.webp",
        imageAlt: "ShoeTect 2.0",
        link: "https://www.springerprofessional.de/shoetect2-0-real-time-activity-recognition-using-mobilenet-cnn-w/50616484",
        tag: "HAR"
    },
    {
        title: "SurfSole: Demonstrating Real-Time Surface Identification via Capacitive Sensing with Neural Networks",
        authors: "P. Willnow, M. Sternitzke, R. Schlonsak, M. Gabrecht, D. J. C. Matthies",
        venue: "International Workshop on Sensor-Based Activity Recognition and Artificial Intelligence, 2024",
        year: 2024,
        typeLabel: "Workshop",
        image: "pics/thumbs/surfsole.webp",
        imageAlt: "SurfSole",
        link: "https://link.springer.com/chapter/10.1007/978-3-031-80856-2_16",
        tag: "HAR"
    },
    {
        title: "FlyAI: The Next Level of Artificial Intelligence is Unpredictable! Injecting Responses of a Living Fly into Decision Making",
        authors: "D. J. C. Matthies, R. Schlonsak, H. Zhuang, R. Song",
        venue: "International Workshop on Sensor-Based Activity Recognition and Artificial Intelligence, 2024",
        year: 2024,
        typeLabel: "Workshop",
        image: "pics/thumbs/flyai.webp",
        imageAlt: "FlyAI",
        link: "https://link.springer.com/chapter/10.1007/978-3-031-80856-2_13",
        tag: "Bio-AI"
    },
    {
        title: "Bridge Detection in Autonomous Shipping: A YOLOv8 Approach with Autodistill and GroundedSAM",
        authors: "R. Schlonsak, J. P. Schreiter, H. Hellbrück",
        venue: "Journal of Physics: Conference Series, 2024",
        year: 2024,
        typeLabel: "Conference",
        image: "pics/thumbs/bridge-detection.webp",
        imageAlt: "Bridge Detection",
        link: "https://iopscience.iop.org/article/10.1088/1742-6596/2867/1/012019",
        tag: "Autonomy"
    },
    {
        title: "Installation of Multicellular 5G Campus Network for Remote Driving and Flying",
        authors: "A. Yaqot, A. Soukieh, R. Schlonsak, A. Hanemann, H. Hellbrück",
        venue: "15th International Conference on Computing Communication and Networking Technologies (ICCCNT), 2024",
        year: 2024,
        typeLabel: "Conference",
        image: "pics/thumbs/5g-campus.webp",
        imageAlt: "5G Campus Network",
        link: "https://ieeexplore.ieee.org/document/10725248",
        tag: "5G"
    }
];

const teaching = [
    {
        term: "WS 24/25",
        semester: "Winter Semester 2024/2025",
        courses: [
            { name: "Computer Networks", kind: "Lab" },
            { name: "Mathematics 2", kind: "Exercises" }
        ]
    },
    {
        term: "SS 25",
        semester: "Summer Semester 2025",
        courses: [
            { name: "Computer Networks", kind: "Lab" },
            { name: "Programming Java / C", kind: "Lab" }
        ]
    },
    {
        term: "WS 25/26",
        semester: "Winter Semester 2025/2026",
        courses: [
            { name: "Computer Networks", kind: "Lab" }
        ]
    },
    {
        term: "SS 26",
        semester: "Summer Semester 2026",
        courses: [
            { name: "Programming Java / C", kind: "Lab" }
        ]
    }
];

const service = [
    {
        term: "iWOAR 2026",
        role: "Proceedings Chair"
    },
    {
        term: "iWOAR 2025",
        role: "PC Member"
    },
    {
        term: "iWOAR 2025",
        role: "Subreviewer / External Reviewer"
    },
    {
        term: "AHs 2025",
        role: "Subreviewer / External Reviewer"
    },
    {
        term: "iWOAR 2024",
        role: "Subreviewer / External Reviewer"
    }
];

// ================================================================
// RENDERING — no need to edit below this line.
// ================================================================

const sortedPapers = [...papers].sort((a, b) => b.year - a.year);

function renderPapers() {
    const container = document.getElementById('pub-list');
    if (!container) return;

    container.innerHTML = sortedPapers.map(paper => {
        const src = encodeURI(paper.image);
        const fit = paper.fit ? ` data-fit="${paper.fit}"` : '';
        const authors = paper.authors.replace(/R\. Schlonsak/g, '<strong>R. Schlonsak</strong>');
        const award = paper.award ? `<span class="pub-award"><span aria-hidden="true">★</span> ${paper.award}</span>` : '';

        return `
                <a href="${paper.link}" target="_blank" rel="noopener" class="pub" data-year="${paper.year}">
                    <span class="yr">${paper.year}<span class="type">${paper.typeLabel}</span></span>
                    <span class="thumb"${fit}><img src="${src}" alt="${paper.imageAlt}" loading="lazy" decoding="async"></span>
                    <span class="body">
                        <span class="title">${paper.title}</span>
                        <span class="meta">${authors} · ${paper.venue}</span>
                        <span class="chips"><span class="pub-tag">${paper.tag}</span>${award}</span>
                    </span>
                    <span class="go">${paper.linkLabel || 'Paper'} <span class="arrow" aria-hidden="true">↗</span></span>
                </a>
    `;
    }).join('');

    // Thumbnails are only cropped when they are already close to the 4:3 frame.
    // Everything else is shown whole on a blurred copy of itself.
    container.querySelectorAll('.thumb img').forEach(img => {
        const settle = () => {
            const thumb = img.parentElement;
            if (!img.naturalWidth) return;
            if (!thumb.dataset.fit) {
                const ratio = img.naturalWidth / img.naturalHeight;
                thumb.dataset.fit = (ratio >= 1.25 && ratio <= 1.42) ? 'cover' : 'contain';
            }
            if (thumb.dataset.fit === 'contain') {
                thumb.style.setProperty('--img', `url("${img.currentSrc || img.src}")`);
            }
        };
        if (img.complete) settle();
        else img.addEventListener('load', settle, { once: true });
    });
}

function renderPaperFilters() {
    const bar = document.getElementById('pub-filters');
    const list = document.getElementById('pub-list');
    if (!bar || !list) return;

    const years = [...new Set(sortedPapers.map(p => p.year))];
    const button = (value, label, count, active) =>
        `<button type="button" class="filter-btn${active ? ' is-active' : ''}" data-year="${value}" aria-pressed="${active}">${label}<span class="n">${count}</span></button>`;

    bar.innerHTML = button('all', 'All', sortedPapers.length, true) +
        years.map(y => button(y, y, sortedPapers.filter(p => p.year === y).length, false)).join('');

    bar.addEventListener('click', event => {
        const btn = event.target.closest('.filter-btn');
        if (!btn) return;
        bar.querySelectorAll('.filter-btn').forEach(b => {
            const active = b === btn;
            b.classList.toggle('is-active', active);
            b.setAttribute('aria-pressed', String(active));
        });
        list.querySelectorAll('.pub').forEach(row => {
            row.hidden = btn.dataset.year !== 'all' && row.dataset.year !== btn.dataset.year;
        });
    });
}

// Counters such as <div data-stat="Demo|Ext. Abstract"> are filled from typeLabel.
function renderStats() {
    document.querySelectorAll('[data-stat]').forEach(el => {
        const types = el.dataset.stat.split('|');
        el.textContent = papers.filter(p => types.includes(p.typeLabel)).length;
    });
}

function renderTeaching() {
    const container = document.getElementById('teach-list');
    if (!container) return;

    container.innerHTML = teaching.map(item => {
        const termClass = item.upcoming ? 'term upcoming' : 'term';
        const flag = item.upcoming ? '\n                        <span class="flag">Upcoming</span>' : '';
        const courses = item.courses.map(c =>
            `<div class="course"><span class="cname">${c.name}</span><span class="ckind">${c.kind}</span></div>`
        ).join('\n                        ');

        return `
                <div class="card teach-card reveal">
                    <div class="teach-head">
                        <span class="${termClass}">${item.term}</span>
                        <span class="sem">${item.semester}</span>${flag}
                    </div>
                    <div class="course-grid">
                        ${courses}
                    </div>
                </div>
        `;
    }).join('');
}

function renderService() {
    const container = document.getElementById('service-list');
    if (!container) return;

    container.innerHTML = service.map(item => {
        const flag = item.upcoming ? '\n                    <span class="flag">Upcoming</span>' : '';

        return `
                <div class="card service-row reveal">
                    <div class="left">
                        <span class="term">${item.term}</span>
                        <span class="role">${item.role}</span>
                    </div>${flag}
                </div>
        `;
    }).join('');
}

renderPapers();
renderPaperFilters();
renderStats();
renderTeaching();
renderService();
