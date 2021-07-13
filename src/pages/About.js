import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import ScrollDown from '../components/ScrollDown';
import ParallaxScrolling from '../components/ParallaxScrolling';
import ProgressBar from "react-scroll-progress-bar";
import { useTranslation } from "react-i18next";
// import picProfil from '../media/pdp.png'


const About = () => {
    const { t } = useTranslation();
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
                            <h1 className="bold-text" style={{transform: `translateY(${ParallaxScrolling() * -0.2}px)`}}>{t("about_me")}</h1>
                            <div className="p-5">
                            <h2 className="mb-5">{t("hello_name")}</h2>
                            <p>{t("desc")}</p>
                            <ul className="ftco-footer-social list-unstyled mt-4">
                                <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mohamed-lamine-oubaya-124326194"><i className="fab fa-linkedin-in fa-lg"></i></a></li>
                                <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/AMINE1921"><i className="fab fa-github fa-lg"></i></a></li>
                                <li><a target="_blank" rel="noopener noreferrer" href="http://discordapp.com/channels/@AMINE#5328"><i className="fab fa-discord fa-lg"></i></a></li>
                            </ul>
                            <h5>{t("contact_me")}</h5>
                            <p>{t("email")} : <a href="mailto:mohamedlamine.oubaya@gmail.com">mohamedlamine.oubaya@gmail.com</a></p>
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
                                <h3><b>{t("experience")}</b></h3>
                            </div>
                        </div>
                        <div className="col-sm-8">
                            <div className="education-wrapper">
                                <div className="education margin-b-50">
                                    <h4><b>{t("internship2")}</b></h4>
                                    <h7><b>{t("react&express")}</b></h7>
                                    <h5><b>{t("internship2_local")}</b></h5>
                                    <h6 className="font-lite">{t("internship2_length")}</h6>
                                </div>
                                <div className="education margin-b-50">
                                    <h4><b>{t("internship1")}</b></h4>
                                    <h7><b>{t("react")}</b></h7>
                                    <h5><b>{t("internship1_local")}</b></h5>
                                    <h6 className="font-lite">{t("internship1_length")}</h6>
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
                                <h3><b>{t("education")}</b></h3>
                            </div>
                        </div>
                        <div className="col-sm-8">
                            <div className="education-wrapper">
                                <div className="education margin-b-50">
                                    <h4><b>{t("education3")}</b></h4>
                                    <h5><b>{t("education3_local")}</b></h5>
                                    <h6 className="font-lite">{t("education3_length")}</h6>
                                </div>
                                <div className="education margin-b-50">
                                    <h4><b>{t("education2")}</b></h4>
                                    <h5><b>{t("education2_local")}</b></h5>
                                    <h6 className="font-lite">{t("education2_length")}</h6>
                                </div>
                                <div className="education margin-b-50">
                                    <h4><b>{t("education1")}</b></h4>
                                    <h5><b>{t("education1_local")}</b></h5>
                                    <h6 className="font-lite">{t("education1_length")}</h6>
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