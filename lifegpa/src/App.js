import React from 'react';
import { Route } from 'react-router-dom';
import FormikLogin from './components/Login';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';

import ViewGoals from './components/ViewGoals';

// import Nav from './components/Nav';
import './App.css';

function App() {
  return (
    <>
     {/* <ViewGoals /> */}

    <Route exact path='/viewgoals'
      render={props => <ViewGoals {...props} />}
    />
    </>

      // <div className="App">
      //   <div className='login-form-page'>
      //      <Route extact path ='/' component={FormikLogin} />
      //   </div>
      //     <PrivateRoute extact path='/dashboard' component={Dashboard} />
      // </div> 
  );
}

export default App;
