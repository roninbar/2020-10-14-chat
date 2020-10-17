import './App.css';
import { Card, CardContent, Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';

const chats = [
  { id: 1, name: 'Girit' },
  { id: 2, name: 'Doovshanit' },
  { id: 3, name: 'Bzique' },
  { id: 4, name: 'Namir' },
];

const messages = [
  { id: 1, sender: 'Nitai', time: '11:29', text: 'מישהו משהו?' },
  { id: 2, sender: 'me', time: '13:49', text: 'נראה לי שכמו שכתוב פה:' },
  { id: 3, sender: 'Nitai', time: '14:56', text: 'לא ממש הבנתי איך אני עושה את זה דרך הקליינט... מישהו הצליח?' },
  { id: 4, sender: 'Nitai', time: '11:29', text: 'מישהו משהו?' },
  { id: 5, sender: 'me', time: '13:49', text: 'נראה לי שכמו שכתוב פה:' },
  { id: 6, sender: 'Nitai', time: '14:56', text: 'לא ממש הבנתי איך אני עושה את זה דרך הקליינט... מישהו הצליח?' },
  { id: 7, sender: 'Nitai', time: '11:29', text: 'מישהו משהו?' },
  { id: 8, sender: 'me', time: '13:49', text: 'נראה לי שכמו שכתוב פה:' },
  { id: 9, sender: 'Nitai', time: '14:56', text: 'לא ממש הבנתי איך אני עושה את זה דרך הקליינט... מישהו הצליח?' },
  { id: 10, sender: 'Nitai', time: '11:29', text: 'מישהו משהו?' },
  { id: 11, sender: 'me', time: '13:49', text: 'נראה לי שכמו שכתוב פה:' },
  { id: 12, sender: 'Nitai', time: '14:56', text: 'לא ממש הבנתי איך אני עושה את זה דרך הקליינט... מישהו הצליח?' },
];

const useStyles = makeStyles(function (theme) {
  return {
    container: {
      height: '100vh',
    },
    outerGridContainer: {
      height: '100%',
    },
    messageList: {
      height: '100%',
    },
    header: {
      flexBasis: '7%',
    },
    main: {
      flexBasis: '83%',
      overflowY: 'auto',
    },
    footer: {
      flexBasis: '7%',
    },
    messages: {
      backgroundColor: '#e5ddd5',
      backgroundImage: 'url(/bg-chat-tile-light.png)',
    },
    card: {
      margin: theme.spacing(1),
      backgroundColor: function (props) {
        return props.sender === 'me' ? '#dcf8c6' : 'white';
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
    },
  };
});

function MessageCard(props) {
  const { children, ...other } = props;
  const classes = useStyles(props);
  return <Card {...other} className={classes.card}>{children}</Card>
}

MessageCard.propTypes = {
  sender: PropTypes.string.isRequired,
};

function App() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Grid container spacing={0} className={classes.outerGridContainer}>
        {/* Chat List */}
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
        {/* Message List */}
        <Grid item xs={9} container direction="column" wrap="nowrap" className={classes.messageList}>
          <Grid item component="header" className={classes.header}>
            <Typography variant="h5">
              Messages
            </Typography>
          </Grid>
          <Grid item component="main" container direction="column" wrap="nowrap" className={[classes.main, classes.messages].join(' ')}>
            {messages.map(({ id, sender, time, text }) => (
              <Grid item
                container
                direction="row"
                justify={sender === 'me' ? 'flex-start' : 'flex-end'}
                alignItems="center"
                key={id}
                className={classes.message}
              >
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
            ))}
          </Grid>
          <Grid item component="footer" className={classes.footer}>
            Footer
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
