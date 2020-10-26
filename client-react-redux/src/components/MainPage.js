import Chat from 'components/Chat/Chat';
import Sidebar from 'components/Sidebar/Sidebar';
import { logOutAsync } from 'features/user/userSlice';
import React, { useState } from 'react';
import { connect as connectToRedux } from 'react-redux';

const MainPage = connectToRedux(null, { logOutAsync })(function ({ logOutAsync, history }) {

    const [chatData, setChatData] = useState({});

    async function onLogOut() {
        await logOutAsync();
        history.push('/login');
    }

    function handleChatClick(sideBarData) {
        if (sideBarData?.id) {
            setChatData(sideBarData);
        }
    }

    return (
        <div className="app">
            <div className="app__body">
                <Sidebar onSideBarClicked={handleChatClick} onLogOut={onLogOut} />
                <Chat chatData={chatData} />
            </div>
        </div>
    );
});

export default MainPage;