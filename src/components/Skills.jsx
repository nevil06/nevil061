import { useState, useEffect } from 'react';
import './Skills.css';

const Skills = () => {
    const [isVisible, setIsVisible] = useState(false);

    const skills = [
        { name: 'React', level: 90, category: 'Frontend' },
        { name: 'JavaScript', level: 95, category: 'Programming' },
        { name: 'Node.js', level: 85, category: 'Backend' },
        { name: 'Python', level: 88, category: 'Programming' },
        { name: 'AI/ML', level: 80, category: 'Specialized' },
        { name: 'MongoDB', level: 82, category: 'Database' },
        { name: 'Git', level: 90, category: 'Tools' },
        { name: 'TypeScript', level: 85, category: 'Programming' },
        { name: 'REST APIs', level: 88, category: 'Backend' },
        { name: 'CSS/SCSS', level: 92, category: 'Frontend' }
    ];

    const categories = [...new Set(skills.map(skill => skill.category))];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        const element = document.querySelector('.skills-section');
        if (element) observer.observe(element);

        return () => observer.disconnect();
    }, []);

    return (
        <section id="skills" className="section skills-section">
            <div className="container">
                <h2 className="section-title">Skills & Expertise</h2>
                <p className="section-description">
                    Technologies and tools I work with to bring ideas to life
                </p>

                <div className="skills-categories">
                    {categories.map(category => (
                        <div key={category} className="skill-category">
                            <h3 className="category-title">{category}</h3>
                            <div className="skills-grid">
                                {skills
                                    .filter(skill => skill.category === category)
                                    .map((skill, index) => (
                                        <div key={skill.name} className="skill-item">
                                            <div className="skill-header">
                                                <span className="skill-name">{skill.name}</span>
                                                <span className="skill-percentage">{skill.level}%</span>
                                            </div>
                                            <div className="skill-bar">
                                                <div 
                                                    className="skill-progress"
                                                    style={{
                                                        width: isVisible ? `${skill.level}%` : '0%',
                                                        animationDelay: `${index * 0.1}s`
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Skills Cloud */}
                <div className="skills-cloud">
                    <h3 className="cloud-title">Tech Stack</h3>
                    <div className="cloud-container">
                        {skills.map((skill, index) => (
                            <span 
                                key={skill.name} 
                                className="skill-tag"
                                style={{
                                    fontSize: `${0.8 + (skill.level / 100) * 0.6}rem`,
                                    animationDelay: `${index * 0.1}s`
                                }}
                            >
                                {skill.name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;