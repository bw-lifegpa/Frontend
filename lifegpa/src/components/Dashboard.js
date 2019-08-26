import React from 'react';
import './Dashboard.css'

import Header from './Header';
import DashboardButtons from './DashboardButtons';
import DashboardProfile from './DashboardProfile';
import MiniDash from './MiniDash';
import Footer from './Footer';

export default function Dashboard() {
    return (
        <div className="dashboard-container">
            <Header />
            <div className="body">
                <DashboardProfile />
                <div className="dashboard-widgets">
                    <MiniDash />
                    <DashboardButtons />
                </div>
            </div>
            <Footer />
        </div>
    )
}
