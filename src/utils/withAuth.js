import React from "react";

import { Redirect, Route } from "react-router-dom";

import localStorage from "./localStorage";

const PrivateRoute = ({ component: Component, ...rest }) => {
  sessionStorage.setItem("auth:redirect", rest.location.pathname);
  return (
    <Route
      {...rest}
      render={props =>
        !!localStorage.read() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
