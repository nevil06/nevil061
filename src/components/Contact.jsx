import { useEffect, useRef } from 'react';
import { SOCIAL_LINKS, PERSONAL_INFO } from '../utils/constants';
import './Contact.css';

const Contact = () => {
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

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <section ref={sectionRef} id="contact" className="contact-section-new">
            <div className="container">
                <div className="contact-content-new reveal-on-scroll">
                    <span className="contact-small-title">Get in Touch</span>
                    <h2 className="contact-cta-title">
                        Let's build<br />
                        something <span className="highlight-red">meaningful</span>.
                    </h2>
                    
                    <p className="contact-brief">
                        Whether you want to build an AI product, collaborate on a project, or just chat engineering, drop me a message.
                    </p>

                    <div className="contact-actions-row">
                        <a href={`mailto:${PERSONAL_INFO.email}`} className="contact-email-btn">
                            {PERSONAL_INFO.email}
                        </a>
                    </div>

                    <div className="contact-social-row">
                        <a
                            href={SOCIAL_LINKS.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-text-link"
                            aria-label="LinkedIn"
                        >
                            LinkedIn ↗
                        </a>
                        <span className="social-divider">/</span>
                        <a
                            href={SOCIAL_LINKS.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-text-link"
                            aria-label="GitHub"
                        >
                            GitHub ↗
                        </a>
                    </div>
                </div>

                <div className="scroll-back-to-top reveal-on-scroll">
                    <button onClick={scrollToTop} className="back-top-trigger">
                        Back to Top ↑
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Contact;