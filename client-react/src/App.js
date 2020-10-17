import './App.css';
import { Card, CardContent, Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles({
  container: {
    height: '100vh',
  },
  header: {
    height: '50px',
  },
  messages: {
    backgroundImage: 'url(/bg-chat-tile-light.png)',
  },
  messageIn: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  messageOut: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  message: {
    flexBasis: 'auto',
  },
  table: {
    minWidth: 650,
  },
  tableBody: {
    overflowX: 'hidden',
  },
});

const chats = [
  { name: 'Nitai' },
];

const messages = [
  { sender: 'Nitai', time: '11:29', text: 'מישהו משהו?' },
  { sender: 'me', time: '13:49', text: 'נראה לי שכמו שכתוב פה:' },
  { sender: 'Nitai', time: '14:56', text: 'לא ממש הבנתי איך אני עושה את זה דרך הקליינט... מישהו הצליח?' },
];

function App() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Grid container spacing={0}>
        <Grid item container xs={4}>
          <Grid item xs={12} component="header" className={classes.header}>
            Chats
            </Grid>
          {chats.map(({ name }) => (
            <Grid item xs={12}>
              {name}
            </Grid>
          ))}
        </Grid>
        <Grid item container xs={8} className={classes.messages}>
          <Grid item xs={12} component="header" className={classes.header}>
            Messages
          </Grid>
          {messages.map(({ sender, time, text }) => (
            <Grid item container xs={12} spacing={1} className={sender === 'me' ? classes.messageOut : classes.messageIn}>
              <Card variant="outlined" className={classes.message}>
                <CardContent>
                  <Typography>
                    {text}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
