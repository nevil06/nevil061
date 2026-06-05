import { useEffect, useRef, useState } from 'react';
import './MoonExperience.css';

const MoonExperience = () => {
    const sectionRef = useRef(null);
    const [textOpacity, setTextOpacity] = useState(0);
    const [videoScale, setVideoScale] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;
            
            const rect = sectionRef.current.getBoundingClientRect();
            const sectionHeight = rect.height;
            const viewHeight = window.innerHeight;
            
            // Calculate how far the section has scrolled through the viewport
            // When rect.top is 0, the section is fully visible.
            // When rect.top is -sectionHeight, the section has fully scrolled past.
            const scrolledAmount = -rect.top;
            const totalScrollable = sectionHeight - viewHeight;
            
            if (scrolledAmount >= 0 && scrolledAmount <= totalScrollable) {
                const progress = scrolledAmount / totalScrollable; // 0 to 1
                
                // Opacity curve: fades in, stays visible, fades out
                let opacity = 0;
                if (progress < 0.4) {
                    opacity = progress / 0.4; // Fade in during first 40%
                } else if (progress >= 0.4 && progress <= 0.7) {
                    opacity = 1; // Stay solid from 40% to 70%
                } else {
                    opacity = 1 - (progress - 0.7) / 0.3; // Fade out during last 30%
                }
                
                setTextOpacity(opacity);
                
                // Subtle scale effect on moon
                const scale = 1 + progress * 0.1;
                setVideoScale(scale);
            } else if (rect.top > 0) {
                setTextOpacity(0);
                setVideoScale(1);
            } else if (rect.bottom < viewHeight) {
                setTextOpacity(0);
                setVideoScale(1.1);
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Initial call
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section ref={sectionRef} id="moon-experience" className="moon-section">
            <div className="moon-sticky-container">
                {/* Looping Moon Animation Video */}
                <div className="moon-video-wrapper">
                    <video 
                        className="moon-video"
                        src="/moon-rotation.mp4"
                        type="video/mp4"
                        loop 
                        muted 
                        autoPlay 
                        playsInline
                        style={{ transform: `scale(${videoScale})` }}
                    />
                </div>

                {/* Narrative Typography overlay */}
                <div className="moon-overlay" style={{ opacity: textOpacity }}>
                    <div className="container">
                        <h2 className="moon-quote-text">
                            Every idea<br />
                            starts in the <span className="highlight-red">dark</span>.
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MoonExperience;
