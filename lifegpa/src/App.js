import React from 'react';
import { Route } from 'react-router-dom';
import FormikLogin from './components/Login';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import './App.css';
import Nav from './components/Nav';

function App() {
  return (

      <div className="App">
        <Nav />
        <Dashboard />
        {/* <div className='login-form-page'>
          <Route exact path ='/' component={FormikLogin} />
        </div> */}
        {/* <PrivateRoute exact path='/dashboard' component={Dashboard} /> */}
      </div>
  );
}

export default App;
