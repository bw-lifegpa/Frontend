import React, { useState, useEffect } from 'react';
import { FaRegEye, FaPlusCircle, FaComments, FaArrowLeft  } from 'react-icons/fa';
import { NavLink, Route } from 'react-router-dom';
import axios from 'axios';

import TrackDatePicker from './TrackDatePicker';
import MiniDash from './MiniDash';
import Header from './Header';
import Footer from './Footer';
import ViewGoals from './ViewGoals';
import GoalCard from './GoalCard';

import './TrackGoals.css'


const TrackGoals = () => {
    const [goals, setGoals] = useState([]) 

    return (
        <>
        <div>
            <Header />
        
            <div className='track-goals-container'>
            
                <div className='track-goals-header'>
                    <h1>Let's manage the heck out of those goals!</h1>
                    <h3>What would you like to do today?</h3>
                    
                    <div className='track-goals'>
                        
                        <NavLink to={`/viewgoals`}>
                            <FaRegEye/> <h3>View Goals</h3>
                        </NavLink>
                        
                        <NavLink to='/creategoal'>
                            <FaPlusCircle/><h3>Create New Goal</h3>
                        </NavLink>
                        
                        <NavLink  to='/gradefeeback'>
                            <FaComments/><h3>Grade Feedback</h3>
                        </NavLink>
                        
                        <TrackDatePicker />
                    </div>   
                </div>
                
                <div className='mini-dash-container'>
                
                    <div className='back-to-dash'>
                        <NavLink to='/dashboard'>
                            <FaArrowLeft/> Go back to dashboard
                        </NavLink>
                    </div>
                    
                    <MiniDash />
                </div>
                
            </div>
        </div>

        <Footer />

        <Route
            exact 
            path='/users/:id/viewgoals/'
            render={props => <GoalCard {...props} goals={goals} />} 
        />    
         
         {/* <Route exact path='/viewgoals/:id' goals={goals} component={ViewGoals} /> */}
        </>
    )
}


export default TrackGoals;