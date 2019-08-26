import React from 'react';
import './Dashboard.css'

import Header from './Header';
import Footer from './Footer';

export default function Dashboard() {
    return (
        <div className="dashboard-container">
            <Header />
            <div className="body">
                <div className="dashboard-overview">
                    <div className="dashboard-profile-view">
                        <div className="profile-picture">
                        </div>
                        <h1>Your Name</h1>
                        <h3>View Account</h3>
                    </div>
                </div>
                <div className="dashboard-widgets">
                    <div className="dashboard-tracker-placeholder" />
                    <div className="dashboard-nav-buttons">
                        <div className="dashboard-button track">
                            Track
                        </div>
                        <div className="dashboard-button challenges">
                            Challenges
                        </div>
                        <div className="dashboard-button advice">
                            Advice
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}