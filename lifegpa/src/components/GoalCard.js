import React from 'react';

const GoalCard = ({ goal }) => {

    return (
        <div className='goal-card'>
            <h1>Goals</h1>
            <div className='goal-container'>
                <h1>{goal.name}</h1>
                <h3>{goal.description}</h3>
                <h4>Created by</h4>
                <h6>create at</h6>
                <div className='button-container'>
                    <button className='edit'>Edit</button>
                    <button className='delete'>Delete</button>
                </div>
            </div>
        </div>
    )

}

export default GoalCard;