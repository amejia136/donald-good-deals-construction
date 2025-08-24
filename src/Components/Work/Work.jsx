import React, { useState } from 'react';
import './Work.css';
import workBackground from '../../Assets/NavigationPics/work-bg.jpg';
import beforeOne from '../../Assets/NavigationPics/beforeOne.jpg';
import beforeTwo from '../../Assets/NavigationPics/beforeTwo.jpg';
import afterOne from '../../Assets/NavigationPics/afterOne.jpg';
import afterTwo from '../../Assets/NavigationPics/afterTwo.jpg';

function Work() {
    const beforeImages = [beforeOne, beforeTwo];
    const afterImages = [afterOne, afterTwo];

    const [idx, setIdx] = useState(0);
    const max = Math.min(beforeImages.length, afterImages.length);

    const prevPair = () => setIdx(i => (i - 1 + max) % max);
    const nextPair = () => setIdx(i => (i + 1) % max);

    return (
        <div className="work-page">
            {/* ===== HERO SECTION ===== */}
            <section
                className="work-hero"
                style={{ backgroundImage: `url(${workBackground})` }}
            >
                <div className="work-yellow" />
                <div className="work-content">
                    <h1 className="work-title">OUR WORK</h1>
                    <p className="work-subtitle">
                        Trusted Home Improvement <br />
                        Solutions for Suffolk County
                    </p>
                    <p className="work-blurb">
                        Our work speaks for itself. <br />
                        From full remodels to detailed <br />
                        repairs, we bring licensed skill <br />
                        and personal care to every <br />
                        home we touch. Browse our <br />
                        past projects to see the <br />
                        quality and dedication <br />
                        behind what we do.
                    </p>
                </div>
            </section>

            {/* ===== BEFORE / AFTER ===== */}
            <section className="work-gallery">
                <h2 className="wa-label">BEFORE</h2>
                <div className="wa-card">
                    <img src={beforeImages[idx]} alt="Before project" className="wa-image" />
                </div>

                {/* single control between BEFORE image and AFTER title */}
                <div className="wa-arrows wa-arrows--center">
                    <button className="nav-btn" onClick={prevPair} aria-label="Previous">‹</button>
                    <button className="nav-btn" onClick={nextPair} aria-label="Next">›</button>
                </div>

                <h2 className="wa-label">AFTER</h2>
                <div className="wa-card">
                    <img src={afterImages[idx]} alt="After project" className="wa-image" />
                </div>
            </section>
        </div>
    );
}

export default Work;
