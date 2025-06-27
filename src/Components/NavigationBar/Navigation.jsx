import React, { useState, useEffect } from 'react';
import './Navigation.css';
import logo from '../../Assets/NavigationPics/logo.png';
import { Link } from 'react-router-dom';

function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const closeMenu = () => setIsOpen(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

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
                {/* TITLE */}
                <div className="menu-header">
                    <h1 className="menu-top-title">
                        DONALD GOOD DEALS
                        <div className="menu-subtitle">
                            <span className="line"></span>
                            CONSTRUCTION CORP
                            <span className="line"></span>
                        </div>

                    </h1>
                    <img
                        src={logo}
                        alt="logo"
                        className="menu-logo"
                        onClick={closeMenu}
                        style={{ cursor: 'pointer' }}
                    />
                </div>

                {/* Divider */}
                <hr className="menu-divider" />

                <ul className="menu-items">
                    <li onClick={closeMenu}>
                        <Link to="/"><i className="fas fa-home"></i> HOME</Link>
                    </li>
                    <li onClick={closeMenu}>
                        <Link to="/services"><i className="fas fa-cogs"></i> SERVICES</Link>
                    </li>
                    <li onClick={closeMenu}>
                        <Link to="/work"><i className="fas fa-hard-hat"></i> OUR WORK</Link>
                    </li>
                    <li onClick={closeMenu}>
                        <Link to="/contact"><i className="fas fa-phone"></i> CONTACT</Link>
                    </li>
                </ul>

            </div>

        </nav>
    );

}

export default Navigation;
