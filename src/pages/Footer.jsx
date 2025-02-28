import React from "react";
import "../styles/Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <h2>Yoga Studio</h2>
                    <p>Find your inner peace</p>
                </div>
                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/classes">Classes</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/careers">Careers</a></li>
                        <li><a href="/digital-archives">Digital Archives</a></li>
                        <li><a href="/gear-up-give-back">Gear Up Give Back</a></li>
                        <li><a href="/licensing">Licensing & Accolades</a></li>
                        <li><a href="/sitemap">Sitemap</a></li>
                    </ul>
                </div>
                <div className="footer-social">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2025 Yoga Studio. All rights reserved.</p>
                <div className="footer-legal-links">
                    <a href="/terms-of-use">Terms of Use</a>
                    <a href="/privacy-policy">Privacy Policy</a>
                    <a href="/manage-cookie-preferences">Manage Cookie Preferences</a>
                    <a href="/your-privacy-choices">Your Privacy Choices</a>
                    <a href="/wa-privacy-notice">WA Privacy Notice</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
