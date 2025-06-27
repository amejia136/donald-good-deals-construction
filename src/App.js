import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './App.css';
import Navigation from './Components/NavigationBar/Navigation';

function App() {
    const isMobile = window.innerWidth <= 768;

    if (!isMobile) {
        return (
            <div className="App">
                <header className="App-header">
                    <p>This site is only accessible on mobile devices.</p>
                </header>
            </div>
        );
    }

    return (
        <div className="App">
            <Navigation />
            { }
        </div>
    );
}

export default App;
