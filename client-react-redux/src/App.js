import './App.css';
import { Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { MessageList } from './components/MessageList';
import { NewMessageForm } from './components/NewMessageForm';

const chats = [
  { id: 1, name: 'Girit' },
  { id: 2, name: 'Doovshanit' },
  { id: 3, name: 'Bzique' },
  { id: 4, name: 'Namir' },
];

export const messages = [
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
    },
    header: {
      flexBasis: '7%',
    },
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
        backgroundImage: 'url(/bg-chat-tile-light.png)',
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
    footer: {
      flexBasis: '7%',
    },
    messages: {
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
    input: {
      padding: theme.spacing(1),
      backgroundColor: '#f0f0f0',
    },
  };
});

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
          <MessageList classes={classes} />
          <Grid item container component="footer" className={classes.footer}>
            <Grid item xs={12} container justify="center" className={classes.input}>
              <Grid item xs={10}>
                <NewMessageForm />
              </Grid>
            </Grid>
            {/* <Grid item xs={1}>
              <Button type="submit">Send</Button>
            </Grid> */}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;

