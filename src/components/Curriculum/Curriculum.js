import React from 'react';

import './Curriculum.css';

function Curriculum (props){
    return(
        <div className="curriculum">
            <h3 className="subtitle">{props.subtitleCv}</h3>
            <p className="textp">{props.textCv1}</p>
            <p className="textp">{props.textCv2}</p>
        </div>
    );
}

export default Curriculum;