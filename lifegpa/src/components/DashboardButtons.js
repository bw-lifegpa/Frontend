import React from 'react';

export default function DashboardButtons() {
    return (
        <div className="dashboard-nav-buttons">
            <div className="dashboard-button-container">
                <div className="dashboard-button track">
                </div>
                <h2>Track</h2>
            </div>
            <div className="dashboard-button-container">
                <div className="dashboard-button challenges">
                </div>
                <h2>Challenges</h2>
            </div>
            <div className="dashboard-button-container">
                <div className="dashboard-button advice">
                </div>
                <h2>Advice</h2>
            </div>
        </div>
    )
}