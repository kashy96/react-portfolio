import './App.css';

// css files
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './img/icons/css/ionicons.css';
import './img/font-awesome/css/font-awesome.css';
import './style.css';

import NavBar from './components/navbar';
import Intro from './components/intro';
import About from './components/about';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import BackToTop from './components/back-to-top';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      <NavBar />
      <Intro />
      <About />
      <Portfolio />
      <Contact />
      <BackToTop />
      
    </div>
  );
}

export default App;
