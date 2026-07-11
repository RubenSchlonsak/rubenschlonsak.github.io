// ================================================================
// SITE CONTENT — here you add papers, teaching and service entries.
// Edit this file, commit, push. index.html stays untouched.
// ================================================================
//
//  PAPERS — add an object to the array. Fields:
//    title     Paper title
//    authors   Author string, shown as-is
//    venue     Venue string, shown after authors ("authors · venue")
//    year      Publication year (number) — controls sort order
//    typeLabel Shown in the year badge, e.g. "Demo", "Workshop",
//              "Ext. Abstract", "Conference", "Journal"
//    image     Path to thumbnail in pics/
//    imageAlt  Alt text for the thumbnail
//    link      URL the card opens
//    tag       Category chip, e.g. HAR, HCI, Healthcare, Bio-AI
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
        title: "The Future Smart Shoe: Demonstrating Sensing-to-Actuation Prototypes",
        authors: "M. T. Gabrecht, R. Schlonsak, T. Nachtigall, D. S. Elvitigala, D. J. C. Matthies",
        venue: "Extended Abstracts of the 2026 CHI Conference on Human Factors in Computing Systems (CHI EA '26), Barcelona, Spain · ACM",
        year: 2026,
        typeLabel: "Demo",
        image: "pics/chidemo2026@2x.jpg",
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
        image: "pics/Cost_of_Convenience.png",
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
        image: "pics/biderectional alignment.png",
        imageAlt: "Bidirectional Alignment",
        link: "https://doi.org/10.13140/RG.2.2.19456.70400",
        tag: "HCI"
    },
    {
        title: "How AI Is Shaping Society and Why We Must Keep It at Bay!",
        authors: "D. J. C. Matthies, R. Schlonsak, M. Gabrecht",
        venue: "10th International Workshop on Sensor-Based Activity Recognition and Artificial Intelligence · Springer",
        year: 2025,
        typeLabel: "Workshop",
        image: "pics/how_ai.png",
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
        image: "pics/rokoko.png",
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
        image: "pics/AAL Arithm.png",
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
        image: "pics/NoCloud.png",
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
        image: "pics/shoetect2.0.png",
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
        image: "pics/surfsole.png",
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
        image: "pics/fly_ai.png",
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
        image: "pics/bridge_detection.png",
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
        image: "pics/5g_campus.png",
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
        upcoming: true,
        courses: [
            { name: "Programming Java / C", kind: "Lab" }
        ]
    }
];

const service = [
    {
        term: "iWOAR 2026",
        role: "Proceedings Chair",
        upcoming: true
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
// Builds the exact same HTML that used to be hard-coded.
// ================================================================

function renderPapers() {
    const container = document.getElementById('pub-list');
    if (!container) return;

    const sorted = [...papers].sort((a, b) => b.year - a.year);

    container.innerHTML = sorted.map(paper => `
                <a href="${paper.link}" target="_blank" class="pub">
                    <span class="yr">${paper.year}<span class="type">${paper.typeLabel}</span></span>
                    <span class="thumb"><img src="${paper.image}" alt="${paper.imageAlt}"></span>
                    <span>
                        <span class="title">${paper.title}</span>
                        <span class="meta">${paper.authors} · ${paper.venue}</span>
                        <span class="pub-tag">${paper.tag}</span>
                    </span>
                    <span class="go">Paper ↗</span>
                </a>
    `).join('');
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
renderTeaching();
renderService();
