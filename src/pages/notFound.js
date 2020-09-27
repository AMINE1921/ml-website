import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div id="notFound">
            <div className="container">
                <p>404, page not found.</p>
                <NavLink exact to="/" ><span className="btn btn-outline-light">Retour vers l'accueil</span></NavLink>
            </div>
        </div>
    );
};

export default NotFound;