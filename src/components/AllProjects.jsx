import { useState, useEffect } from 'react';
import './AllProjects.css';

const AllProjects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('all');

    // Extended projects list with all your projects
    const allProjects = [
        {
            id: 1,
            name: "Context Memo",
            description: "A smart context management application for better productivity and organization. Features real-time synchronization and intelligent categorization.",
            url: "https://github.com/nevil06/context-memo",
            homepage: null,
            stars: 12,
            forks: 3,
            language: "JavaScript",
            topics: ["productivity", "context", "management", "react", "nodejs"],
            category: "Web App",
            year: "2024"
        },
        {
            id: 2,
            name: "TalkBro",
            description: "An interactive communication platform for seamless conversations. Features real-time messaging, file sharing, and group chat functionality.",
            url: "https://github.com/nevil06/talk-bro",
            homepage: null,
            stars: 8,
            forks: 2,
            language: "React",
            topics: ["communication", "chat", "platform", "realtime"],
            category: "Web App",
            year: "2024"
        },
        {
            id: 3,
            name: "Turn Guard AI",
            description: "AI-powered safety solution for vehicle turn assistance and collision prevention. Uses computer vision and machine learning for real-time hazard detection.",
            url: "https://github.com/nevil06/turn-guard-ai",
            homepage: null,
            stars: 15,
            forks: 5,
            language: "Python",
            topics: ["ai", "safety", "vehicle", "computer-vision", "ml"],
            category: "AI/ML",
            year: "2026"
        },
        {
            id: 4,
            name: "Task Grow",
            description: "A comprehensive task management and productivity tracking application with advanced analytics and team collaboration features.",
            url: "https://github.com/nevil06/task-grow",
            homepage: null,
            stars: 6,
            forks: 1,
            language: "TypeScript",
            topics: ["productivity", "task-management", "analytics", "collaboration"],
            category: "Web App",
            year: "2024"
        },
        {
            id: 5,
            name: "Portfolio Website",
            description: "Personal portfolio website built with React and modern web technologies. Features bold editorial design and smooth animations.",
            url: "https://github.com/nevil06/portfolio",
            homepage: "https://nevil-dsouza.vercel.app",
            stars: 4,
            forks: 0,
            language: "React",
            topics: ["portfolio", "react", "css", "responsive"],
            category: "Web App",
            year: "2024"
        },
        {
            id: 6,
            name: "Weather Dashboard",
            description: "A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.",
            url: "https://github.com/nevil06/weather-dashboard",
            homepage: null,
            stars: 3,
            forks: 1,
            language: "JavaScript",
            topics: ["weather", "api", "dashboard", "maps"],
            category: "Web App",
            year: "2023"
        }
    ];

    const categories = ['all', ...new Set(allProjects.map(p => p.category))];
    const languages = ['all', ...new Set(allProjects.map(p => p.language))];

    useEffect(() => {
        setLoading(true);
        // Simulate loading
        setTimeout(() => {
            setProjects(allProjects);
            setLoading(false);
        }, 500);
    }, []);

    const filteredProjects = filter === 'all' 
        ? projects 
        : projects.filter(p => p.category === filter || p.language === filter);

    const goBack = () => {
        window.history.back();
    };

    if (loading) {
        return (
            <div className="all-projects-page">
                <div className="container">
                    <div className="loading-state">
                        <div className="loading-spinner"></div>
                        <p>Loading all projects...</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="all-projects-page">
            <div className="container">
                <div className="page-header">
                    <div className="page-title-section">
                        <h1 className="page-title">All Projects</h1>
                        <p className="page-subtitle">
                            A comprehensive collection of my work spanning web development, AI/ML, and more
                        </p>
                    </div>
                </div>

                <div className="filters-section">
                    <div className="filter-group">
                        <h3>Filter by Category:</h3>
                        <div className="filter-buttons">
                            {categories.map(category => (
                                <button
                                    key={category}
                                    className={`filter-btn ${filter === category ? 'active' : ''}`}
                                    onClick={() => setFilter(category)}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="filter-group">
                        <h3>Filter by Language:</h3>
                        <div className="filter-buttons">
                            {languages.map(language => (
                                <button
                                    key={language}
                                    className={`filter-btn ${filter === language ? 'active' : ''}`}
                                    onClick={() => setFilter(language)}
                                >
                                    {language}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="projects-stats">
                    <div className="stat-card">
                        <span className="stat-number">{filteredProjects.length}</span>
                        <span className="stat-label">Projects</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-number">{filteredProjects.reduce((sum, p) => sum + p.stars, 0)}</span>
                        <span className="stat-label">Total Stars</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-number">{new Set(filteredProjects.map(p => p.language)).size}</span>
                        <span className="stat-label">Languages</span>
                    </div>
                </div>

                <div className="all-projects-grid">
                    {filteredProjects.map((project, index) => (
                        <div key={project.id} className="project-card-full">
                            <div className="project-card-header">
                                <div className="project-meta">
                                    <span className="project-year">{project.year}</span>
                                    <span className="project-category">{project.category}</span>
                                </div>
                                <span className="project-language">{project.language}</span>
                            </div>

                            <div className="project-content">
                                <h3 className="project-title">{project.name}</h3>
                                <p className="project-description">{project.description}</p>

                                <div className="project-topics">
                                    {project.topics.map(topic => (
                                        <span key={topic} className="topic-tag">{topic}</span>
                                    ))}
                                </div>

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
                        </div>
                    ))}
                </div>

                {filteredProjects.length === 0 && (
                    <div className="no-projects">
                        <p>No projects found for the selected filter.</p>
                        <button 
                            onClick={() => setFilter('all')} 
                            className="btn btn-primary"
                        >
                            Show All Projects
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllProjects;