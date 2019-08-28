import React from 'react';
import './Footer.css'

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-left">
                <a href="#">Contact Us</a>
                <a href="#">Site Map</a>
            </div>
            <div className="copyright">
                <p>LifeGPA ©2019 ALL RIGHTS RESERVED</p>
            </div>
            <div className="footer-right">
                <a href="#">Terms of Service</a>
                <a href="#">Privacy Policy</a>
            </div>
        </div>
    )
}