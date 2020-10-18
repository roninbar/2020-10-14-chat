import { CardContent, Grid, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import MessageCard from './MessageCard';

const useStyles = makeStyles(function (theme) {
    return {
        main: {
            flexBasis: '83%',
            overflowY: 'auto',
            position: 'relative',
            '& > .overlay': {
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                zIndex: -1,
                opacity: 0.125,
                backgroundImage: 'url(/images/bg-chat-tile-light.png)',
                backgroundAttachment: 'fixed',
            },
            '& > .underlay': {
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                zIndex: -2,
                backgroundColor: '#e5ddd5',
            },
        },
        cardContent: {
            display: 'flex',
            flexFlow: 'column nowrap',
            padding: theme.spacing(1),
        },
        sender: {
            alignSelf: 'flex-start',
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
            <div className="overlay" />
            <div className="underlay" />
            {props.messages?.map(({ id, sender, time, text }, idx) => (
                <Grid
                    item
                    container
                    direction="row"
                    justify={sender === 'me' ? 'flex-start' : 'flex-end'}
                    alignItems="center"
                    className={classes.message}
                    key={id}
                    ref={idx === props.messages?.length - 1 ? lastMessage : null}
                >
                    <Grid item xs={8}>
                        <MessageCard sender={sender}>
                            <CardContent className={classes.cardContent}>
                                {sender !== 'me' && (
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
})

