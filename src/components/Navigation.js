import React from 'react';
import $ from 'jquery';
import { NavLink } from 'react-router-dom';
import ml_logo from '../media/ml.png'

function handleCollapse(event) {
        event.preventDefault();
        if( $('body').hasClass('menu-show') ) {
            $('body').removeClass('menu-show');
            $('#main-nav > .js-nav-toggle').removeClass('show');
        } else {
            $('body').addClass('menu-show');
            setTimeout(function(){
                $('#main-nav > .js-nav-toggle').addClass('show');
            }, 900);
        }
}

function isCurrentUrl(url) {
    const { hash } = document.location;
    return Array.isArray(url) ? url.some(u => hash === (u)) : hash === (url);
}

const Navigation = () => {
    return (
        <div className="navBar">
            <header>
                <div className="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="navbar-brand name-logo">
                                <div class="logo"><NavLink exact to="/" ><span class="logo-img" style={{backgroundImage: `url(${ml_logo})`}}> </span>Mohamed Lamine OUBAYA</NavLink></div>
                            </div>
                            <div className="js-nav-toggle nav-toggle" onClick={handleCollapse.bind(this)}><i></i></div>
                        </div>
                    </div>
                </div>
            </header>

            <nav id="main-nav" role="navigation">
                <div className="js-fullheight col-table">
                    <div className="col-table-cell js-fullheight">
                        <div className="row no-gutters">
                            <div className="col-md-12 text-center">
                                <ul>
                                    <li className={`${isCurrentUrl('#/') ? 'active' : ''}`} onClick={handleCollapse.bind(this)}><NavLink exact to="/" ><span><small>01</small>Accueil</span></NavLink></li>
                                    <li className={`${isCurrentUrl('#/competences') ? 'active' : ''}`} onClick={handleCollapse.bind(this)}><NavLink exact to="/competences" ><span><small>02</small>Compétences</span></NavLink></li>
                                    <li className={`${isCurrentUrl('#/portfolio') ? 'active' : ''}`} onClick={handleCollapse.bind(this)}><NavLink exact to="/portfolio" ><span><small>03</small>Portfolio</span></NavLink></li>
                                    <li className={`${isCurrentUrl('#/contact') ? 'active' : ''}`} onClick={handleCollapse.bind(this)}><NavLink exact to="/contact" ><span><small>04</small>Contact</span></NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;