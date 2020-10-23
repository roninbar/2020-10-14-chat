import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined } from '@material-ui/icons';
import MessageList from 'components/MessageList';
import { sendMessageAsync } from 'features/chat/chatSlice';
import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import './Chat.css';

const LOCALE = 'he-IL';

function Chat({ username, messages, sendMessageAsync }) {

    function onSubmitMessage(e) {
        e.preventDefault();
        const now = new Date();
        sendMessageAsync({
            time: now.toLocaleTimeString(LOCALE),
            sender: username,
            text: input,
        });
        setInput('');
    }

    const [input, setInput] = useState('');

    useEffect(function () {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView();
        }
    }, [messages]);

    const messagesEndRef = useRef(null);

    let groupData;

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={groupData?.picture ?? null} />
                <div className="chat__headerInfo">
                    <h3>{groupData?.name ?? 'Room name'}</h3>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                <MessageList messages={messages}/>
                <div ref={messagesEndRef} />
            </div>
            <div className="chat__footer">
                <IconButton>
                    <InsertEmoticon />
                </IconButton>
                <IconButton>
                    <AttachFile />
                </IconButton>
                <form onSubmit={onSubmitMessage}>
                    <input
                        type="text"
                        value={input}
                        onChange={({ target: { value } }) => setInput(value)}
                        placeholder="Type a message"
                    />
                    <button type="submit">Send</button>
                </form>
                <IconButton>
                    <Mic />
                </IconButton>
            </div>
        </div>
    );

}

const mapStateToProps = ({ user: { name: username }, chat: { messages } }) => ({ username, messages });

const mapDispatchToProps = { sendMessageAsync };

const withRedux = connect(mapStateToProps, mapDispatchToProps);

export default withRedux(Chat);

