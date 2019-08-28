import React from 'react';
import { Route } from 'react-router-dom';
import FormikLogin from './components/Login';
import Dashboard from './components/Dashboard';
import Challenges from './components/Challenges';
import PrivateRoute from './components/PrivateRoute';

import Nav from './components/Nav';
import './App.css';

function App() {
  return (

      <div className="App">
        <Nav />
        <Route exact path="/challenges" component={Challenges} />
        {/* <div className='login-form-page'>
          <Route exact path ='/' component={FormikLogin} />
        </div> */}
        <Route exact path='/dashboard' component={Dashboard} />
      </div>
  );
}

export default App;
