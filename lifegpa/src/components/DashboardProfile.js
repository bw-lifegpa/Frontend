import React from 'react';

export default function DashboardProfile(props) {
    return (
        <div className="dashboard-profile-container">
            <div className="dashboard-profile">
                <div className="profile-picture" />
                <h1>{`${props.first_name} ${props.last_name}`}</h1>
                <h3>View Account</h3>
            </div>
        </div>
    )
}