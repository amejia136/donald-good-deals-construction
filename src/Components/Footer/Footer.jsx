import React from 'react';
import './Footer.scss';
import logo from '../../Assets/NavigationPics/logo.png';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                <Link to="/" aria-label="Go to Home">
                    <img
                        src={logo}
                        alt="Company Logo"
                        className="footer-logo"
                    />
                </Link>

                <div className="footer-section">
                    <h2 className="footer-title">OFFICE HOURS</h2>
                    <p>Monday to Friday<br />8:00 AM - 5:00 PM</p>
                </div>

                <hr className="footer-divider" />

                <div className="footer-section">
                    <h2 className="footer-title">QUICK MENU</h2>
                    <p>
                        <Link to="/">Home</Link><br />
                        <Link to="/services">Services</Link><br />
                        <Link to="/work">Our Work</Link>
                    </p>
                </div>

                <hr className="footer-divider" />

                <div className="footer-section">
                    <h2 className="footer-title">SERVICES</h2>
                    <p>
                        Painting<br />
                        Wood Fence<br />
                        Repairs<br />
                        Dry Wall<br />
                        Power-wash<br />
                        Flooring
                    </p>
                </div>

                <hr className="footer-divider" />

                <div className="footer-section">
                    <h2 className="footer-title">CONTACT US</h2>
                    <p>
                        +1 (631) 925-7506<br />
                        donaldgooddeals@gmail.com<br />
                        17 Croley St, Huntington, NY 11743
                    </p>
                </div>

                <hr className="footer-divider" />

                <div className="footer-bottom">
                    <p>
                        © 2025 Donald Good Deals Construction Corp. All rights reserved.<br />
                        License Number: HI-69176 — Suffolk County, NY
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;