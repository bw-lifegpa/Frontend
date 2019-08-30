import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser, updateHabitId, fetchUserCompletedHabits } from '../actions';
import { axiosWithAuth } from '../utilities/axiosWithAuth';
import moment from 'moment';

const GoalCard = props => {
  useEffect(() => {
    props.fetchUser(props.match.params.id);
    props.updateHabitId(props.goal.habit_id);
    props.fetchUserCompletedHabits(props.match.params.id);
  }, []);

  const deleteHandler = e => {
    e.preventDefault();
    axiosWithAuth()
      .delete(`https://lifegpa-api.herokuapp.com/habits/${props.goal.habit_id}`)
      .then(res => {
        window.location.reload();
        console.log(res.data);
      })

      .catch(res => console.log(res.err));
  };

  const completeHandler = e => {
    const { id } = props.match.params;
    const { habit_id } = props.goal;
    e.preventDefault();
    axiosWithAuth()
      .post(`https://lifegpa-api.herokuapp.com/users/${id}/habits/completed`, {
        habit_id: habit_id
      })
      .then(res => {
        console.log(res.data);
        props.fetchUserCompletedHabits(props.match.params.id);
      });
  };

  return (
    <div className='goal-container'>
      <div>
        <h1>{props.goal.name}</h1>
        <h3>{props.goal.description}</h3>
      </div>

      <div>
        <div className='goal-details'>
          <h4>
            Goal completed{' '}
            {props.completed.length
              ? props.completed.filter(
                  habit => habit.habit_id === props.goal.habit_id
                ).length
              : '0'}{' '}
            times
          </h4>
          <h5>
            started on {moment(props.goal.start_date).format('MMMM Do, YYYY')}
          </h5>
        </div>

        <div className='button-container'>
          <button className='mark-complete' onClick={completeHandler}>
            Mark Completed
          </button>
          <div className='edit-buttons'>
            <Link to={`/edit/${props.id}/${props.goal.habit_id}`}>
              <button>Edit</button>
            </Link>
            <button onClick={deleteHandler}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};
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
    created_at: state.created_at,
    completed: state.completed
  };
};

export default connect(
  mapStateToProps,
  { fetchUser, updateHabitId, fetchUserCompletedHabits }
)(GoalCard);
