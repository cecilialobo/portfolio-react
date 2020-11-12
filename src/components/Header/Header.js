import React from 'react';
import './Header.css';

function Header(props) {
    return(
        <div className="Header">
            <button id={props.id1} onClick={props.handleClickMenu1}>{props.title1}</button>
            <button id={props.id2} onClick={props.handleClickMenu2}>{props.title2}</button>
        </div>
    );
}

export default Header;