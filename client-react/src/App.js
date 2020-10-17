import './App.css';
import { Card, CardContent, Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles(function (theme) {
  return {
    container: {
      height: '90vh',
    },
    outerGridContainer: {
      height: '100%',
    },
    header: {
      height: '50px',
    },
    footer: {
      height: '50px',
    },
    messages: {
      backgroundColor: '#e5ddd5',
      backgroundImage: 'url(/bg-chat-tile-light.png)',
    },
    message: {
      margin: theme.spacing(1),
      backgroundColor: function (props) {
        return props.sender === 'me' ? '#dcf8c6' : 'white';
      },
    },
  };
});

const chats = [
  { name: 'Nitai' },
];

const messages = [
  { sender: 'Nitai', time: '11:29', text: 'מישהו משהו?' },
  { sender: 'me', time: '13:49', text: 'נראה לי שכמו שכתוב פה:' },
  { sender: 'Nitai', time: '14:56', text: 'לא ממש הבנתי איך אני עושה את זה דרך הקליינט... מישהו הצליח?' },
  { sender: 'Nitai', time: '11:29', text: 'מישהו משהו?' },
  { sender: 'me', time: '13:49', text: 'נראה לי שכמו שכתוב פה:' },
  { sender: 'Nitai', time: '14:56', text: 'לא ממש הבנתי איך אני עושה את זה דרך הקליינט... מישהו הצליח?' },
  { sender: 'Nitai', time: '11:29', text: 'מישהו משהו?' },
  { sender: 'me', time: '13:49', text: 'נראה לי שכמו שכתוב פה:' },
  { sender: 'Nitai', time: '14:56', text: 'לא ממש הבנתי איך אני עושה את זה דרך הקליינט... מישהו הצליח?' },
  { sender: 'Nitai', time: '11:29', text: 'מישהו משהו?' },
  { sender: 'me', time: '13:49', text: 'נראה לי שכמו שכתוב פה:' },
  { sender: 'Nitai', time: '14:56', text: 'לא ממש הבנתי איך אני עושה את זה דרך הקליינט... מישהו הצליח?' },
  { sender: 'Nitai', time: '11:29', text: 'מישהו משהו?' },
  { sender: 'me', time: '13:49', text: 'נראה לי שכמו שכתוב פה:' },
  { sender: 'Nitai', time: '14:56', text: 'לא ממש הבנתי איך אני עושה את זה דרך הקליינט... מישהו הצליח?' },
  { sender: 'Nitai', time: '11:29', text: 'מישהו משהו?' },
  { sender: 'me', time: '13:49', text: 'נראה לי שכמו שכתוב פה:' },
  { sender: 'Nitai', time: '14:56', text: 'לא ממש הבנתי איך אני עושה את זה דרך הקליינט... מישהו הצליח?' },
  { sender: 'Nitai', time: '11:29', text: 'מישהו משהו?' },
  { sender: 'me', time: '13:49', text: 'נראה לי שכמו שכתוב פה:' },
  { sender: 'Nitai', time: '14:56', text: 'לא ממש הבנתי איך אני עושה את זה דרך הקליינט... מישהו הצליח?' },
  { sender: 'Nitai', time: '11:29', text: 'מישהו משהו?' },
  { sender: 'me', time: '13:49', text: 'נראה לי שכמו שכתוב פה:' },
  { sender: 'Nitai', time: '14:56', text: 'לא ממש הבנתי איך אני עושה את זה דרך הקליינט... מישהו הצליח?' },
  { sender: 'Nitai', time: '11:29', text: 'מישהו משהו?' },
  { sender: 'me', time: '13:49', text: 'נראה לי שכמו שכתוב פה:' },
  { sender: 'Nitai', time: '14:56', text: 'לא ממש הבנתי איך אני עושה את זה דרך הקליינט... מישהו הצליח?' },
];

function MessageCard(props) {
  const { children, sender, ...other } = props;
  const classes = useStyles(props);
  return <Card {...other} className={classes.message}>{children}</Card>
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
        <Grid item container xs={3}>
          <Grid item xs={12} component="header" className={classes.header}>
            <Typography variant="h5">
              Chats
            </Typography>
          </Grid>
          <Grid item xs={12} component="main">
            {chats.map(({ name }) => (
              <Grid item xs={12}>
                {name}
              </Grid>
            ))}
          </Grid>
        </Grid>
        {/* Message List */}
        <Grid item xs={9} container direction="column">
          <Grid item component="header" className={classes.header}>
            <Typography variant="h5">
              Messages
            </Typography>
          </Grid>
          <Grid item component="main" className={classes.messages}>
            {messages.map(({ sender, time, text }) => (
              <Grid item container direction="row" justify={sender === 'me' ? 'flex-start' : 'flex-end'} alignItems="center">
                <MessageCard variant="outlined" sender={sender} className={classes.message}>
                  <CardContent>
                    {sender !== 'me' && <Typography variant="caption">{sender}</Typography>}
                    <Typography variant="body1">
                      {text}
                    </Typography>
                    <Typography variant="caption">{time}</Typography>
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
