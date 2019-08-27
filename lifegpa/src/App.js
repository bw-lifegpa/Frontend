import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import FormikLogin from './components/Login';
import Dashboard from './components/Dashboard';
import Nav from './components/Nav';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Dashboard />
    </div>
  );
}

export default App;
