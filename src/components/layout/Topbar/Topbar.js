import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/styles';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import { AppBar, Toolbar, Badge, IconButton } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none',
  },
  flexGrow: {
    flexGrow: 1,
  },
  signOutButton: {
    marginLeft: theme.spacing(1),
  },
}));

const Topbar = () => {
  const classes = useStyles();
  const [notifications] = useState([1]);
  return (
    <AppBar>
      <Toolbar>
        <Link to={`${process.env.PUBLIC_URL}/`}>
          <img alt='Logo' src='' />
        </Link>
        <div className={classes.flexGrow} />
        <IconButton color='inherit'>
          <Badge badgeContent={notifications.length} color='primary' variant='dot'>
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton className={classes.signOutButton} color='inherit'>
          <InputIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  children: PropTypes.node,
};

export default Topbar;
