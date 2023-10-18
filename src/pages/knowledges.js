import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import ProgressBar from "react-scroll-progress-bar";
import CircularProgress from '../components/CircularProgress/CircularProgress';
import ScrollDown from '../components/ScrollDown';
import { useTranslation } from "react-i18next";

const Knowledges = () => {
    const { t } = useTranslation();
    const scrollDown = ScrollDown();
    return (
        <div>
            <Navigation></Navigation>
            <ProgressBar height="6px" bgcolor="#2f89fc" duration="6" />
            <div className="container">
                <div className="row d-flex">
                    <div className="col-md-4 title" ><h3>{t("dev")}</h3></div>
                    <div className="col-md-8 wrap circKnow">
                        <div className="col">
                            <CircularProgress value={90} text={"HTML5"}></CircularProgress>
                            <CircularProgress value={90} text={"CSS3"}></CircularProgress>
                            <CircularProgress value={90} text={"Sass"}></CircularProgress>
                            <CircularProgress value={90} text={"JS"}></CircularProgress>
                            <CircularProgress value={60} text={"jQuery"}></CircularProgress>
                            <CircularProgress value={80} text={"NodeJS"}></CircularProgress>
                            <CircularProgress value={30} text={"PHP"}></CircularProgress>
                            <CircularProgress value={50} text={"SQL"}></CircularProgress>
                            <CircularProgress value={20} text={"NoSQL"}></CircularProgress>
                            <CircularProgress value={50} text={"Python"}></CircularProgress>
                            <CircularProgress value={20} text={"JAVA"}></CircularProgress>
                            <CircularProgress value={45} text={"C#"}></CircularProgress>
                            <CircularProgress value={20} text={"C"}></CircularProgress>
                            <CircularProgress value={90} text={"ReactJS"}></CircularProgress>
                            <CircularProgress value={80} text={"Express.js"}></CircularProgress>
                            <CircularProgress value={40} text={"Symfony"}></CircularProgress>
                        </div>
                    </div>
                    {scrollDown.scrollDown}
                    <div ref={scrollDown.ref} className="col-md-4 title" ><h3>{t("network")}</h3></div>
                    <div className="col-md-8 wrap circKnow">
                        <div className="col">
                            <CircularProgress value={75} text={"CCNA 1"}></CircularProgress>
                            <CircularProgress value={80} text={"CCNA 2"}></CircularProgress>
                        </div>
                    </div>

                    <div className="col-md-4 title" ><h3>{t("adobe")}</h3></div>
                    <div className="col-md-8 wrap circKnow">
                        <div className="col">
                            <CircularProgress value={80} text={"Photoshop"}></CircularProgress>
                            <CircularProgress value={70} text={"Premiere"}></CircularProgress>
                            <CircularProgress value={50} text={"Lightroom"}></CircularProgress>
                            <CircularProgress value={60} text={"XD"}></CircularProgress>
                        </div>
                    </div>

                    <div className="col-md-4 title" ><h3>{t("other")}</h3></div>
                    <div className="col-md-8 wrap circKnow">
                        <div className="col">
                            <CircularProgress value={90} text={"Git"}></CircularProgress>
                            <CircularProgress value={60} text={"Script bash"}></CircularProgress>
                            <CircularProgress value={60} text={"Linux"}></CircularProgress>
                            <CircularProgress value={40} text={"Arduino"}></CircularProgress>
                            <CircularProgress value={70} text={"Pack Office"}></CircularProgress>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Knowledges;