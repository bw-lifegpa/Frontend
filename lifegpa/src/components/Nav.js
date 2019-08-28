import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';

import { slide as Menu } from 'react-burger-menu';

export default function Nav() {
    return (
        <Menu right>
            <NavLink to="/dashboard">
                <a id="dashboard" className="menu-item">Dashboard</a>
            </NavLink>
            <NavLink to="/track">
                <a id="track" className="menu-item">Track</a>
            </NavLink>
            <NavLink to="/challenges">
                <a id="challenges" className="menu-item">Challenges</a>
            </NavLink>
            <NavLink to="/advice">
                <a id="advice" className="menu-item">Advice</a>
            </NavLink>
        </Menu>
    )
}