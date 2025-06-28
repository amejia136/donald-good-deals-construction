import React from 'react';
import './Footer.scss';
import logo from '../../Assets/NavigationPics/logo.png';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <img
                    src={logo}
                    alt="Company Logo"
                    className="footer-logo"
                />

                <div className="footer-section">
                    <h2 className="footer-title">OFFICE HOURS</h2>
                    <p>Monday to Friday<br />8:00 AM - 5:00 PM</p>
                </div>

                <div className="footer-section">
                    <h2 className="footer-title">QUICK MENU</h2>
                    <p>Home<br />Services<br />Our Work</p>
                </div>

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

                <div className="footer-section">
                    <h2 className="footer-title">CONTACT US</h2>
                    <p>
                        +1 (631) 123-4567<br />
                        info@example.com<br />
                        123 Example Avenue, Huntington, NY 1234
                    </p>
                </div>

                <hr className="footer-divider" />

                <div className="footer-bottom">
                    <p>
                        © 2025 Donald Good Deals Construction Corp. All rights reserved.<br />
                        License Number: H123456789 — Suffolk County, NY
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
