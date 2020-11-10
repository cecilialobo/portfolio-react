import About from './components/About/About';
import Curriculum from './components/Curriculum/Curriculum';

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
      
      <div className="section3">
        <h2 className="heading">Education</h2>
        <Curriculum subtitleCv="Hyper Island" textCv1="Frontend Developer" textCv2="2020 – 2022" ></Curriculum>
        <Curriculum subtitleCv="Federal University of Minas Gerais" textCv1="Master of Science - MS, Nutrition and Health" textCv2="2018 – 2019" ></Curriculum>
        <Curriculum subtitleCv="Corvinus University of Budapest" textCv1="Exchange Student - Food Sciences and Technology" textCv2="2015 – 2016" ></Curriculum>
        <Curriculum subtitleCv="Federal University of Rio de Janeiro State" textCv1="Bachelor's degree - Nutrition Sciences" textCv2="2011 – 2017" ></Curriculum>
      </div>
    </div>
  );
}

export default App;
