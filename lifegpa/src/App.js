
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

// import Nav from './components/Nav';
import "./App.css";

function App() {

  return (
      <div className="App">
        <Nav />
        <Route path="/challenges" component={Challenges} />
        <Route path="/advice" component={Advice} />
        <Route path="/track" component={TrackGoals} />
        {/* <div className='login-form-page'>
          <Route exact path ='/' component={FormikLogin} />
        </div>
        <PrivateRoute exact path='/dashboard' component={Dashboard} /> */}
        {/* <Route path="/dashboard" component={Dashboard} />
        <Route path="/challenges" component={Challenges} /> */}
      </div>
  );
}

export default App;
