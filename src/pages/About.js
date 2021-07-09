import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import ScrollDown from '../components/ScrollDown';
import ParallaxScrolling from '../components/ParallaxScrolling';
import ProgressBar from "react-scroll-progress-bar";
// import picProfil from '../media/pdp.png'


const About = () => {
    const scrollDown = ScrollDown();
    return (
        <div>
            <Navigation></Navigation>
            <ProgressBar height="6px" bgcolor="#2f89fc" duration="6" />
            
            <section className="ftco-section about-section">
                <div className="container">
                <div className="row d-flex">
                    {/* <div className="col-md-4 author-img" style={{backgroundImage: `url(${picProfil})`, transform: `translateY(${ParallaxScrolling() * -0.5}px)`}}></div> */}
                    <div className="col-md-2"></div>
                    <div className="col-md-6 wrap ftco-animate">
                        <div className="about-desc">
                            <h1 className="bold-text" style={{transform: `translateY(${ParallaxScrolling() * -0.2}px)`}}>À propos</h1>
                            <div className="p-5">
                            <h2 className="mb-5">Salut ! Je suis Mohamed Lamine OUBAYA</h2>
                            <p>Actuellement étudiant en quatrième année au CESI École d'ingénieurs à Reims, à la recherche d'un stage en développement web à l'étranger.</p>
                            <ul className="ftco-footer-social list-unstyled mt-4">
                                <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mohamed-lamine-oubaya-124326194"><i className="fab fa-linkedin-in fa-lg"></i></a></li>
                                <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/AMINE1921"><i className="fab fa-github fa-lg"></i></a></li>
                                <li><a target="_blank" rel="noopener noreferrer" href="http://discordapp.com/channels/@AMINE#5328"><i className="fab fa-discord fa-lg"></i></a></li>
                            </ul>
                            <h5>Contactez-moi !</h5>
                            <p>Email : <a href="mailto:mohamedlamine.oubaya@gmail.com">mohamedlamine.oubaya@gmail.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>
            {scrollDown.scrollDown}

            <section ref={scrollDown.ref} className="experiences-section section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="heading">
                                <h3><b>EXPÉRIENCES</b></h3>
                            </div>
                        </div>
                        <div className="col-sm-8">
                            <div className="education-wrapper">
                                <div className="education margin-b-50">
                                    <h4><b>STAGE - DÉVELOPPEUR WEB FULL STACK</b></h4>
                                    <h7><b>ReactJS et Express.js</b></h7>
                                    <h5><b>Repar Compteur, REIMS</b></h5>
                                    <h6 className="font-lite">JANVIER - AVRIL 2021</h6>
                                </div>
                                <div className="education margin-b-50">
                                    <h4><b>STAGE - DÉVELOPPEUR WEB FRONT-END</b></h4>
                                    <h7><b>ReactJS</b></h7>
                                    <h5><b>MONSTOCK, REIMS</b></h5>
                                    <h6 className="font-lite">MARS - JUILLET 2020</h6>
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
                                    <h6 className="font-lite">2020-2021</h6>
                                </div>
                                <div className="education margin-b-50">
                                    <h4><b>DEUXIÈME ANNÉE DE CYCLE PRÉPARATOIRE INTÉGRÉ</b></h4>
                                    <h5><b>CESI ÉCOLE D'INGÉNIEURS, REIMS</b></h5>
                                    <h6 className="font-lite">2019-2020</h6>
                                </div>
                                <div className="education margin-b-50">
                                    <h4><b>PREMIÈRE ANNÉE DE CYCLE PRÉPARATOIRE INTÉGRÉ</b></h4>
                                    <h5><b>CESI EXIA, REIMS</b></h5>
                                    <h6 className="font-lite">2018-2019</h6>
                                </div>
                                <div className="education margin-b-50">
                                    <h4><b>BACCALAURÉAT TECHNIQUE MATHÉMATIQUE</b></h4>
                                    <h5><b>LYCÉE PUBLIC, ALGER</b></h5>
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