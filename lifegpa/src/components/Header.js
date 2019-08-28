import React from 'react';
import './Header.css'

import Logo from '../designfiles/lifegpa-logo.png';
import SignOut from '../designfiles/sign-out-icon.png';


export default function Header() {
    return (
        <div className="header">
            <div className="header-icons">
                <img className="logo" src={Logo} />
                <img className="sign-out" src={SignOut} />
            </div>
        </div>
    )
}