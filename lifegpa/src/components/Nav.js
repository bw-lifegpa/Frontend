import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';

import { slide as Menu } from 'react-burger-menu';

export default function Nav(props) {
    return (
        <Menu right>
            <NavLink to="/dashboard/:id">
                <a id="dashboard" className="menu-item">Dashboard</a>
            </NavLink>
            <NavLink to="/track/:id">
                <a id="track" className="menu-item">Track</a>
            </NavLink>
            <NavLink to="/challenges/:id">
                <a id="challenges" className="menu-item">Challenges</a>
            </NavLink>
            <NavLink to="/advice/:id">
                <a id="advice" className="menu-item">Advice</a>
            </NavLink>
        </Menu>
    )
}