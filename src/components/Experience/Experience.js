import React from 'react';

import './Experience.css';

function Experience (){
    return(
        <div className="Experience">
            <h2 className="heading">Experience</h2>
            <div className="cv-content">
                <h3 className="subtitle">Frontend Developer - Apprenticeship</h3>
                <h4>Cribly</h4>
                <p className="textp">Feb 2020 – Aug 2020 (7 months)</p>
                <p className="textp">Stockholm, Sweden</p>
                <br/>
                <h3 className="subtitle">Dietitian and Researcher</h3>
                <h4>Clinical Hospital of Federal University of Minas Gerais</h4>
                <p className="textp">Jul 2018 – Dec 2019 (1 year and 6 months)</p>
                <p className="textp">Brazil</p>
                <br/>
                <h3 className="subtitle">Clinical Dietitian</h3>
                <h4>Private Practice</h4>
                <p className="textp">Mar 2017 - Dec 2019 (2 years and 10 months)</p>
                <p className="textp">Brazil</p>
            </div>
        </div>
    );
}

export default Experience;