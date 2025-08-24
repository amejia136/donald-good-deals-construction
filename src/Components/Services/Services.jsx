import React from 'react';
import './Services.css';
import logo from '../../Assets/NavigationPics/services-bg.png';
import bathroom from '../../Assets/NavigationPics/bathroom-remolding.png';
import kitchen from '../../Assets/NavigationPics/kitchen-remolding.png';
import basement from '../../Assets/NavigationPics/basement-finishing.png';
import powerwash from '../../Assets/NavigationPics/power-washing.png';

function Services() {
    return (
        <div className="services-page">
            {/* ===== HERO SECTION ===== */}
            <section
                className="services-hero"
                style={{ backgroundImage: `url(${logo})` }}
            >
                <div className="hero-yellow" />
                <div className="hero-content">
                    <h1 className="hero-title">SERVICES</h1>
                    <p className="hero-subtitle">
                        Trusted Home Improvement <br />
                        Solutions for Suffolk County
                    </p>
                    <p className="hero-blurb">
                        From kitchens and bathrooms to <br />
                        decks, fences, painting, and <br /> more. We deliver licensed, <br />
                        high-quality results that <br />
                        bring lasting value to <br />
                        your home.
                    </p>
                </div>
            </section>

            {/* ===== OUR SERVICES SECTION ===== */}
            <section className="our-services">
                <h2 className="our-services-title">Our Services</h2>

                <div className="face-card">
                    <img src={bathroom} alt="Bathroom Remodeling" className="face-card-image" />
                    <div className="face-card-overlay">
                        <h3 className="face-card-title">BATHROOM REMODELING</h3>
                        <p className="face-card-text">
                            Thinking about updating your bathroom? We can help you remodel it with new
                            tiles, fixtures, lighting, or even a whole new layout. Our goal is to make
                            your bathroom more comfortable, stylish, and easy to use.
                        </p>
                    </div>
                </div>

                <div className="face-card">
                    <img src={kitchen} alt="Kitchen Remodeling" className="face-card-image" />
                    <div className="face-card-overlay">
                        <h3 className="face-card-title">KITCHEN REMODELING</h3>
                        <p className="face-card-text">
                            The kitchen is the heart of the home, why not make it a space you truly love?
                            Whether you’re dreaming of an open-concept layout, upgraded cabinets, or modern
                            finishes, we’ll work with you to bring it to life. From design to final detail,
                            we create kitchens that blend function with beauty.
                        </p>
                    </div>
                </div>

                <div className="face-card">
                    <img src={basement} alt="Basement Finishing" className="face-card-image" />
                    <div className="face-card-overlay">
                        <h3 className="face-card-title">BASEMENT FINISHING</h3>
                        <p className="face-card-text">
                            That unused basement has so much potential. Let us help you turn it into something
                            great — a home theater, guest suite, gym, or just a comfortable space to relax.
                            We handle everything from insulation to flooring, making sure your new space is
                            built to last and ready to enjoy.
                        </p>
                    </div>
                </div>

                <div className="face-card">
                    <img src={powerwash} alt="Power Washing" className="face-card-image" />
                    <div className="face-card-overlay">
                        <h3 className="face-card-title">POWER WASHING</h3>
                        <p className="face-card-text">
                            Give your home a clean, refreshed look in just one day. Our power washing
                            services remove built-up grime, mildew, and stains from your exterior surfaces —
                            siding, patios, driveways, fences, and more. It’s the quickest way to boost your
                            home’s appearance without a major renovation.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Services;
