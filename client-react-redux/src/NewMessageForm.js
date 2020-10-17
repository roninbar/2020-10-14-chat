import { TextField } from '@material-ui/core';
import React from 'react';

export function NewMessageForm() {
  return (
    <TextField variant="outlined" label="Type a message" fullWidth autoFocus />
  );
}
