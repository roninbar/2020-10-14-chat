import { Card, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles(function (theme) {
  return {
    card: {
      margin: theme.spacing(1),
      backgroundColor: function (props) {
        return props.sender === 'me' ? '#dcf8c6' : 'white';
      },
    },
  };
});

export default function MessageCard(props) {
  const { children, ...other } = props;
  const classes = useStyles(props);
  return <Card {...other} className={classes.card}>{children}</Card>;
}

MessageCard.propTypes = {
  sender: PropTypes.string.isRequired,
};

