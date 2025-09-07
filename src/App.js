import React, {useEffect, useState} from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Components/NavigationBar/Navigation';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import Work from './Components/Work/Work';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
    const [isMobileDevice, setIsMobileDevice] = useState(false);

    useEffect(() => {
        const ua = navigator.userAgent || navigator.vendor || window.opera;
        const mobileRegex = /android|iphone|ipad|ipod|opera mini|iemobile|mobile/i;
        setIsMobileDevice(mobileRegex.test(ua));
    }, []);

    if (!isMobileDevice) {
        return (
            <div className="App">
                <header className="App-header">
                    <p>This site is only accessible on mobile devices.</p>
                </header>
            </div>
        );
    }

    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/work" element={<Work />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
