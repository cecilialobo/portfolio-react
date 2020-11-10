import React from 'react';
import './About.css';

function About() {
    return (
        <div className="About">

            <h2 className="heading">Hello world!</h2>
            <h3 className="subtitle">About me</h3>
            <p className="textp">I'm a brazilian Frontend Developer passionate about technology, based in Stockholm/Sweden.</p>
            <br/>
            <h3 className="subtitle">Changing Careers</h3>
            <p className="textp">Technology is a new thing for me. I used to work as a Dietitian and I have a M.Sc. in Nutrition and Health. 
                While doing my master's, I discovered the world of coding and decided that this was the right path for me. 
                Currently, I'm a full-time student at Hyper Island. Most of my work is using HTML, CSS and javaScript.</p>
            <br/>
            <h3 className="subtitle">Travel</h3>
            <p className="textp">Another big passion of mine is to travel and be able to discover different cultures. 
                I have visited around 30 countries and hope to continue visiting more and more.</p>

        </div>
    );
}

export default About;