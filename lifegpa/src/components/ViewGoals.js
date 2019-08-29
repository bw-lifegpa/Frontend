import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utilities/axiosWithAuth';

import Header from './Header';
import Footer from './Footer';
import GoalCard from './GoalCard';

import './ViewGoals.css';

const ViewGoals = (props) => {
    const [UserGoals, setUserGoals] = useState([])

    useEffect(() => {
<<<<<<< HEAD
        axiosWithAuth
            .get(`https://lifegpa-api.herokuapp.com/users/${props.match.params.id}/habits`)
            .then( res => {
                console.log(res.data)
                setUserGoals(res.data)
=======
        axiosWithAuth()
        .get(`https://lifegpa-api.herokuapp.com/users/${props.match.params.id}/habits`)
        .then( res => {
            console.log(res.data)
            setUserGoals(res.data)
>>>>>>> 2e5525f2b3c8ab0effd123e3373f6281bb6efa0c
        })
        .catch(error => console.log(error.response.message))
    }, [])


return (
    <div>
        <Header />
<<<<<<< HEAD
        {UserGoals.map((goal, index) => {
            return (
                <div key={index} className='goal-list'>
                    <GoalCard {...props} id={goal.id} />
=======

        {UserGoals ? UserGoals.map((goal, index) => {
            return (
                <div key={index} className='goal-list'>
                    <GoalCard {...props} goal={goal} id={goal.id} />
>>>>>>> 2e5525f2b3c8ab0effd123e3373f6281bb6efa0c
                </div>
            )
        }) : () => {return <div/>}}

        <Footer />
    </div>
)

}

export default ViewGoals;