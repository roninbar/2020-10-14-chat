import { CardContent, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import MessageCard from './MessageCard';

const useStyles = makeStyles(function (theme) {
    return {
        cardContent: {
            display: 'flex',
            flexFlow: 'column nowrap',
        },
        sender: {
            alignSelf: 'flex-start',
            color: '#aaa',
        },
        time: {
            alignSelf: 'flex-end',
            color: '#aaa',
        },
    };
});

export default function MessageList({ messages }) {

    const classes = useStyles();

    return (
        <Grid item component="main" container direction="column" wrap="nowrap">
            {messages.map(({ id, sender, time, text, status }) => (
                <Grid
                    item
                    container
                    direction="row"
                    justify={status === 'pending' || status === 'sent' ? 'flex-start' : 'flex-end'}
                    key={id}
                >
                    <Grid item xs={8}>
                        <MessageCard sender={sender} status={status}>
                            <CardContent className={classes.cardContent}>
                                {status === 'received' && (
                                    <Typography variant="caption" className={classes.sender}>{sender}</Typography>
                                )}
                                <Typography variant="body1">{text}</Typography>
                                <Typography variant="caption" className={classes.time}>{time}</Typography>
                            </CardContent>
                        </MessageCard>
                    </Grid>
                </Grid>
            ))}
        </Grid>
    );

}

