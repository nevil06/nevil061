import { useEffect, useRef } from 'react';
import './Skills.css';

const Skills = () => {
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

    const skillGroups = [
        {
            domain: "01 / Development languages",
            skills: ["JavaScript", "TypeScript", "Python", "SQL"]
        },
        {
            domain: "02 / Frontend systems",
            skills: ["React", "HTML/CSS", "CSS/SCSS"]
        },
        {
            domain: "03 / Backend & storage",
            skills: ["Node.js", "REST APIs", "MongoDB"]
        },
        {
            domain: "04 / AI & workflows",
            skills: ["AI/ML", "Computer Vision", "Git"]
        }
    ];

    return (
        <section ref={sectionRef} id="skills" className="skills-section-new">
            <div className="container">
                <div className="reveal-on-scroll">
                    <h2 className="section-title">Capabilities</h2>
                </div>

                <div className="skills-domain-list">
                    {skillGroups.map((group) => (
                        <div key={group.domain} className="skills-domain-row reveal-on-scroll">
                            <span className="domain-index">{group.domain}</span>
                            <div className="domain-items">
                                {group.skills.map((skill) => (
                                    <span key={skill} className="skill-word">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;