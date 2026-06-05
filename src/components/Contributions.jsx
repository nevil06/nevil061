import { useState, useEffect, useRef } from 'react';
import { fetchGitHubRepos, formatRepoData } from '../services/github';
import './Contributions.css';

const Contributions = () => {
    const [groupProjects, setGroupProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const sectionRef = useRef(null);

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
    }, [loading]);

    if (loading) {
        return (
            <section className="contributions-section-new">
                <div className="container">
                    <div className="loading-state">
                        <div className="loading-spinner"></div>
                        <p>Syncing collaborations...</p>
                    </div>
                </div>
            </section>
        );
    }

    if (groupProjects.length === 0) {
        return null; 
    }

    return (
        <section ref={sectionRef} id="contributions" className="contributions-section-new">
            <div className="container">
                <div className="reveal-on-scroll">
                    <h2 className="section-title">Collaborations</h2>
                </div>

                <div className="contributions-grid-new">
                    {groupProjects.map((project, index) => (
                        <div 
                            key={project.id} 
                            className="contribution-row reveal-on-scroll"
                            style={{ transitionDelay: `${index * 0.1}s` }}
                        >
                            <div className="collab-meta">
                                <span className="collab-name">{project.name}</span>
                                {project.language && (
                                    <span className="collab-lang">{project.language}</span>
                                )}
                            </div>
                            
                            <p className="collab-desc">{project.description}</p>
                            
                            <div className="collab-actions">
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="collab-link-btn"
                                >
                                    Repository ↗
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contributions;