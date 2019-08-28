import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import Track from '../designfiles/track-button.png';
import Challenges from '../designfiles/challenges-button.png';
import Advice from '../designfiles/advice-button.png';

function DashboardButtons(props) {
    return (
        <div className="dashboard-nav-buttons">
            <NavLink to={`/track/${props.id}`}>
                <div className="dashboard-button-container">
                    <img className="dashboard-button" src={Track} />
                    <h2>Track</h2>
                </div>
            </NavLink>
            <NavLink to={`/challenges/${props.id}`}>
                <div className="dashboard-button-container">
                    <img className="dashboard-button" src={Challenges} />
                    <h2>Challenges</h2>
                </div>
            </NavLink>
            <NavLink to={`/advice/${props.id}`}>
                <div className="dashboard-button-container">
                    <img className="dashboard-button" src={Advice} />
                    <h2>Advice</h2>
                </div>
            </NavLink>
        </div>
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

export default connect(mapStateToProps, {})(DashboardButtons);