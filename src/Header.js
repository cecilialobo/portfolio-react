import React from 'react';
import './index.css';
import './Header.css';

function Header(props) {
    return(
        <div className="Header">
            <a href={props.href1}>{props.title1}</a>
            <a href={props.href2}>{props.title2}</a>
        </div>
    );
}

export default Header;