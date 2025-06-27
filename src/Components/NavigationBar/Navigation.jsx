import React, { useState } from 'react';
import './Navigation.css';
import logo from '../../Assets/NavigationPics/logo.png';

function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const closeMenu = () => setIsOpen(false); // new function to close menu

    return (
        <nav className="navbar">
            <div className="navbar-top">
                <img src={logo} alt="logo" className="navbar-logo" />
                <h1 className="navbar-title">
                    DONALD GOOD DEALS
                    <div className="navbar-subtitle">
                        <span className="line"></span>
                        CONSTRUCTION CORP
                        <span className="line"></span>
                    </div>
                </h1>

                <div className="menu-icon" onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>

            {/* Background overlay when menu is open */}
            {isOpen && <div className="menu-backdrop" onClick={closeMenu}></div>}

            {/* Slide-in menu */}
            <div className={`menu-overlay ${isOpen ? 'open' : ''}`}>
                <img
                    src={logo}
                    alt="logo"
                    className="menu-logo"
                    onClick={closeMenu}
                    style={{ cursor: 'pointer' }}
                />
                <h2 className="menu-title">
                    QUALITY BUILD SOLUTIONS<br /><span>2025</span>
                </h2>

                <ul className="menu-items">
                    <li><i className="fas fa-home"></i> HOME</li>
                    <li><i className="fas fa-cogs"></i> SERVICES</li>
                    <li><i className="fas fa-hard-hat"></i> OUR WORK</li>
                    <li><i className="fas fa-phone"></i> CONTACT</li>
                </ul>
            </div>
        </nav>
    );

}

export default Navigation;
