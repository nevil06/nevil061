import './Achievements.css';

const Achievements = () => {
    const achievements = [
        {
            id: 1,
            title: "BMIT Hackathon Runner-up",
            event: "BMIT Hackathon 2026",
            project: "SafeTurn AI",
            description: "Built an AI-powered safety solution for vehicle turn assistance, securing runner-up position in the hackathon competition.",
            date: "2026",
            technologies: ["AI/ML", "Computer Vision", "Python"],
            award: "Runner-up",
            teamSize: "4 members"
        }
    ];

    return (
        <section id="achievements" className="section achievements-section">
            <div className="container">
                <h2 className="section-title">Achievements & Awards</h2>
                <p className="section-description">
                    Recognition and accomplishments in competitions and events
                </p>

                <div className="achievements-grid">
                    {achievements.map((achievement) => (
                        <div key={achievement.id} className="achievement-card glass-card">
                            <div className="achievement-header">
                                <div className="achievement-badge">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                    </svg>
                                    <span className="badge-text">{achievement.award}</span>
                                </div>
                                <div className="achievement-date">{achievement.date}</div>
                            </div>

                            <div className="achievement-content">
                                <h3 className="achievement-title">{achievement.title}</h3>
                                <h4 className="achievement-event">{achievement.event}</h4>
                                
                                <div className="achievement-project">
                                    <h5>Project: <span className="project-name">{achievement.project}</span></h5>
                                    <p className="project-description">{achievement.description}</p>
                                </div>

                                <div className="achievement-tech">
                                    <div className="tech-tags">
                                        {achievement.technologies.map((tech, index) => (
                                            <span key={index} className="tech-tag">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Achievements;