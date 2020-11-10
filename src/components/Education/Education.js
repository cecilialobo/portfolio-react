import React from 'react';

import './Education.css';

function Education (){
    return(
        <div className="Education">
            <h2 className="heading">Education</h2>
            <div className="cvcontent">
                <h3 className="subtitle">Hyper Island</h3>
                <p className="textp">Frontend Developer</p>
                <p className="textp">2020 – 2022</p>
                <br/>
                <h3 className="subtitle">Federal University of Minas Gerais</h3>
                <p className="textp">Master of Science - MS, Nutrition and Health</p>
                <p className="textp">2018 – 2019</p>
                <br/>
                <h3 className="subtitle">Corvinus University of Budapest</h3>
                <p className="textp">Exchange Student - Food Sciences and Technology</p>
                <p className="textp">2015 – 2016</p>
                <br/>
                <h3 className="subtitle">Federal University of Rio de Janeiro State</h3>
                <p className="textp">Bachelor's degree - Nutrition Sciences</p>
                <p className="textp">2011 – 2017</p>
            </div>
        </div>
    );
}

export default Education;