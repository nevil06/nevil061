import { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
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

        const revealElements = sectionRef.current.querySelectorAll('.reveal-on-scroll');
        revealElements.forEach((el) => observer.observe(el));

        return () => {
            revealElements.forEach((el) => observer.unobserve(el));
        };
    }, []);

    const timelineEvents = [
        {
            year: "2026 — 2027",
            title: "Google Gemini Ambassador",
            description: "Selected to represent Google Gemini, running developer workshops, integrating generative AI models, and advocating for Google AI ecosystem tools."
        },
        {
            year: "2026 — Present",
            title: "Open Source Contributor",
            description: "Actively contributing to open-source projects, experimenting with AI integrations, and building developer-focused tools. Continuously learning in public while collaborating with the global developer community."
        },
        {
            year: "2026",
            title: "Hackathon Winner — BNMIT",
            description: "Led the team and played a key role in the design and development of SafeTurn AI, an intelligent vehicle collision-prevention system. Secured 1st Place through innovation, teamwork, and technical execution."
        },
        {
            year: "2022 — Present",
            title: "Tech Leader & Team Lead",
            description: "Led multiple hackathon teams and collaborated on diverse software projects. Guided teammates, coordinated development efforts, and gained hands-on experience in leadership, problem-solving, and product building."
        }
    ];

    return (
        <section ref={sectionRef} id="about" className="about-section-new">
            <div className="container">
                <div className="about-header reveal-on-scroll">
                    <h2 className="section-title">About Me</h2>
                    <p className="about-headline">
                        I build software,<br />
                        design experiences,<br />
                        and turn ideas into <span className="highlight-red">products</span>.
                    </p>
                </div>

                <div className="about-timeline">
                    <div className="timeline-line"></div>
                    {timelineEvents.map((event, index) => (
                        <div 
                            key={index} 
                            className="timeline-item reveal-on-scroll"
                            style={{ transitionDelay: `${index * 0.15}s` }}
                        >
                            <div className="timeline-year">
                                <span>{event.year}</span>
                            </div>
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <h3 className="timeline-title">{event.title}</h3>
                                <p className="timeline-desc">{event.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
