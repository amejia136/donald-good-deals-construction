import './Work.css';
import workBackground from '../../Assets/NavigationPics/work-bg.jpg';

function Work() {

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
        </div>
    );
}

export default Work;
