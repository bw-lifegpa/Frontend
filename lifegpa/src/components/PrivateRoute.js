import React from "react";
import { Route, Redirect } from "react-router";

const PrivateRoute = ({ component: Component, habit_id, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem("token")) {
          return <Component {...props} habit_id={habit_id} />;
        }
        return <Redirect to="/" />;
      }}
    />
  );
};

export default PrivateRoute;