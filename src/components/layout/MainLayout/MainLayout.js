import React from 'react';
import PropTypes from 'prop-types';

import Topbar from '../Topbar/Topbar';
import Sidebar from '../Sidebar/Sidebar';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 56,
    height: '100%',
  },
  content: {
    height: '100%',
  },
}));

const MainLayout = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Topbar />
      <Sidebar />
      <main className={classes.content}>{children}</main>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
