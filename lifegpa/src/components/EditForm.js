import React, { useState } from "react";
import { connect } from 'react-redux'
import { editGoal, fetchGoal } from '../store/actions'


function EditForm (props) {
 const [goalState, setGoalState] = useState({
    name: "",
    description: "",
  });

  const changeHandler = event => {
    setGoalState({
      ...goalState,
      [event.target.name]: event.target.value
    });
  };

  const editGoal = e => {
    e.preventDefault()
    props.editData(props.goal.id, goalState)
    setGoalState({
      name: '',
      description: ''
    })
  }

  console.log(props.goal.id)

  return (
      <>
          <div >{props.goal.title}</div>
          <div>{props.goal.goal}</div>
          <div>
              <input 
              type="text" 
              placeholder="public or private" 
              name="status" value={goalState.status}
              onChange={changeHandler}/>
          </div>
          <div>
            <button>Edit</button>
              <Form>
                <input 
                      type="text"
                      placeholder="goal name"
                      name="goal"
                      value={goalState.name}
                      onChange={changeHandler}
                      />
                  <input  
                      type="text"
                      placeholder="enter new goal here"
                      name="edit_description"
                      value={goalState.description}
                      onChange={changeHandler}
                      />   
                    <button onClick={editGoal}>
                      Update Goal
                    </button>
                </Form>
        </div>
        </>
    )
}

const mapStateToProps = state => {
  console.log(state)
  return {
    error: state.error,
    isFetching: state.isFetching,
    // goal: state.goal,
    // user: state.user
  }
}

export default connect(
    mapStateToProps,
    { fetchGoal, editGoal }
)(EditForm)