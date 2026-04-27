import { useState, useEffect } from 'react';
import { fetchGitHubRepos, formatRepoData } from '../services/github';
import './AllProjects.css';

const AllProjects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('all');
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadProjects = async () => {
            try {
                setLoading(true);
                setError(null);
                const repoData = await fetchGitHubRepos();
                
                // Get ALL repositories (not just personal ones)
                const allRepos = repoData.all || [];
                const formattedProjects = allRepos.map(formatRepoData);
                
                setProjects(formattedProjects);
            } catch (error) {
                console.error('Error loading projects:', error);
                setError('Failed to load projects from GitHub');
                setProjects([]);
            } finally {
                setLoading(false);
            }
        };

        loadProjects();
    }, []);

    // Get unique languages from actual GitHub data
    const languages = ['all', ...new Set(projects.map(p => p.language).filter(Boolean))];

    const filteredProjects = filter === 'all' 
        ? projects 
        : projects.filter(p => p.language === filter);

    if (loading) {
        return (
            <div className="all-projects-page">
                <div className="container">
                    <div className="loading-state">
                        <div className="loading-spinner"></div>
                        <p>Loading projects from GitHub...</p>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="all-projects-page">
                <div className="container">
                    <div className="no-projects">
                        <p>{error}</p>
                        <button 
                            onClick={() => window.location.reload()} 
                            className="btn btn-primary"
                        >
                            Try Again
                        </button>
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
                            Real-time projects from my GitHub repositories
                        </p>
                    </div>
                </div>

                <div className="filters-section">
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
                        <span className="stat-number">{new Set(filteredProjects.map(p => p.language).filter(Boolean)).size}</span>
                        <span className="stat-label">Languages</span>
                    </div>
                </div>

                <div className="all-projects-grid">
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="project-card-full">
                            <div className="project-card-header">
                                <div className="project-meta">
                                    <span className="project-year">{project.createdAt.getFullYear()}</span>
                                </div>
                                {project.language && (
                                    <span className="project-language">{project.language}</span>
                                )}
                            </div>

                            <div className="project-content">
                                <h3 className="project-title">{project.name}</h3>
                                <p className="project-description">{project.description}</p>

                                {project.topics.length > 0 && (
                                    <div className="project-topics">
                                        {project.topics.slice(0, 8).map(topic => (
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
                                    <div className="stat">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                            <path d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.5 4.75a.75.75 0 00-1.5 0v3.5a.75.75 0 00.471.696l2.5 1a.75.75 0 00.557-1.392L8.5 7.742V4.75z"/>
                                        </svg>
                                        <span>Updated {new Date(project.updatedAt).toLocaleDateString()}</span>
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

                {filteredProjects.length === 0 && !loading && (
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