import { Card } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { useStyles } from '../App';

export default function MessageCard(props) {
  const { children, ...other } = props;
  const classes = useStyles(props);
  return <Card {...other} className={classes.card}>{children}</Card>;
}

MessageCard.propTypes = {
  sender: PropTypes.string.isRequired,
};

