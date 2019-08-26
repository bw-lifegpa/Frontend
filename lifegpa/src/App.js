import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import FormikLogin from './components/Login';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

import MiniDash from './components/MiniDash';

function App() {
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;
