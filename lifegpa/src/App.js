// React/Routing
import React from "react";
import { Route } from "react-router-dom";
// Components
import FormikLogin from "./components/Login";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import FormikSignUpForm from "./components/SignUpForm";
import FormikNewGoalForm from './components/NewGoalForm';
import ViewGoals from './components/ViewGoals';
import TrackGoals from './components/TrackGoals';
import Challenges from './components/Challenges';
// Styling
import "./App.css";

function App() {
  return (
      <div className="App">
        {/* Public Routes */}
        <Route exact path='/' component={FormikLogin} />
        <Route exact path='/register' component={FormikSignUpForm} />
        {/* Private Routes */}
        <PrivateRoute exact path='/dashboard/:id' component={Dashboard} />
        <PrivateRoute exact path='/track/:id' component={TrackGoals} />
        <PrivateRoute exact path='/goals/:id' component={ViewGoals} />
        {/* <PrivateRoute exact path='/edit/:id/:goal_id' component={EditGoals} /> */}
        <PrivateRoute exact path='/create/:id' component={FormikNewGoalForm} />
        <PrivateRoute exact path='/challenges/:id' component={Challenges} />
        {/* <PrivateRoute exact path='/advice/:id' component={Advice} /> */}
      </div>
  );
}

export default App;
