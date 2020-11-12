import React from 'react';
import './Header.css';

function Header(props) {
    return(
        <div className="Header">
            <button href="" id={props.id1}>{props.title1}</button>
            <button href="" id={props.id2}>{props.title2}</button>
        </div>
    );
}

export default Header;