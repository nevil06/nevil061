import { useState, useEffect, useRef } from 'react';
import './Achievements.css';

const GeminiLogo = () => (
    <svg className="gemini-sparkle-logo" viewBox="0 0 24 24" fill="currentColor" style={{ width: '28px', height: '28px', color: '#ff1a1a', display: 'inline-block', verticalAlign: 'middle', marginLeft: '10px' }}>
        {/* Gemini main sparkle */}
        <path d="M12 3c0 4.5 2 6.5 6.5 6.5-4.5 0-6.5 2-6.5 6.5 0-4.5-2-6.5-6.5-6.5 4.5 0 6.5-2 6.5-6.5Z" />
        {/* Secondary small sparkle */}
        <path d="M18.5 15.5c0 1.5.8 2.2 2.2 2.2-1.4 0-2.2.8-2.2 2.2 0-1.4-.8-2.2-2.2-2.2 1.4 0 2.2-.8 2.2-2.2Z" />
    </svg>
);

const Achievements = () => {
    const [activeTab, setActiveTab] = useState(0);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            const revealElements = sectionRef.current.querySelectorAll('.reveal-on-scroll');
            revealElements.forEach((el) => observer.observe(el));
        }

        return () => {
            if (sectionRef.current) {
                const revealElements = sectionRef.current.querySelectorAll('.reveal-on-scroll');
                revealElements.forEach((el) => observer.unobserve(el));
            }
        };
    }, []);

    const timelineData = [
        {
            year: "2026 — 2027",
            title: "Google Gemini Ambassador",
            subTitle: "Selected Student Ambassador",
            description: "Selected as a Google Gemini Ambassador for the 2026–27 term. Tasked with representing Google AI technologies, conducting workshops, building projects integrated with Gemini APIs, and fostering AI learning within the developer community.",
            award: "Google Ambassador Program",
            team: "Representative / Tech Evangelist",
            tech: ["Google Gemini API", "LLMs", "Generative AI", "AI Integrations"],
            hasLogo: true
        },
        {
            year: "2026 — Present",
            title: "Open Source Contributor",
            subTitle: "Collaborating globally",
            description: "Actively contributing to open-source projects, experimenting with AI integrations, and building developer-focused tools. Continuously learning in public while collaborating with the global developer community.",
            award: "Community Developer",
            team: "Individual & Collaborative",
            tech: ["AI/ML", "Workflow Automation", "APIs", "Git"],
            hasLogo: false
        },
        {
            year: "2026",
            title: "Hackathon Runner Up — BNMIT",
            subTitle: "SafeTurn AI",
            description: "Led the team and played a key role in the design and development of SafeTurn AI, an intelligent vehicle collision-prevention system. Secured Runner Up position through innovation, teamwork, and technical execution.",
            award: "Runner Up Award",
            team: "Team Leader (Design & Development)",
            tech: ["AI/ML", "Computer Vision", "Python", "OpenCV"],
            hasLogo: false
        },
        {
            year: "2022 — Present",
            title: "Tech Leader & Team Lead",
            subTitle: "Hackathon & Software Teams",
            description: "Led multiple hackathon teams and collaborated on diverse software projects. Guided teammates, coordinated development efforts, and gained hands-on experience in leadership, problem-solving, and product building.",
            award: "Leadership & Collaboration",
            team: "Team Lead & Coordinator",
            tech: ["Product Management", "Architecture", "Agile", "Scrum"],
            hasLogo: false
        }
    ];

    return (
        <section ref={sectionRef} id="journey" className="journey-section-new">
            <div className="container">
                <div className="reveal-on-scroll">
                    <h2 className="section-title">Journey & Wins</h2>
                </div>

                <div className="journey-interactive-container reveal-on-scroll">
                    {/* Year Tabs on Left */}
                    <div className="journey-tabs-column">
                        {timelineData.map((item, index) => (
                            <button
                                key={item.year}
                                className={`journey-tab-btn ${activeTab === index ? 'active' : ''}`}
                                onClick={() => setActiveTab(index)}
                            >
                                <span className="tab-year">{item.year}</span>
                                <span className="tab-indicator"></span>
                            </button>
                        ))}
                    </div>

                    {/* Timeline Event Details on Right */}
                    <div className="journey-details-panel">
                        <div className="journey-details-content">
                            <span className="details-award">{timelineData[activeTab].award}</span>
                            <h3 className="details-title">
                                {timelineData[activeTab].title}
                                {timelineData[activeTab].hasLogo && <GeminiLogo />}
                            </h3>
                            <h4 className="details-subtitle">{timelineData[activeTab].subTitle}</h4>
                            
                            <p className="details-desc">{timelineData[activeTab].description}</p>
                            
                            <div className="details-meta-row">
                                <div className="meta-block">
                                    <span className="meta-label">Team & Role</span>
                                    <span className="meta-value">{timelineData[activeTab].team}</span>
                                </div>
                            </div>

                            <div className="details-tech-row">
                                <span className="meta-label">Technologies</span>
                                <div className="details-tech-badges">
                                    {timelineData[activeTab].tech.map((t) => (
                                        <span key={t} className="tech-badge-journey">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;