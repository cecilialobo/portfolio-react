import About from './components/About/About';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Photo from './assets/template.png';

import './App.css';
import './resposive.css';
import './components/About/About.css';
import { useRef } from 'react';

function App() {

  const scrollIntoView = (divRef) => {
    divRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  const homeRef = useRef();
  const aboutRef = useRef();
  const curriculumRef = useRef();
  const contactRef = useRef();

  return (
    <div className="App">
      <div className="landing" ref={homeRef}>
        <Header id1="curriculum"
          id2="contact"
          title1="Curriculum"
          title2="Contact"
          handleClickMenu1={() => scrollIntoView(curriculumRef)}
          handleClickMenu2={() => scrollIntoView(contactRef)}
        />

        <p className="frontend-title">Frontend Developer</p>
        <h1 className="title">Cecilia Lobo</h1>
        <i className="fas fa-angle-down" id="arrowBtn" onClick={() => { scrollIntoView(aboutRef) }}></i>
      </div>

      <div className="homeGrid" ref={aboutRef}>
        <About />
        <img className="img" src={Photo} alt="Cecilia smiling"></img>
      </div>

      <div className="curriculum" ref={curriculumRef}>
        <Header id1="landing"
          id2="contact2"
          title1="Home"
          title2="Contact"
          handleClickMenu1={() => scrollIntoView(homeRef)}
          handleClickMenu2={() => scrollIntoView(contactRef)}
        />
        <Education />
        <Experience />
      </div>

      <div className="contactDiv" ref={contactRef}>
        <Header
          id1="landing2"
          id2="curriculum2"
          title1="Home"
          title2="Curriculum"
          handleClickMenu1={() => scrollIntoView(homeRef)}
          handleClickMenu2={() => scrollIntoView(curriculumRef)}
        />
        <Contact />
      </div>
    </div>
  );
}

export default App;
