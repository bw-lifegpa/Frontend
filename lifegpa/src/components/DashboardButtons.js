import React from 'react';
import { NavLink } from 'react-router-dom';

import Track from '../designfiles/track-button.png';
import Challenges from '../designfiles/challenges-button.png';
import Advice from '../designfiles/advice-button.png';

export default function DashboardButtons() {
    return (
        <div className="dashboard-nav-buttons">
            <NavLink to="/track">
                <div className="dashboard-button-container">
                    <img className="dashboard-button track" src={Track} />
                    <h2>Track</h2>
                </div>
            </NavLink>
            <NavLink to="/challenges">
                <div className="dashboard-button-container">
                    <img className="dashboard-button challenges" src={Challenges} />
                    <h2>Challenges</h2>
                </div>
            </NavLink>
            <NavLink to="/advice">
                <div className="dashboard-button-container">
                    <img className="dashboard-button challenges" src={Advice} />
                    <h2>Advice</h2>
                </div>
            </NavLink>
        </div>
    )
}