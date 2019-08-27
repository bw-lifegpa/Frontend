import React from 'react';
import { NavLink } from 'react-router-dom';

export default function DashboardButtons() {
    return (
        <div className="dashboard-nav-buttons">
            <NavLink to="/track">
                <div className="dashboard-button-container">
                    <div className="dashboard-button track">
                    </div>
                    <h2>Track</h2>
                </div>
            </NavLink>
            <NavLink to="/challenges">
                <div className="dashboard-button-container">
                    <div className="dashboard-button challenges">
                    </div>
                    <h2>Challenges</h2>
                </div>
            </NavLink>
            <NavLink to="/advice">
                <div className="dashboard-button-container">
                    <div className="dashboard-button advice">
                    </div>
                    <h2>Advice</h2>
                </div>
            </NavLink>
        </div>
    )
}