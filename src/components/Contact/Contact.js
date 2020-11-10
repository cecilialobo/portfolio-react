import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className="Contact">
            <h2 className="heading">Get in touch with me:</h2>
            <h3 className="subtitle">Email</h3>
            <p className="textp">cecilialobo92@gmail.com</p>
            <br/>
            <h3 className="subtitle">Social</h3>
            <a href="https://github.com/cecilialobo" target="blank" className="social-icon"><i className="fab fa-github-square"></i></a>
        <a href="https://www.linkedin.com/in/cecilialobo/"  target="blank" className="social-icon"><i className="fab fa-linkedin"></i></a>
        </div>
    );
}

export default Contact;