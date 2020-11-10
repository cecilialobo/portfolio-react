import About from './components/About/About';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Photo from './assets/template.png';

import './App.css';
import './components/About/About.css';

function App() {
  return (
    <div className="App">
      <div className="landing">
        <Header id1="curriculum" id2="contact" title1="Curriculum" title2="Contact"></Header>
        <p className="frontend-title">Frontend Developer</p>
        <h1 className="title">Cecilia Lobo</h1>
        <i className="fas fa-angle-down" id="arrowBtn"></i>
      </div>

      <div className="homeGrid">
      <About></About>
      <img className="img" src={Photo} alt="Cecilia's image"></img>
      </div>

      <div className="curriculum">
        <Header id1="landing" id2="contact2" title1="Home" title2="Contact"></Header>
        <Education></Education>
        <Experience></Experience>
      </div>

      <div className="contactDiv">
        <Header id1="landing2" id2="curriculum2" title1="Home" title2="Curriculum"></Header>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
