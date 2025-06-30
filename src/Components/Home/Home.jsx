import React from 'react';
import './Home.css';
import constructionVideo from '../../Assets/Videos/home_bg_two.mp4';

function Home() {
    return (
        <div className="home-page">
            <div className="video-section">
                <video
                    className="background-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={constructionVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="video-overlay-content">
                    <h1 className="video-heading">RESIDENTIAL.</h1>
                    <h1 className="video-heading">RELIABLE.</h1>
                    <h1 className="video-heading">RESULTS THAT LAST.</h1>
                </div>
            </div>

            {/* GRADIENT SECTION */}
            <div className="video-gradient"></div>

            <div className="rest-of-home">
                <p>Some more text or elements</p>
                <div style={{ height: '1000px' }}></div>
                <p>More content at the bottom</p>
            </div>
        </div>
    );
}



export default Home;
