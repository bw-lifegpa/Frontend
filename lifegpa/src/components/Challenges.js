import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Challenges.css'

import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import Eye from '../designfiles/eye-img.png';
import MagnifyingGlass from '../designfiles/magnifying-glass.png';

export default function Challenges() {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        axios
            .get('https://reqres.in/api/users/2')
            .then(response => {
                setUserData(response.data.data);
            })
            .catch(error => {
                console.error('Server Error', error);
            })
    }, []);

    console.log(userData);
    
    return (
        <div className="challenges-container">
            <Header />
            <div className="body">
                <div className="challenges active">
                    <div className="challenges-profile-mini">
                        <img className="challenges-profile-picture" src={userData.avatar} />
                        <div className="challenges-profile-info">
                            <h4>{`${userData.first_name} ${userData.last_name}`}</h4>
                            <h5>View Account</h5>
                        </div>
                    </div>
                    <h1>Active Challenges</h1>
                    <h2>You currently have no active challenges.</h2>
                </div>
                <div className="challenges search">
                    <NavLink to="/dashboard">
                        <h3>Back to Dashboard</h3>
                    </NavLink>
                    <h1>Search Challenges</h1>
                    <form>
                        <label>
                            <input
                                value="Search by name or category"
                            />
                        </label>
                        <img src={MagnifyingGlass} />
                    </form>
                    <div className="challenges-suggested">
                        <h2>Suggested for you</h2>
                        <p>As you add more goals, we will suggest challenges perfect for you!</p>
                    </div>
                    <div className="challenges-popular">
                        <h2>Popular Challenges</h2>
                        <div className="challenges-line">
                            <img className="eye-img" src={Eye} />
                            <p>A Mile a Day Keeps the Doctor Away Challenge</p>
                            <p className="challenges-join">JOIN</p>
                        </div>
                        <div className="challenges-line">
                            <img className="eye-img" src={Eye} />
                            <p>A Mile a Day Keeps the Doctor Away Challenge</p>
                            <p className="challenges-join">JOIN</p>
                        </div>
                    </div>
                    <div className="challenges-create">
                        <h2>Have a challenge you don't see listed?</h2>
                        <div className="challenge-create-button">
                            <h2>Create a Challenge</h2>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}