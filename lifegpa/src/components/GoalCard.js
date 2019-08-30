import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser, updateHabitId, fetchUserCompletedHabits } from '../actions';
import { axiosWithAuth } from '../utilities/axiosWithAuth';
import moment from 'moment';

const GoalCard = props => {
  const [completedGoals, setCompletedGoals] = useState([]);

  useEffect(() => {
    props.fetchUser(props.match.params.id);
    props.updateHabitId(props.goal.habit_id);
    props.fetchUserCompletedHabits(props.match.params.id);
  }, []);

  useEffect(
    () =>
      setCompletedGoals(
        props.completed.filter(habit => habit.habit_id === props.goal.habit_id)
      ),
    [props.completed]
  );

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

      <div className='goal-info'>
        <h4>Goal completed {completedGoals.length} times</h4>
        <div className='goal-details'>
          <div className='last-completed'>
            <div>Last completed</div>
            <h5>
              {completedGoals.length
                ? moment(
                    completedGoals.reduce((a, habit) =>
                      a.id > habit.id ? a : habit
                    ).completed_at
                  ).format('MMMM Do, [at] LT')
                : 'fetching...'}
            </h5>
          </div>
          <div className='start-end'>
            <div>started</div>
            <h5>{moment(props.goal.start_date).format('MMMM Do, YYYY')}</h5>
            {props.goal.end_date
              ? `
            ends
            <h5>${moment(props.goal.end_date).format('MMMM Do, YYYY')}</h5>`
              : ''}
          </div>
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
