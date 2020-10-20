import { makeStyles, TextField } from '@material-ui/core';
import { sendMessageAsync } from 'features/chat/chatSlice';
import React, { useState } from 'react';
import { connect } from 'react-redux';

const useStyles = makeStyles(function (theme) {
  return {
  };
});

const mapStateToProps = ({ user: { name: sender } }) => ({ sender });

const mapDispatchToProps = { sendMessageAsync };

const withRedux = connect(mapStateToProps, mapDispatchToProps);

export const NewMessageForm = withRedux(
  function ({ sender, sendMessageAsync }) {

    const classes = useStyles();

    const [text, setText] = useState('');

    function onChange({ target: { value } }) {
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
          onChange={onChange}
          fullWidth
          autoFocus
          classes={{ input: classes.input }}
        />
      </form>
    );
  },
);

