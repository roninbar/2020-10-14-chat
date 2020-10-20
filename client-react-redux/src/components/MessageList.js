import { CardContent, Grid, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import MessageCard from './MessageCard';

const useStyles = makeStyles(function (theme) {
    return {
        main: {
            flexBasis: '83%',
            overflowY: 'auto',
            backgroundColor: '#e5ddd5',
            backgroundImage: 'url(/images/bg-chat-tile-light.png)',
            backgroundAttachment: 'fixed',
        },
        cardContent: {
            display: 'flex',
            flexFlow: 'column nowrap',
            padding: theme.spacing(1),
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

const mapStateToProps = ({ chat: { messages } }) => ({ messages });

const withRedux = connect(mapStateToProps);

export const MessageList = withRedux(function (props) {

    const classes = useStyles(props);

    const lastMessage = useRef();

    useEffect(function () {
        return lastMessage.current?.scrollIntoView(false);
    }, [props.messages]);
    
    return (
        <Grid item component="main" container direction="column" wrap="nowrap" className={classes.main}>
            {props.messages?.map(({ id, sender, time, text, status }, idx) => (
                <Grid
                    item
                    container
                    direction="row"
                    justify={status === 'received' ? 'flex-end' : 'flex-start'}
                    className={classes.message}
                    key={time}
                    ref={idx === props.messages?.length - 1 ? lastMessage : null}
                >
                    <Grid item xs={8}>
                        <MessageCard sender={sender} status={status}>
                            <CardContent className={classes.cardContent}>
                                {status === 'received' && (
                                    <Typography variant="caption" className={classes.sender}>{sender}</Typography>
                                )}
                                <Typography variant="body1">
                                    {text}
                                </Typography>
                                <Typography variant="caption" className={classes.time}>{time}</Typography>
                            </CardContent>
                        </MessageCard>
                    </Grid>
                </Grid>
            ))}
        </Grid>
    );
});

