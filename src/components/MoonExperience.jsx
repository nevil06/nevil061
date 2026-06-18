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
            
            let opacity = 0;
            let scale = 1;
            
            if (rect.top > 0) {
                // Section is entering from the bottom
                // rect.top goes from viewHeight to 0
                // We start fading in the text when the top of the section is in the lower 60% of the screen
                const fadeStart = viewHeight * 0.6;
                if (rect.top < fadeStart) {
                    opacity = (fadeStart - rect.top) / fadeStart; // Fades from 0 to 1 as rect.top approaches 0
                } else {
                    opacity = 0;
                }
                scale = 1;
            } else if (scrolledAmount >= 0 && scrolledAmount <= totalScrollable) {
                const progress = scrolledAmount / totalScrollable; // 0 to 1
                
                // We are stuck: stay fully visible, then fade out during the last 20% of the scroll timeline
                if (progress <= 0.8) {
                    opacity = 1;
                } else {
                    opacity = 1 - (progress - 0.8) / 0.2; // Fade out during the last 20%
                }
                
                // Subtle scale effect on the moon
                scale = 1 + progress * 0.1;
            } else {
                opacity = 0;
                scale = 1.1;
            }
            
            setTextOpacity(opacity);
            setVideoScale(scale);
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
