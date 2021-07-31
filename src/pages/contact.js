import React from 'react';
import Navigation from '../components/Navigation/Navigation';

const Contact = () => {
    return (
        <div id="contact">
            <Navigation></Navigation>
            <div className="container contact">
                <a href="mailto:mohamedlamine.oubaya@gmail.com"><i className="fas fa-envelope fa-5x"></i></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mohamed-lamine-oubaya/"><i className="fab fa-linkedin fa-5x"></i></a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/AMINE1921"><i className="fab fa-github-square fa-5x"></i></a>
                <a target="_blank" rel="noopener noreferrer" href="http://discordapp.com/channels/@AMINE#5328"><i className="fab fa-discord fa-5x"></i></a>
            </div>
        </div>
    );
};

export default Contact;