// ==========================================
// PAPERS DATA - Add new papers here!
// ==========================================
// To add a new paper, simply add a new object to this array.
// Fields:
//   - title: Paper title (required)
//   - authors: Author names as string (required)
//   - venue: Conference/journal name (required)
//   - year: Publication year (required)
//   - type: Paper type - DEMO, EXTENDED ABSTRACT, WORKSHOP, CONFERENCE, JOURNAL (required)
//   - image: Path to image in pics/ folder (required)
//   - imageAlt: Alt text for image (required)
//   - link: URL to paper (required)
//   - tag: Category tag - HAR, HCI, AI Ethics, Healthcare, Bio-AI, Autonomy, 5G, etc. (required)
export const papers = [
    {
        title: "The Future Smart Shoe: Demonstrating Sensing-to-Actuation Prototypes",
        authors: "MT Gabrecht, R Schlonsak, T Nachtigall, DS Elvitigala, DJC Matthies",
        venue: "Extended Abstracts of the 2026 CHI Conference on Human Factors in Computing Systems (CHI EA '26), Barcelona, Spain. ACM.",
        year: 2026,
        type: "DEMO",
        image: "pics/chidemo2026@2x.jpg",
        imageAlt: "Future Smart Shoe",
        link: "https://doi.org/10.1145/3772363.3799256",
        tag: "HAR"
    },
    {
        title: "The Cost of Convenience: How Delegation and Decision Horizons Erode Human Agency when overusing LLM Systems",
        authors: "R Schlonsak, H-C Jetter, DJC Matthies",
        venue: "Extended Abstracts of the 2026 CHI Conference on Human Factors in Computing Systems (CHI EA '26), Barcelona, Spain. ACM.",
        year: 2026,
        type: "EXTENDED ABSTRACT",
        image: "pics/Cost_of_Convenience.png",
        imageAlt: "Cost of Convenience",
        link: "https://doi.org/10.1145/3772363.3798760",
        tag: "HCI"
    },
    {
        title: "Aligning With the Dead: Posthumous Persistence as a Limit Case for Bidirectional Human-AI Alignment",
        authors: "R Schlonsak, DJC Matthies",
        venue: "CHI'26 Workshop on Human-AI Interaction Alignment.",
        year: 2026,
        type: "WORKSHOP",
        image: "pics/biderectional alignment.png",
        imageAlt: "Bidirectional Alignment",
        link: "https://doi.org/10.13140/RG.2.2.19456.70400",
        tag: "HCI"
    },
    {
        title: "How AI Is Shaping Society and Why We Must Keep It at Bay!",
        authors: "DJC Matthies, R Schlonsak, M Gabrecht",
        venue: "10th International Workshop on Sensor-Based Activity Recognition and Artificial Intelligence. Springer.",
        year: 2025,
        type: "WORKSHOP",
        image: "pics/how_ai.png",
        imageAlt: "How AI Is Shaping Society",
        link: "https://doi.org/10.1007/978-3-032-13312-0_3",
        tag: "AI Ethics"
    },
    {
        title: "Hacking Rokoko Smart Gloves for Tool Detection using Recurrent Neural Networks",
        authors: "Z Yu, R Schlonsak, DJC Matthies",
        venue: "10th International Workshop on Sensor-Based Activity Recognition and Artificial Intelligence. Springer.",
        year: 2025,
        type: "WORKSHOP",
        image: "pics/rokoko.png",
        imageAlt: "Rokoko Smart Gloves",
        link: "https://doi.org/10.1007/978-3-032-13312-0_30",
        tag: "HAR"
    },
    {
        title: "Toward Low-Complexity Arrhythmia Classification for Ambient Assisted Living",
        authors: "H Wu, R Schlonsak, DJC Matthies",
        venue: "10th International Workshop on Sensor-Based Activity Recognition and Artificial Intelligence. Springer.",
        year: 2025,
        type: "WORKSHOP",
        image: "pics/AAL Arithm.png",
        imageAlt: "Arrhythmia Classification",
        link: "https://doi.org/10.1007/978-3-032-13312-0_29",
        tag: "Healthcare"
    },
    {
        title: "No Cloud, No Problem: A Real-Time HAR Insole with On-Device Inference",
        authors: "R Schlonsak, J Yu, HC Jetter, DJ Matthies",
        venue: "10th International Workshop on Sensor-Based Activity Recognition and Artificial Intelligence. Springer.",
        year: 2025,
        type: "WORKSHOP",
        image: "pics/NoCloud.png",
        imageAlt: "No Cloud No Problem HAR Insole",
        link: "https://doi.org/10.1007/978-3-032-13312-0_19",
        tag: "HAR"
    },
    {
        title: "ShoeTect2.0: Real-Time Activity Recognition Using MobileNet CNN with Multisensory Smart Footwear",
        authors: "R Schlonsak, T Yang, M Gabrecht, DJC Matthies",
        venue: "International Workshop on Sensor-Based Activity Recognition and Artificial Intelligence, 2024",
        year: 2024,
        type: "WORKSHOP",
        image: "pics/shoetect2.0.png",
        imageAlt: "ShoeTect2.0",
        link: "https://www.springerprofessional.de/shoetect2-0-real-time-activity-recognition-using-mobilenet-cnn-w/50616484",
        tag: "HAR"
    },
    {
        title: "SurfSole: Demonstrating Real-Time Surface Identification via Capacitive Sensing with Neural Networks",
        authors: "P Willnow, M Sternitzke, R Schlonsak, M Gabrecht, DJC Matthies",
        venue: "International Workshop on Sensor-Based Activity Recognition and Artificial Intelligence, 2024",
        year: 2024,
        type: "WORKSHOP",
        image: "pics/surfsole.png",
        imageAlt: "SurfSole",
        link: "https://link.springer.com/chapter/10.1007/978-3-031-80856-2_16",
        tag: "HAR"
    },
    {
        title: "FlyAI - The Next Level of Artificial Intelligence is Unpredictable! Injecting Responses of a Living Fly into Decision Making",
        authors: "DJC Matthies, R Schlonsak, H Zhuang, R Song",
        venue: "International Workshop on Sensor-Based Activity Recognition and Artificial Intelligence, 2024",
        year: 2024,
        type: "WORKSHOP",
        image: "pics/fly_ai.png",
        imageAlt: "FlyAI",
        link: "https://link.springer.com/chapter/10.1007/978-3-031-80856-2_13",
        tag: "Bio-AI"
    },
    {
        title: "Bridge Detection in Autonomous Shipping: A YOLOv8 Approach with Autodistill and GroundedSAM",
        authors: "R Schlonsak, JP Schreiter, H Hellbrück",
        venue: "Journal of Physics: Conference Series, 2024",
        year: 2024,
        type: "CONFERENCE",
        image: "pics/bridge_detection.png",
        imageAlt: "Bridge detection visualization",
        link: "https://iopscience.iop.org/article/10.1088/1742-6596/2867/1/012019",
        tag: "Autonomy"
    },
    {
        title: "Installation of Multicellular 5G Campus Network for Remote Driving and Flying",
        authors: "A Yaqot, A Soukieh, R Schlonsak, A Hanemann, H Hellbrück",
        venue: "15th International Conference on Computing Communication and Networking Technologies (ICCCNT), 2024",
        year: 2024,
        type: "CONFERENCE",
        image: "pics/5g_campus.png",
        imageAlt: "5G Campus Network",
        link: "https://ieeexplore.ieee.org/document/10725248",
        tag: "5G"
    }
];
