import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import ProgressBar from "react-scroll-progress-bar";

const About = () => {
    return (
        <div>
            <Navigation></Navigation>
            <ProgressBar height="6px" bgcolor="#2f89fc" duration="6" />
            <section className="education-section section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="heading">
                                <h3><b>FORMATION</b></h3>
                            </div>
                        </div>
                        <div className="col-sm-8">
                            <div className="education-wrapper">
                                <div className="education margin-b-50">
                                    <h4><b>PREMIÈRE ANNÉE DE CYCLE INGÉNIEUR</b></h4>
                                    <h5 className="font-yellow"><b>CESI ÉCOLE D'INGÉNIEURS</b></h5>
                                </div>
                                <div className="education margin-b-50">
                                    <h4><b>DEUXIÈME ANNÉE DE CYCLE PRÉPARATOIRE INTÉGRÉ</b></h4>
                                    <h5 className="font-yellow"><b>CESI ÉCOLE D'INGÉNIEURS</b></h5>
                                </div>
                                <div className="education margin-b-50">
                                    <h4><b>PREMIÈRE ANNÉE DE CYCLE PRÉPARATOIRE INTÉGRÉ</b></h4>
                                    <h5 className="font-yellow"><b>CESI EXIA REIMS</b></h5>
                                </div>
                                <div className="education margin-b-50">
                                    <h4><b>BACCALAURÉAT TECHNIQUE MATHÉMATIQUE</b></h4>
                                    <h5 className="font-yellow"><b>LYCÉE PUBLIQUE - ALGÉRIE</b></h5>
                                    <h6 className="font-lite-black margin-t-10">DIPLÔMÉ EN AOÛT 2018</h6>
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