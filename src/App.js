import About from './components/About/About';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';

import './App.css';
import './components/About/About.css';

function App() {
  return (
    <div className="App">
      <div className="landing">
        <p className="frontend-title">Frontend Developer</p>
        <h1 className="title">Cecilia Lobo</h1>
      </div>

      <About></About>

      <div className="curriculum">
        <Education></Education>
        <Experience></Experience>
      </div>

      <Contact></Contact>
    </div>
  );
}

export default App;
