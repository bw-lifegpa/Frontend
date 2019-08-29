import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utilities/axiosWithAuth';

import Header from './Header';
import Footer from './Footer';
import GoalCard from './GoalCard';

import './ViewGoals.css';

const ViewGoals = (props) => {
    const [UserGoals, setUserGoals] = useState([])

    useEffect(() => {
        axiosWithAuth
            .get(`https://lifegpa-api.herokuapp.com/users/${props.match.params.id}/habits`)
            .then( res => {
                console.log(res.data)
                setUserGoals(res.data)
        })
        .catch(error => console.log(error.response.message))
    }, [])


return (
    <div>
        <Header />
        {UserGoals.map((goal, index) => {
            return (
                <div key={index} className='goal-list'>
                    <GoalCard {...props} id={goal.id} />
                </div>
            )
        })}

        <Footer />
    </div>
)

}

export default ViewGoals;