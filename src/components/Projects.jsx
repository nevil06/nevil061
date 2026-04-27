import { useState } from 'react';
import AllProjects from './AllProjects';
import './Projects.css';

const Projects = () => {
    const [showAllProjects, setShowAllProjects] = useState(false);

    // Keep the same 3 projects as before
    const projects = [
        {
            id: 1,
            name: "Context Memo",
            description: "A smart context management application for better productivity and organization.",
            url: "https://github.com/nevil06/context-memo",
            homepage: null,
            stars: 0,
            forks: 0,
            language: "JavaScript",
            topics: ["productivity", "context", "management"]
        },
        {
            id: 2,
            name: "TalkBro",
            description: "An interactive communication platform for seamless conversations.",
            url: "https://github.com/nevil06/talk-bro",
            homepage: null,
            stars: 0,
            forks: 0,
            language: "React",
            topics: ["communication", "chat", "platform"]
        },
        {
            id: 3,
            name: "Turn Guard AI",
            description: "AI-powered safety solution for vehicle turn assistance and collision prevention.",
            url: "https://github.com/nevil06/turn-guard-ai",
            homepage: null,
            stars: 0,
            forks: 0,
            language: "Python",
            topics: ["ai", "safety", "vehicle", "computer-vision"]
        }
    ];

    const openAllProjects = () => {
        setShowAllProjects(true);
        document.body.style.overflow = 'hidden';
    };

    const closeAllProjects = () => {
        setShowAllProjects(false);
        document.body.style.overflow = 'unset';
    };

    return (
        <>
            <section id="projects" className="section">
                <div className="container">
                    <h2 className="section-title">Personal Projects</h2>

                    <div className="projects-grid grid grid-3">
                        {projects.map(project => (
                            <div key={project.id} className="project-card glass-card">
                                <div className="project-header">
                                    <h3 className="project-title">{project.name}</h3>
                                    {project.language && (
                                        <span className="project-language">{project.language}</span>
                                    )}
                                </div>

                                <p className="project-description">{project.description}</p>

                                {project.topics.length > 0 && (
                                    <div className="project-topics">
                                        {project.topics.slice(0, 5).map(topic => (
                                            <span key={topic} className="topic-tag">{topic}</span>
                                        ))}
                                    </div>
                                )}

                                <div className="project-stats">
                                    <div className="stat">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                            <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z" />
                                        </svg>
                                        <span>{project.stars}</span>
                                    </div>
                                    <div className="stat">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                            <path d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                                        </svg>
                                        <span>{project.forks}</span>
                                    </div>
                                </div>

                                <div className="project-actions">
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-primary btn-sm"
                                    >
                                        View Code
                                    </a>
                                    {project.homepage && (
                                        <a
                                            href={project.homepage}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-outline btn-sm"
                                        >
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="view-more-section">
                        <button onClick={openAllProjects} className="btn btn-primary view-more-btn">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                            </svg>
                            View All Projects
                        </button>
                    </div>

                    {projects.length === 0 && (
                        <p className="no-projects">No projects found.</p>
                    )}
                </div>
            </section>

            {/* All Projects Modal */}
            {showAllProjects && (
                <div className="all-projects-modal-overlay">
                    <div className="all-projects-modal">
                        <button className="modal-close-btn" onClick={closeAllProjects}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                            </svg>
                        </button>
                        <AllProjects />
                    </div>
                </div>
            )}
        </>
    );
};

export default Projects;