import './App.css';
import Chat from 'components/Chat/Chat';
import PrivateRoute from 'components/PrivateRoute';
import Sidebar from 'components/Sidebar/Sidebar';
import SignInForm from 'components/SignInForm';
import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function MainPage() {

    const [chatData, setChatData] = useState({});

    function handleChatClick(sideBarData) {
        if (sideBarData?.id) {
            setChatData(sideBarData);
        }
    }

    return (
        <div className="app">
            <div className="app__body">
                <Sidebar onSideBarClicked={handleChatClick} />
                <Chat chatData={chatData} />
            </div>
        </div>
    );
}

function App() {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/login" component={SignInForm} />
                <PrivateRoute exact path="/" component={MainPage} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
