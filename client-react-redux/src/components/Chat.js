import { Container, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { MessageList } from './MessageList';
import { NewMessageForm } from './NewMessageForm';

const chats = [
    { id: 1, name: 'Girit' },
    { id: 2, name: 'Doovshanit' },
    { id: 3, name: 'Bzique' },
    { id: 4, name: 'Namir' },
];

export const useStyles = makeStyles(function (theme) {
    return {
        container: {
            height: '100vh',
        },
        outerGridContainer: {
            height: '100%',
        },
        messageList: {
            height: '100%',
            // position: 'relative',
        },
        // background: {
        //   position: 'absolute',
        //   top: 0,
        //   width: '100%',
        //   height: '100%',
        //   opacity: 0.06,
        //   backgroundColor: '#e5ddd5',
        //   backgroundImage: 'url(/images/bg-chat-tile-light.png)',
        //   backgroundAttachment: 'fixed',
        // },
        header: {
            flexBasis: '7%',
            backgroundColor: '#f0f0f0',
        },
        footer: {
            flexBasis: '7%',
            backgroundColor: '#f0f0f0',
        },
        input: {
            padding: theme.spacing(1),
        },
    };
});

export function Chat() {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
            <Grid container spacing={0} className={classes.outerGridContainer}>
                <Grid item xs={3} container direction="column" wrap="nowrap">
                    <Grid item xs={12} component="header" className={classes.header}>
                        <Typography variant="h5">
                            Chats
                        </Typography>
                    </Grid>
                    <Grid item xs={12} container direction="column" wrap="nowrap" component="main" className={classes.main}>
                        {chats.map(({ id, name }) => (
                            <Grid item key={id}>
                                {name}
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Grid item xs={9} container direction="column" wrap="nowrap" className={classes.messageList}>
                    {/* <div className={classes.background} /> */}
                    <Grid item component="header" className={classes.header}>
                        <Typography variant="h5">
                            Messages
                        </Typography>
                    </Grid>
                    <MessageList />
                    <Grid item container component="footer" className={classes.footer}>
                        <Grid item xs={12} container justify="center" className={classes.input}>
                            <Grid item xs={10}>
                                <NewMessageForm />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}
