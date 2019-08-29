import React, { useEffect } from 'react';
import './Dashboard.css'

import Header from './Header';
import Nav from './Nav';
import DashboardButtons from './DashboardButtons';
import DashboardProfile from './DashboardProfile';
import MiniDash from './MiniDash';
import Footer from './Footer';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

const Dashboard = (props) => {

    useEffect(() => {
        props.fetchUser(props.match.params.id);
    }, []);
    console.log(props)
    
    return (
        <div className="dashboard-container">
            <Header />
            <Nav user_id={props.id}/>
            <div className="body">
                <DashboardProfile
                    first_name={props.first_name}
                    last_name={props.last_name}
                />
                <div className="dashboard-widgets">
                    <MiniDash />
                    <DashboardButtons />
                </div>
                <Footer />
            </div>
        </div>
    )
};

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

export default connect(mapStateToProps, { fetchUser })(Dashboard);
