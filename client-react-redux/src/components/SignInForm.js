import { Button, Grid, makeStyles, TextField } from '@material-ui/core';
import { setUser } from 'features/user/userSlice';
import React, { useState } from 'react';
import { connect as connectToRedux } from 'react-redux';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(function (theme) {
  return {
    root: {
      margin: theme.spacing(2),
    },
  };
});

export const SignInForm = connectToRedux(null, { setUser })(function ({ setUser }) {

  const [username, setUsername] = useState('');

  const classes = useStyles();

  const history = useHistory();

  function onSubmit(e) {
    e.preventDefault();
    setUser(username);
    history.push('/');
  }

  function onChangeUsername({ target: { value } }) {
    setUsername(value);
  }

  return (
    <form onSubmit={onSubmit}>
      <Grid container justify="center">
        <TextField
          variant="outlined"
          required
          label="Enter your name"
          name="username"
          value={username}
          onChange={onChangeUsername}
          classes={classes}
        />
        <Button
          variant="contained"
          type="submit"
          classes={classes}
        >
          Enter Chat
        </Button>
      </Grid>
    </form>
  );

});

