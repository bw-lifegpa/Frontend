import React from 'react';
import { FaRegEye, FaPlusCircle, FaComments, FaArrowLeft  } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import TrackDatePicker from './TrackDatePicker';
import MiniDash from './MiniDash';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';

import './TrackGoals.css'


export default function TrackGoals (props) {

    return (
        <>
        <div className='track-goals-container'>
            <Header />
            <Nav user_id={props.id}/>
        
            <div className='track-goals-body'>
            
            <div className='track-goals-header'>
                <h1>Let's manage the heck out of those goals!</h1>
                <h3>What would you like to do?</h3>
                
                <div className='track-goals'>
                    
                    <Link to={`/goals/${props.match.params.id}`}>
                        <FaRegEye/> <h3>View Goals</h3>
                    </Link>
                    
                    <Link to={`/create/${props.match.params.id}`}>
                        <FaPlusCircle/><h3>Create New Goal</h3>
                    </Link>
                    
                    <Link  to='/gradefeeback'>
                        <FaComments/><h3>Grade Feedback</h3>
                    </Link>
                    
                    {/* <TrackDatePicker /> */}
                </div>   
            </div>
            
            <MiniDash />
            </div>
            <Footer />
        </div>
        </>
    )
};