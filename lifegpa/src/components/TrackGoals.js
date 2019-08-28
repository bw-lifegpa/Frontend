import React, { useEffect } from 'react';
import { FaRegEye, FaPlusCircle, FaComments, FaArrowLeft  } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

import TrackDatePicker from './TrackDatePicker';
import MiniDash from './MiniDash';
import Header from './Header';
import Footer from './Footer';

import './TrackGoals.css'


const TrackGoals = (props) => {

    useEffect(() => {
        props.fetchUser(props.match.params.id);
    }, []);

    return (
        <>
        <div>
            <Header />
        
            <div className='track-goals-container'>
            
            <div className='track-goals-header'>
                <h1>Let's manage the heck out of those goals!</h1>
                <h3>What would you like to do today?</h3>
                
                <div className='track-goals'>
                    
                    <Link to={`/goals/${props.id}`}>
                        <FaRegEye/> <h3>View Goals</h3>
                    </Link>
                    
                    <Link to={`/create/${props.id}`}>
                        <FaPlusCircle/><h3>Create New Goal</h3>
                    </Link>
                    
                    <Link  to='/gradefeeback'>
                        <FaComments/><h3>Grade Feedback</h3>
                    </Link>
                    
                    {/* <TrackDatePicker /> */}
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
        </>
    )
}
const mapStateToProps = state => {
    return {
        error: state.error,
        isFetching: state.isFetching,
        id: state.id,
        username: state.username,
        first_name: state.first_name,
        last_name: state.last_name,
        email: state.email
    }
}

export default connect(mapStateToProps, { fetchUser })(TrackGoals);