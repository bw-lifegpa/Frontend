import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

const GoalCard = (props) => {

    useEffect(() => {
        props.fetchUser(props.match.params.id);
    }, []);

    return (
        <div className='goal-card'>
            <h1>Goals</h1>
            <div className='goal-container'>
                <h1>{props.goal.name}</h1>
                <h3>{props.goal.description}</h3>
                <h4>Created by</h4>
                <h6>create at</h6>
                <div className='button-container'>
                    <Link to={`/edit/${props.id}/${props.goal.habit_id}`}>
                    <button className='edit'>Edit</button>
                    </Link>
                    <button className='delete'>Delete</button>
                </div>
            </div>
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

export default connect(mapStateToProps, { fetchUser })(GoalCard);