import { Snackbar } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { logInAsync } from 'features/user/userSlice';
import React, { useState } from 'react';
import { connect as connectToRedux } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Alert } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default connectToRedux(({ user: { error } }) => ({ error }), { logInAsync })(function ({ error, logInAsync }) {

    const classes = useStyles();
    const history = useHistory();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function onSubmit(e) {
        e.preventDefault();
        const { error } = await logInAsync({ username, password });
        if (!error) {
            history.push('/');
        }
    }

    function onChangeUsername({ target: { value } }) {
        setUsername(value);
    }

    function onChangePassword({ target: { value } }) {
        setPassword(value);
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form onSubmit={onSubmit} className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        autoComplete="username"
                        autoFocus
                        label="Username"
                        type="text"
                        name="username"
                        value={username}
                        onChange={onChangeUsername}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        autoComplete="current-password"
                        label="Password"
                        type="password"
                        name="password"
                        value={password}
                        onChange={onChangePassword}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            {/* <Box mt={8}>
                <Copyright />
            </Box> */}
            <Snackbar open={Boolean(error)}>
                <Alert variant="filled" severity="error" elevation={6}>{error?.message}</Alert>
            </Snackbar>
        </Container>
    );

});

