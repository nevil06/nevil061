import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-new">
            <div className="container">
                <div className="footer-content-new">
                    <span className="footer-brand">NEVIL</span>
                    <span className="footer-tagline">Designed for performance. Built for impact.</span>
                    <span className="footer-copy">&copy; {new Date().getFullYear()} NEVIL. All rights reserved.</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
