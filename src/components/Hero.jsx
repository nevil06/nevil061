import { SOCIAL_LINKS } from '../utils/constants';
import './Hero.css';

const Hero = () => {
    const handleScroll = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="hero-section">
            {/* Cinematic Large Image Layer (covers full screen width) */}
            <div className="hero-visual-layer">
                <img 
                    src="/hero-image.png" 
                    alt="NEVIL - Full Stack Developer & Founder" 
                    className="hero-portrait"
                />
            </div>

            <div className="hero-container">
                {/* Minimalist Overlay Content */}
                <div className="hero-content-layer">
                    <div className="hero-meta-info">
                        <h2 className="hero-role-title">Full Stack Developer</h2>
                        <h3 className="hero-tagline">
                            Building digital products<br />
                            and AI experiences.
                        </h3>
                    </div>

                    <div className="hero-cta-actions">
                        <button onClick={() => handleScroll('projects')} className="btn btn-primary">
                            View Projects
                        </button>
                        <a 
                            href="/Nevil_Anson_Dsouza_Resume.pdf" 
                            download="Nevil_Anson_Dsouza_Resume.pdf"
                            className="btn btn-outline"
                        >
                            Download Resume
                        </a>
                        <button onClick={() => handleScroll('contact')} className="btn btn-outline">
                            Contact Me
                        </button>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="hero-scroll-indicator" onClick={() => handleScroll('moon-experience')}>
                <span className="scroll-arrow">↓</span>
            </div>
        </section>
    );
};

export default Hero;
