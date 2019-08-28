import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink, Route, Router } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import GoalCard from './GoalCard';

import './ViewGoals.css';

const ViewGoals = ({ goalList }) => {
    const [UserGoals, setUserGoals] = useState([])

    useEffect(() => {
        axios.get(`https://lifegpa-api.herokuapp.com/habits/`)
        .then( res => {
            console.log(res.data)
            const goalList = res.data;
            setUserGoals(goalList)
        })
        .catch(error => console.log(error.response.message))
    }, [])


return (
    <div>
        <Header />

        {UserGoals.map((goal, index) => {
            return (
                <div key={index} className='goal-list'>
                    <GoalCard goal={goal} id={goal.id} />
                </div>
            )
        })}

        <Footer />
    </div>
)

}

export default ViewGoals;