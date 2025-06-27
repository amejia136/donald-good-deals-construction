import logo from './logo.svg';
import './App.css';

function App() {
  const isMobile = window.innerWidth <= 768; // typical mobile width threshold

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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
  );
}

export default App;

