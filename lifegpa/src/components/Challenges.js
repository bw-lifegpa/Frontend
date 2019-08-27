import React, { useState, useEffect } from 'react';
import './Challenges.css'

import Header from './Header';
import Footer from './Footer';
import axios from 'axios';

export default function Challenges() {
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
        <div className="challenges-container">
            <Header />
            <div className="body">
                
            </div>
            <Footer />
        </div>
    )
}