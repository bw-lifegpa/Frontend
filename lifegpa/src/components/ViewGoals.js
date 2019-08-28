import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink, Route, Router } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

import './ViewGoals.css';

const ViewGoals = (props) => {
const [userGoals, setUserGoals] = useState([{}])

const id = props.match.params.id;

useEffect(() => {
    axios.get(`https://lifegpa-api.herokuapp.com/users/${id}/habits/`)
    .then( res => {
        console.log(res.data)
        const goal = res.data;
        setUserGoals(goal)
    })
    .catch(error => console.log(error.response.message))
}, [])

return (
    <div>
        <Header />

        {userGoals.map((user, index) => {
            return (
                <>
                <div key={index} className="goal-container">
                    <div className='goal'>
                        <h1 className="goal-name">{user.name}</h1>
                        <h3 className="goal-description">{user.description}</h3>
                        <div className='button-container'>
                            <Link to='/edit-goal'>
                                <NavLink className='edit-goal'>Edit</NavLink>
                            </Link>
                            <NavLink className='delete-goal'>Delete</NavLink>
                        </div>
                    </div>
                </div>
                </>
              );
        })}

        <Footer />
    </div>
)

}

export default ViewGoals;