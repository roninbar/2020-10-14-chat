import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

// https://medium.com/better-programming/building-basic-react-authentication-e20a574d5e71

function PrivateRoute({ username, component: Component, ...rest }) {

  return (
    <Route
      {...rest}
      render={props =>
        {
          return username
            ? (
              <Component {...props} />
            )
            : (
              <Redirect to="/login" />
            );
        }
      }
    />
  );                                           

}

const withRedux = connect(({ user: { name: username } }) => ({ username }), null);

export default withRedux(PrivateRoute);