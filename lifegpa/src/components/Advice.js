import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Advice.css';

import Header from './Header';
import Footer from './Footer';
import axios from 'axios';

export default function Advice() {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        axios
            .get('https://reqres.in/api/users/2')
            .then(response => {
                setUserData(response.data.data);
            })
            .catch(error => {
                console.error('Server Error', error);
            })
    }, []);

    console.log(userData);
    
    return (
        <div className="advice-container">
            <Header />
            <div className="body">
                Advice
            </div>
            <Footer />
        </div>
    )
}