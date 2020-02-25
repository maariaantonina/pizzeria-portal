import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../../assets/logo/logo--white.svg';

import { makeStyles } from '@material-ui/core/styles';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import MenuIcon from '@material-ui/icons/Menu';
import { AppBar, Toolbar, Badge, Hidden, IconButton } from '@material-ui/core';

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

const Topbar = props => {
  const { onSidebarOpen } = props;
  const classes = useStyles();
  const [notifications] = useState([1]);
  return (
    <AppBar className={classes.root}>
      <Toolbar>
        <Link to={`${process.env.PUBLIC_URL}/`}>
          <Logo />
        </Link>
        <div className={classes.flexGrow} />
        <Hidden mdDown>
          <IconButton color='inherit'>
            <Badge badgeContent={notifications.length} color='primary' variant='dot'>
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton className={classes.signOutButton} color='inherit'>
            <InputIcon />
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton color='inherit' onClick={onSidebarOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
};

export default Topbar;
