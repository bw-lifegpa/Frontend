import React, { useState } from 'react';
import { FaRegEye, FaPlusCircle, FaComments, FaArrowLeft  } from 'react-icons/fa';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import TrackDatePicker from './TrackDatePicker';
import MiniDash from './MiniDash';
import Header from './Header';
import Footer from './Footer';
import ViewGoals from './ViewGoals';

import './TrackGoals.css'


const TrackGoals = () => {
    const [goals, setgoals] = useState([])

    return (
        <>
        <div>
            <Header />
        
            <div className='track-goals-container'>
            
            <div className='track-goals-header'>
                <h1>Let's manage the heck out of those goals!</h1>
                <h3>What would you like to do today?</h3>
                
                <div className='track-goals'>
                    
                    <Link to='/viewgoals'>
                        <FaRegEye/> <h3>View Goals</h3>
                    </Link>
                    
                    <Link to='/creategoal'>
                        <FaPlusCircle/><h3>Create New Goal</h3>
                    </Link>
                    
                    <Link  to='/gradefeeback'>
                        <FaComments/><h3>Grade Feedback</h3>
                    </Link>
                    
                    <TrackDatePicker />
                </div>   
            </div>
            
            <div className='mini-dash-container'>
            
                <div className='back-to-dash'>
                    <FaArrowLeft/> Go back to dashboard
                </div>
                
                <MiniDash />
            </div>
            </div>
            <Footer />
        </div>
        <Route
         path='/viewgoals/:id'
         render={props => <ViewGoals {...props} goals={goals} />} />
         
         <Route exact path='/viewgoals/:id' component={ViewGoals} />
        </>
    )
}


export default TrackGoals;