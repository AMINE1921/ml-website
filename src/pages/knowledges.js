import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import ProgressBar from "react-scroll-progress-bar";
import CircularProgress from '../components/CircularProgress/CircularProgress';

const Knowledges = () => {
    return (
        <div>
            <Navigation></Navigation>
            <ProgressBar height="6px" bgcolor="#2f89fc" duration="6" />
            
            <div className="container">
                <div className="row">
                    <div className="col">
                        <CircularProgress value={60} text={"HTML"}></CircularProgress>
                        <CircularProgress value={60} text={"CSS"}></CircularProgress>
                        <CircularProgress value={60} text={"JS"}></CircularProgress>
                        <CircularProgress value={60} text={"HTML"}></CircularProgress>
                        <CircularProgress value={60} text={"CSS"}></CircularProgress>
                        <CircularProgress value={60} text={"JS"}></CircularProgress>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Knowledges;