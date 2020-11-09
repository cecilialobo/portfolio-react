import React from 'react';
import './index.css';
import './About.css';

function About(props) {
    return (
    <div className="About">
        <h3 className="subtitle">{props.subtitle}</h3>
        <p className="textp">{props.textp}</p>
    </div>
    );
}

export default About;