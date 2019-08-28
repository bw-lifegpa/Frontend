import React, { useState, useEffect } from 'react';
import './Dashboard.css'

import Header from './Header';
import DashboardButtons from './DashboardButtons';
import DashboardProfile from './DashboardProfile';
import MiniDash from './MiniDash';
import Footer from './Footer';
import axios from 'axios';

export default function Dashboard() {
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
        <div className="dashboard-container">
            <Header />
            <div className="body">
                <DashboardProfile
                    avatar={userData.avatar}
                    first_name={userData.first_name}
                    last_name={userData.last_name}
                />
                <div className="dashboard-widgets">
                    <MiniDash />
                    <DashboardButtons />
                </div>
            </div>
            <Footer />
        </div>
    )
}
