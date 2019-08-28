
import React from "react";
import { Route } from "react-router-dom";
import FormikLogin from "./components/Login";
import Advice from "./components/Advice";
import Dashboard from "./components/Dashboard";
import Challenges from "./components/Challenges";
import PrivateRoute from "./components/PrivateRoute";
import TrackGoals from "./components/TrackGoals";
import FormikSignUpForm from "./components/SignUpForm/SignUpForm";
import Nav from "./components/Nav";

import ViewGoals from './components/ViewGoals';
// import TrackGoals from './components/TrackGoals';

// import Nav from './components/Nav';
import "./App.css";

function App() {

  return (
      <div className="App">
      {/* <TrackGoals /> */}
        {/* <div className='login-form-page'>
          <Route exact path ='/' component={FormikLogin} />
       <Route path = '/signup' component={FormikSignUpForm} />
        </div>
        <PrivateRoute exact path='/dashboard' component={Dashboard} /> */}
      </div>
  );
}

export default App;
