import React from 'react';
import './Header.css'

import Logo from '../designfiles/lifegpa-logo.png';


export default function Header() {
    return (
        <div className="header">
            <img className="logo" src={Logo} />
        </div>
    )
}