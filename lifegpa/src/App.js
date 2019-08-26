import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import FormikLogin from './components/Login';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className='login-form-page'>
          <Route extact path ='/' component={FormikLogin} />
        </div>
        <PrivateRoute extact path='/dashboard' component={Dashboard} />
      </div>
    </Router>


  );
}

export default App;
