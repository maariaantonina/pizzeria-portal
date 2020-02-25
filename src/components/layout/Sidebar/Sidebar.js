import React from 'react';
import PropTypes from 'prop-types';

import Profile from '../Profile/Profile';
import SidebarNav from '../SidebarNav/SidebarNav';

import { makeStyles } from '@material-ui/core/styles';
import { Divider, Drawer } from '@material-ui/core';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import KitchenIcon from '@material-ui/icons/Kitchen';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SettingsIcon from '@material-ui/icons/Settings';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
    marginTop: 64,
    height: 'calc(100% - 64px)',
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  nav: {
    marginBottom: theme.spacing(2),
  },
}));

const Sidebar = props => {
  const classes = useStyles();
  const { open, variant, onClose } = props;

  const pages = [
    {
      title: 'Tables',
      href: `${process.env.PUBLIC_URL}/tables`,
      icon: <ViewModuleIcon />,
    },
    {
      title: 'Waiter',
      href: `${process.env.PUBLIC_URL}/waiter`,
      icon: <AssignmentIndIcon />,
    },
    {
      title: 'Kitchen',
      href: `${process.env.PUBLIC_URL}/kitchen`,
      icon: <KitchenIcon />,
    },
    {
      title: 'Account',
      href: `${process.env.PUBLIC_URL}/account`,
      icon: <AccountBoxIcon />,
    },
    {
      title: 'Settings',
      href: `${process.env.PUBLIC_URL}/settings`,
      icon: <SettingsIcon />,
    },
  ];

  return (
    <Drawer
      anchor='left'
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div className={classes.root}>
        <Profile />
        <Divider className={classes.divider} />
        <SidebarNav className={classes.nav} pages={pages} />
      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired,
};

export default Sidebar;
