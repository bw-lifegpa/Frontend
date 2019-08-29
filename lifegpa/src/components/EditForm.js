    
import React, { useState } from "react";
import { connect } from 'react-redux'
import { editGoal, fetchGoal } from '../actions/index'
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';


function EditForm (props) {
 const [goalState, setGoalState] = useState({
    name: "",
    description: "",
  });

  const habit_id = parseInt(props.match.params.goal_id)

  const changeHandler = e => {
    e.preventDefault();
    setGoalState({
      ...goalState,
      [e.target.name]: e.target.value
    });
  };

  const editGoal = e => {
    e.preventDefault();
    props.editGoal(habit_id, goalState)
    setGoalState({
      name: '',
      description: ''
    })
    props.history.push(`/goals/${props.match.params.id}`)
  }

  if (goalState){
  return (
        <div>
            <Header/>
            <Nav user_id={props.match.params.id}/>
            <h1>Edit:</h1>
              <form onSubmit={editGoal}>
                <input 
                      type="text"
                      placeholder="goal name"
                      name="name"
                      value={goalState.name}
                      onChange={changeHandler}
                      />
                  <input  
                      type="text"
                      placeholder="enter description"
                      name="description"
                      value={goalState.description}
                      onChange={changeHandler}
                      />   
                    <button type="submit">
                      Update Goal
                    </button>
                </form>
            <Footer/>
        </div>
    )
  }
  return (
      <div />
  )
}

const mapStateToProps = state => {
  console.log(state)
  return {
    error: state.error,
    isFetching: state.isFetching,
    goal_name: state.goal_name,
    description: state.description,
    habit_id: state.habit_id
  }
}

export default connect(
    mapStateToProps,
    { fetchGoal, editGoal }
)(EditForm)