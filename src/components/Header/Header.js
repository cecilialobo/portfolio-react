import React from 'react';
import './Header.css';

function Header(props) {
    return(
        <div className="Header">
            <a href="" id={props.id1}>{props.title1}</a>
            <a href="" id={props.id2}>{props.title2}</a>
        </div>
    );
}

export default Header;