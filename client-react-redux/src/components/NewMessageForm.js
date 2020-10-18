import { TextField } from '@material-ui/core';
import { addMessage } from 'features/chat/chatSlice';
import React, { useState } from 'react';
import { connect } from 'react-redux';

export const NewMessageForm = connect(null, { addMessage })(function ({ addMessage }) {
  const [text, setText] = useState('');
  function onChange({ target: { value } }) {
    setText(value);
  }
  function onSubmit(e) {
    e.preventDefault();
    addMessage(text);
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
      />
    </form>
  );
});
