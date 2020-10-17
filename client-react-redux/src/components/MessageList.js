import { CardContent, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import MessageCard from './MessageCard';

const mapStateToProps = ({ chat: { messages } }) => ({ messages });

const withRedux = connect(mapStateToProps);

export const MessageList = withRedux(function (props) {
    return (
        <Grid item component="main" container direction="column" wrap="nowrap" className={props.classes.main}>
            <div className="overlay" />
            <div className="underlay" />
            {props.messages?.map(({ id, sender, time, text }) => (
                <Grid item container direction="row" justify={sender === 'me' ? 'flex-start' : 'flex-end'} alignItems="center" key={id} className={props.classes.message}>
                    <MessageCard sender={sender}>
                        <CardContent className={props.classes.cardContent}>
                            {sender !== 'me' && <Typography variant="caption" className={props.classes.sender}>{sender}</Typography>}
                            <Typography variant="body1">
                                {text}
                            </Typography>
                            <Typography variant="caption" className={props.classes.time}>{time}</Typography>
                        </CardContent>
                    </MessageCard>
                </Grid>
            ))}
        </Grid>
    );
})

