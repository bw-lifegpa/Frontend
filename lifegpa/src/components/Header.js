import React from 'react';
import './Header.css'

import Logo from '../designfiles/lifegpa-logo.png';
import SignOut from '../designfiles/sign-out-icon.png';
import {Link} from "react-router-dom";


export default function Header() {
    const signOutHandler = () => {
        localStorage.clear();
        window.location.href = '/'; 
    };
 
    
    return (
        <div className="header">
            <div className="header-icons">
                <img className="logo" src={Logo} />
                <img className="sign-out" src={SignOut} onClick= {signOutHandler} />
            </div>
        </div>
    )
}