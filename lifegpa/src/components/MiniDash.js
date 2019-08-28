import React from "react";
import { FaFacebookSquare, FaTwitterSquare, FaEnvelopeSquare } from 'react-icons/fa';
import "../App.css";

// Import module and default styles
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const percentage = 75;
const gpa = "3.0";

// Can use browser detection logic here to determine this instead
const needDominantBaselineFix = true;

const MiniDash = () => {

    return (
        <div className='minidash-container'>
            <div className='title-container'>
                <h1>Your LifeGPA</h1>
                <h5>Last Update: August 10, 2019</h5>
                <h5>Next Update: 10 days ago</h5>
            </div>
            <div className='progress-bar-container'>
                <div style={{ width: "120px" }}>
                    <CircularProgressbar value={percentage}
                    text={<tspan dy={needDominantBaselineFix ? -15 : 0}>{gpa}</tspan>}
                    />
                </div>
            </div> 
            <div className='social-icon-container'>
                <h5>Share your grade!</h5>
                <div className='social-icons'>
                    <FaFacebookSquare/> 
                    <FaTwitterSquare />
                    <FaEnvelopeSquare />
                </div>      
            </div>         
        </div>
    )
}

export default MiniDash;