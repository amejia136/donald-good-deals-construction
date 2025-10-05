import React, { useState } from 'react';
import './Home.css';
import constructionVideo from '../../Assets/Videos/home_bg_two.mp4';
import { Link } from 'react-router-dom';
import slideOne from '../../Assets/NavigationPics/slideOne.png';
import slideTwo from '../../Assets/NavigationPics/slideTwo.jpg';
import iconCost from '../../Assets/NavigationPics/cost-icon.png';
import iconTrack from '../../Assets/NavigationPics/tracking-icon.png';

function Home() {
    const companyDescription =
        'Donald Good Deals Construction Corp. is dedicated to transforming homes across Suffolk County with craftsmanship you can count on. From renovations to new builds, our team works closely with homeowners and local communities to deliver results that are safe, sustainable, and built to last.';

    const slides = [
        {
            img: slideTwo,
            title: 'WHO WE ARE',
            body:
                'We are builders. Donald Good Deals Construction Corp. is an independently owned and licensed construction business serving Suffolk County. With expert hands and trusted experience, we bring high-quality results to every residential project.',
            alt: 'Team on jobsite photo',
        },
        {
            img: slideOne,
            title: 'AREAS OF EXPERTISE',
            body:
                'We offer licensed home improvement services across Suffolk County. From bathrooms and kitchens to flooring, drywall, and painting, our team delivers trusted interior and exterior work. We also specialize in custom carpentry, fence installation, and new deck builds.',
            alt: 'Areas of expertise photo',
        },
    ];

    const [index, setIndex] = useState(0);
    const prev = () => setIndex(i => (i - 1 + slides.length) % slides.length);
    const next = () => setIndex(i => (i + 1) % slides.length);
    const current = slides[index];

    return (
        <div className="home-page">
            {/* ===== HERO SECTION ===== */}
            <div className="video-section">
                <div className="video-blur-wrapper">
                    <video className="background-video" autoPlay loop muted playsInline>
                        <source src={constructionVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className="video-overlay-content">
                    <h1 className="video-heading">RESIDENTIAL.</h1>
                    <h1 className="video-heading">RELIABLE.</h1>
                    <h1 className="video-heading">RESULTS THAT LAST.</h1>
                    <h1 className="video-subheading">Exclusively Serving Suffolk County, NY</h1>
                </div>

                <div className="home-button-content">
                    <Link to="/contact">
                        <button className="home-button">GET A FREE QUOTE</button>
                    </Link>
                    <Link to="/work">
                        <button className="home-button">OUR WORK</button>
                    </Link>
                </div>
            </div>

            {/* ===== GRADIENT SECTION ===== */}
            <div className="video-gradient">
                <h1 className="video-gradient-title">get to know us</h1>
                <p className="video-gradient-description">{companyDescription}</p>

                <div className="expertise-card" role="region" aria-live="polite">
                    <img src={current.img} alt={current.alt} className="expertise-image" />
                    <div className="expertise-content">
                        <h2 className="expertise-title">{current.title}</h2>
                        <p className="expertise-description">{current.body}</p>
                    </div>
                </div>

                <div className="expertise-arrows">
                    <button className="arrow-btn" onClick={prev} aria-label="Previous slide">←</button>
                    <button className="arrow-btn" onClick={next} aria-label="Next slide">→</button>
                </div>

                <div className="why-choose-us">
                    <h2 className="why-title">WHY CHOOSE US</h2>
                    <p className="why-description">We're hands-on.</p>
                    <p className="why-description">
                        At Donald Good Deals Construction Corp., every project gets our full attention from the
                        first estimate to the final detail. We bring licensed skill, honest work, and a deep
                        pride in transforming Suffolk County homes.
                    </p>
                    <p className="why-description">We treat your home like it’s our own.</p>
                </div>
            </div>

            {/* ===== REST OF HOME ===== */}
            <div className="rest-of-home">
                <h2 className="rest-title">Making Home Projects Easier</h2>
                <p className="rest-description">
                    From start to finish, we make home improvement stress-free. Whether it's a single room
                    upgrade or a full remodel, our process is designed to keep your vision, budget, and
                    timeline on track . . . every step of the way!
                </p>

                <div className="rest-card">
                    <img src={iconTrack} alt="Project Tracking Icon" className="rest-icon" />
                    <h3 className="rest-card-title">Project Tracking</h3>
                    <p className="rest-card-text">
                        We stay on top of every job detail materials, schedules, and progress, so nothing falls
                        through the cracks. You’ll always know where your project stands and what’s coming next.
                    </p>
                </div>

                <div className="rest-card">
                    <img src={iconCost} alt="Cost Icon" className="rest-icon" />
                    <h3 className="rest-card-title">Upfront Quotes &amp; Clear Pricing</h3>
                    <p className="rest-card-text">
                        We provide fast, reliable estimates and keep pricing transparent throughout the job. No
                        surprises, just honest work, done right the first time.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Home;
