import React from 'react';
import './Nav.css';

import { slide as Menu } from 'react-burger-menu';

export default function Nav() {
    return (
        <Menu right>
            <a id="home" className="menu-item" href="/">Home</a>
            <a id="about" className="menu-item" href="/about">About</a>
            <a id="contact" className="menu-item" href="/contact">Contact</a>
        </Menu>
    )
}