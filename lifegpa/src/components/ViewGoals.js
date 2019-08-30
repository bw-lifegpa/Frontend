import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utilities/axiosWithAuth';
import { Link } from 'react-router-dom';

import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import GoalCard from './GoalCard';

import './ViewGoals.css';
import { FaPlusCircle } from 'react-icons/fa';

const ViewGoals = props => {
  const [UserGoals, setUserGoals] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get(
        `https://lifegpa-api.herokuapp.com/users/${props.match.params.id}/habits`
      )
      .then(res => {
        console.log(res.data);
        setUserGoals(res.data);
      })
      .catch(error => console.log(error));
  }, []);

  console.log(UserGoals.length);

  if (UserGoals.length === 0) {
    return (
      <div>
        <Header />
        <Nav user_id={props.match.params.id} />
        <div>
          <h1>Please Create Goals to Begin Tracking</h1>
          <Link to={`/create/${props.match.params.id}`}>
            <FaPlusCircle />
            <h3>Create New Goal</h3>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <Nav user_id={props.match.params.id} />
      <h1 className='viewgoals-title'>Goals</h1>
      <div className='viewgoals-body'>
        {UserGoals.length >= 1
          ? UserGoals.map((goal, index) => {
              return (
                <GoalCard {...props} goal={goal} id={goal.id} key={index} />
              );
            })
          : () => {
              return <div></div>;
            }}
      </div>

      <Link className='create-new-goal' to={`/create/${props.match.params.id}`}>
        <FaPlusCircle />
        <h3>Create New Goal</h3>
      </Link>
      <Footer />
    </div>
  );
};

export default ViewGoals;
