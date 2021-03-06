import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

// https://medium.com/better-programming/building-basic-react-authentication-e20a574d5e71

function PrivateRoute({ component: Component, ...rest }) {

    return (
        <Route {...rest} render={
            function (props) {
                return localStorage.getItem('token')
                    ? (
                        <Component {...props} />
                    )
                    : (
                        <Redirect to="/login" />
                    );
            }}
        />
    );

}

const withRedux = connect(({ user: { name: username } }) => ({ username }), null);

export default withRedux(PrivateRoute);