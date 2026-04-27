import { useState, useEffect } from 'react';
import { fetchGitHubRepos, formatRepoData } from '../services/github';
import './Contributions.css';

const Contributions = () => {
    const [groupProjects, setGroupProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadGroupProjects = async () => {
            try {
                setLoading(true);
                const repoData = await fetchGitHubRepos();
                const formattedRepos = repoData.group.map(formatRepoData);
                setGroupProjects(formattedRepos);
            } catch (err) {
                console.error('Error fetching group projects:', err);
            } finally {
                setLoading(false);
            }
        };

        loadGroupProjects();
    }, []);

    if (loading) {
        return (
            <section className="section contributions-section">
                <div className="container">
                    <h2 className="section-title">Group Projects & Collaborations</h2>
                    <div className="loading">
                        <div className="spinner"></div>
                        <p>Loading group projects...</p>
                    </div>
                </div>
            </section>
        );
    }

    if (groupProjects.length === 0) {
        return null; // Don't show section if no group projects
    }

    return (
        <section id="contributions" className="section contributions-section">
            <div className="container">
                <h2 className="section-title">Group Projects & Collaborations</h2>
                <p className="section-description">
                    Collaborative projects and team contributions
                </p>

                <div className="contributions-grid grid grid-3">
                    {groupProjects.map((project) => (
                        <div key={project.id} className="contribution-card glass-card">
                            <div className="contribution-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2M4 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2m5 4.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5S9 9.33 9 8.5M12 1l-2 4h4l-2-4m7 7.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5M5 8.5c0-.83.67-1.5 1.5-1.5S8 7.67 8 8.5 7.33 10 6.5 10 5 9.33 5 8.5M12 23l2-4h-4l2 4z"/>
                                </svg>
                            </div>

                            <h3 className="contribution-repo">{project.name}</h3>
                            <p className="project-description">{project.description}</p>
                            
                            {project.language && (
                                <span className="contribution-type">{project.language}</span>
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
                                    className="btn btn-outline btn-sm"
                                >
                                    View Project
                                </a>
                                {project.homepage && (
                                    <a
                                        href={project.homepage}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-primary btn-sm"
                                    >
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contributions;