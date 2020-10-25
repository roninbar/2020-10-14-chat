import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from 'components/MainPage';
import PrivateRoute from 'components/PrivateRoute';
import SignInPage from 'components/SignInPage';
import './App.css';

function App() {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/login" component={SignInPage} />
                <PrivateRoute exact path="/" component={MainPage} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
