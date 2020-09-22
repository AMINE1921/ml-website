import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import andyCapp from '../media/andyCapp.png'

const Navigation = () => {
    return (
        <div className="navBar">
            <header>
                <div className="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="navbar-brand name-logo">
                                <a class="logo" href="/"><span class="logo-img" style={{backgroundImage: `url(${andyCapp})`}}> </span>ANDY CAPP</a>
                            </div>
                            <a className="colorlib-nav-toggle"><i></i></a>
                        </div>
                    </div>
                </div>
            </header>

            <nav>
                <div class="col-md-12 text-center">
                    <ul className="nav-links">
                        <li><NavLink exact to="/" activeClassName="navActive"><span><small>01 </small>Accueil</span></NavLink></li>
                        <li><NavLink exact to="/competences" activeClassName="navActive"><span><small>02 </small>Compétences</span></NavLink></li>
                        <li><NavLink exact to="/portfolio" activeClassName="navActive"><span><small>03 </small>Portfolio</span></NavLink></li>
                        <li><NavLink exact to="/contact" activeClassName="navActive"><span><small>04 </small>Contact</span></NavLink></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;