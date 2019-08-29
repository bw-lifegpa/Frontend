import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser, updateHabitId } from '../actions';
import { axiosWithAuth } from '../utilities/axiosWithAuth';
import moment from 'moment';

const GoalCard = (props) => {

    useEffect(() => {
        props.fetchUser(props.match.params.id);
        props.updateHabitId(props.goal.habit_id)
    }, []);

    const deleteHandler = (e) => {
        e.preventDefault();
        axiosWithAuth()
        .delete(`https://lifegpa-api.herokuapp.com/habits/${props.goal.habit_id}`)
        .then(res=> {
            window.location.reload();
            console.log (res.data)})

        .catch(res => console.log (res.err))

    }
    return (
        <div className='goal-card'>
            
            <div className='goal-container'>
                <h1>{props.goal.name}</h1>
                <h3>{props.goal.description}</h3>
                
                <h6>Created At: {moment(props.goal.start_date).format("MMM Do YYYY")}</h6>

                <div className='button-container'>
                    <Link to={`/edit/${props.id}/${props.goal.habit_id}`}>
                    <button className='edit'>Edit</button>
                    </Link>
                    <button className='edit' onClick = {deleteHandler} >Delete</button>
                    <button className='edit' >Goal Completed</button>
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
        email: state.email,
        habit_id: state.habit_id,
        created_at:state.created_at
    }
}

export default connect(mapStateToProps, { fetchUser, updateHabitId })(GoalCard);