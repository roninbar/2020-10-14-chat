import { makeStyles, TextField } from '@material-ui/core';
import { sendMessageAsync } from 'features/chat/chatSlice';
import React, { useState } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = ({ user: { name: sender } }) => ({ sender });

const mapDispatchToProps = { sendMessageAsync };

const withRedux = connect(mapStateToProps, mapDispatchToProps);

export default withRedux(function ({ sender, sendMessageAsync }) {

    const [text, setText] = useState('');

    function onChangeText({ target: { value } }) {
        setText(value);
    }

    function onSubmit(e) {
        e.preventDefault();
        const now = new Date();
        sendMessageAsync({ time: now.toLocaleTimeString(), sender, text });
        setText('');
    }

    return (
        <form onSubmit={onSubmit}>
            <TextField
                variant="outlined"
                label="Type a message"
                name="text"
                value={text}
                onChange={onChangeText}
                fullWidth
                autoFocus
            />
        </form>
    );
    
});

