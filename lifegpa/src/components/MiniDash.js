import React from "react";
import { render } from "react-dom";
import { FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa';
import "../App.css";

// Import module and default styles
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const percentage = 66;

// Can use browser detection logic here to determine this instead
const needDominantBaselineFix = true;

const MiniDash = () => {

    return (
        <div className='component-container'>
            <div className='minidash-container'>
                <div className='title-container'>
                    <h1>Your LifeGPA</h1>
                    <h6>Last Update: August 10, 2019</h6>
                    <h6>Next Update: 10 days ago</h6>
                </div>
                <div className='progress-bar-container'>
                    <div style={{ width: "120px" }}>
                        <CircularProgressbar value={percentage}
                        text={<tspan dy={needDominantBaselineFix ? -15 : 0}>{percentage}%</tspan>}
                        />
                    </div>
                </div> 
                <div className='social-icon-container'>
                    <h5>Share your grade!</h5>
                    <div className='social-icons'>
                        <FaFacebookSquare/> 
                        <FaTwitterSquare />   
                    </div>      
                </div>         
            </div>
        </div>
    )
}

export default MiniDash;