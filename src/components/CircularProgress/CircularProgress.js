import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ProgressProvider from './ProgressProvider';

const CircularProgress = (props) => {
  return(
    <ProgressProvider valueStart={0} valueEnd={props.value}>
        {value => 
        <CircularProgressbar 
            value={value} 
            text={`${props.text}`}
            styles={buildStyles({
                textSize: '0.8em',
                textColor: "#fff",
                pathColor: "#2f89fc",
                trailColor: "transparent"
            })}
        />}
    </ProgressProvider>
  );
};
export default CircularProgress;
