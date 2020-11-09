import './App.css';
import './About.css';
import About from './About';
import Curriculum from './Curriculum';

function App() {
  return (
    <div className="App">
      <div className="section1">
        <p className="frontend-title">Frontend Developer</p>
        <h1 className="title">Cecilia Lobo</h1>
      </div>
      <div className="section2">
        <h2 className="heading">Hello world!</h2>
        <About subtitle="About Me" textp="I'm a brazilian Frontend Developer passionate about technology, based in Stockholm/Sweden."></About>
        <br/>
        <About subtitle="Changing Careers" textp="Technology is a new thing for me. I used to work as a Dietitian and I have a M.Sc. in Nutrition and Health. 
        While doing my master's, I discovered the world of coding and decided that this was the right path for me. 
        Currently, I'm a full-time student at Hyper Island. Most of my work is using HTML, CSS and javaScript."></About>
        <br/>
        <About subtitle="Travel" textp="Another big passion of mine is to travel and be able to discover different cultures. 
        I have visited around 30 countries and hope to continue visiting more and more."></About>
      </div>
      <div className="section3">
        <Curriculum subtitleCv="Education" ></Curriculum>
      </div>
    </div>
  );
}

export default App;
