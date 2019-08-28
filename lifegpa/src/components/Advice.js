import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Advice.css';

import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import MagnifyingGlass from '../designfiles/magnifying-glass.png';
import AskAProIcon from '../designfiles/ask-a-pro.png';
import ArticlesIcon from '../designfiles/articles.png';
import VideosIcon from '../designfiles/videos.png';
import FeaturedVideoPlaceholder from '../designfiles/featured-video-placeholder.png';
import ForwardIcon from '../designfiles/forward-icon.png';
import BackIcon from '../designfiles/back-icon.png';

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
                <div className="advice-body">
                    <div className="advice-nav">
                        <div className="challenges-profile-mini">
                            <img className="challenges-profile-picture" src={userData.avatar} />
                            <div className="challenges-profile-info">
                                <h4>{`${userData.first_name} ${userData.last_name}`}</h4>
                                <h5>View Account</h5>
                            </div>
                        </div>
                        <form>
                            <label>
                                <input
                                    value="Search by name or category"
                                />
                            </label>
                            <img src={MagnifyingGlass} />
                        </form>
                        <NavLink to="/dashboard">
                            <h3>Back to Dashboard</h3>
                        </NavLink>
                    </div>
                    <div className="advice-header">
                        <h1>Advice</h1>
                        <div className="advice-icons">
                            <div className="advice-icon ask-a-pro">
                                <img src={AskAProIcon} />
                                <h4>Ask a Pro</h4>
                            </div>
                            <div className="advice-icon videos">
                                <img src={VideosIcon} />
                                <h4>Videos</h4>
                            </div>
                            <div className="advice-icon articles">
                                <img src={ArticlesIcon} />
                                <h4>Articles</h4>
                            </div>
                        </div>
                    </div>
                    <div className="advice-featured-video">
                        <h2>Today's Featured Video</h2>
                        <img src={FeaturedVideoPlaceholder} />
                    </div>
                    <div className="advice-articles">
                        <h1>Articles</h1>
                        <div className="articles-container">
                            <div className="articles-view">
                                <div className="articles-view-box">
                                    <div className="articles-view-img" />
                                    <h4>The Benefits of Reading For Pleasure</h4>
                                    <p>By: Stephanie Hahn</p>
                                </div>
                                <div className="articles-view-box">
                                    <div className="articles-view-img" />
                                    <h4>The Ultimate Travel Guide For The Chronically Busy</h4>
                                    <p>By: Clive Harrison</p>
                                </div>
                                <div className="articles-view-box">
                                    <div className="articles-view-img" />
                                    <h4>30 Days To Own The Kitchen</h4>
                                    <p>By: Stacey Wood</p>
                                </div>
                            </div>
                            <div className="articles-pagination">
                                <ul className="articles-page-numbers">
                                    <li><img src={BackIcon} /></li>
                                    <li>1</li>
                                    <li>2</li>
                                    <li>3</li>
                                    <li>4</li>
                                    <li>5</li>
                                    <li>6</li>
                                    <li>7</li>
                                    <li>8</li>
                                    <li>9</li>
                                    <li>10</li>
                                    <li><img src={ForwardIcon} /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}