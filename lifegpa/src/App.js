
import React from "react";
import { Route } from "react-router-dom";
import FormikLogin from "./components/Login";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import FormikSignUpForm from "./components/SignUpForm/SignUpForm";

import ViewGoals from './components/ViewGoals';

// import Nav from './components/Nav';
import "./App.css";

function App() {
  return (

      <div className="App">
        <div className='login-form-page'>
          <Route exact path ='/' component={FormikLogin} />
        </div>
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
      </div>
    </div>
  );
}

export default App;
