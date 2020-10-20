import './App.css';
import { AppBar } from '@material-ui/core';
import { Chat } from 'components/Chat';
import PrivateRoute from 'components/PrivateRoute';
import { SignInForm } from 'components/SignInForm';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <AppBar />
      <Switch>
        <Route path="/login" component={SignInForm} />
        <PrivateRoute path="/" component={Chat} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

