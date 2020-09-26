import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import ParallaxScrolling from '../components/ParallaxScrolling';
import ProgressBar from "react-scroll-progress-bar";
import picTest from '../media/author-1.jpg'

const About = () => {
    return (
        <div className={`${window.pageYOffset}`}>
            <Navigation></Navigation>
            <ProgressBar height="6px" bgcolor="#2f89fc" duration="6" />
            
            <section className="ftco-section about-section">
                <div className="container">
                <div className="row d-flex">
                    <div className="col-md-4 author-img" style={{backgroundImage: `url(${picTest})`, transform: `translateY(${ParallaxScrolling() * -0.5}px)`}}></div>
                    <div className="col-md-2"></div>
                    <div className="col-md-6 wrap ftco-animate">
                    <div className="about-desc">
                        <h1 className="bold-text">About</h1>
                        <div className="p-5">
                        <h2 className="mb-5">Hi! I'm Beckham Muff</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in.</p>
                        <ul className="ftco-footer-social list-unstyled d-inline-flex p-2">
                            <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                            <li><a href="#"><i className="fab fa-github"></i></a></li>
                        </ul>
                        <h5>Contact me here!</h5>
                        <p>Email: <a href="mailto:mohamedlamine.oubaya@gmail.com">Mail</a></p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            <section className="education-section section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="heading">
                                <h3><b>FORMATIONS</b></h3>
                            </div>
                        </div>
                        <div className="col-sm-8">
                            <div className="education-wrapper">
                                <div className="education margin-b-50">
                                    <h4><b>PREMIÈRE ANNÉE DE CYCLE INGÉNIEUR</b></h4>
                                    <h5><b>CESI ÉCOLE D'INGÉNIEURS, REIMS</b></h5>
                                </div>
                                <div className="education margin-b-50">
                                    <h4><b>DEUXIÈME ANNÉE DE CYCLE PRÉPARATOIRE INTÉGRÉ</b></h4>
                                    <h5><b>CESI ÉCOLE D'INGÉNIEURS, REIMS</b></h5>
                                </div>
                                <div className="education margin-b-50">
                                    <h4><b>PREMIÈRE ANNÉE DE CYCLE PRÉPARATOIRE INTÉGRÉ</b></h4>
                                    <h5><b>CESI EXIA, REIMS</b></h5>
                                </div>
                                <div className="education margin-b-50">
                                    <h4><b>BACCALAURÉAT TECHNIQUE MATHÉMATIQUE</b></h4>
                                    <h5><b>LYCÉE PUBLIQUE, ALGÉRIE</b></h5>
                                    <h6 className="font-lite">DIPLÔMÉ EN AOÛT 2018</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;