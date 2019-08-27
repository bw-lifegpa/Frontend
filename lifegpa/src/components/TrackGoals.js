import React from 'react';
import { FaRegEye, FaPlusCircle, FaComments, FaArrowLeft  } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

import TrackDatePicker from './TrackDatePicker';
import MiniDash from './MiniDash';
import Header from './Header';
import Footer from './Footer';

import './TrackGoals.css'


const TrackGoals = () => {

    return (
        <>
        <Header />
        <div className='track-goals-container'>
            <div className='track-goals-header'>
                <h1>Let's manage the heck out of those goals!</h1>
                <h3>What would you like to do today?</h3>
                <div className='track-goals'>
                    <NavLink to='/viewgoals'><FaRegEye/> <h3>View Goals</h3></NavLink>
                    <NavLink to='/create-goal'><FaPlusCircle/><h3>Create New Goal</h3></NavLink>
                    <NavLink><FaComments/><h3>Grade Feedback</h3></NavLink>
                    <TrackDatePicker />
                </div>    
            </div>
            <div className='mini-dash-container'>
            <div className='back-to-dash'><FaArrowLeft/> Go back to dashboard</div>
                <MiniDash />
            </div>
        </div>
        <Footer />
        </>
    )
}

export default TrackGoals;