import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Avatar, Typography } from '@material-ui/core';
import profilepic from '../../../assets/users/user-01.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content',
  },
  avatar: {
    width: 60,
    height: 60,
  },
  name: {
    marginTop: theme.spacing(1),
  },
}));

const Profile = props => {
  const { className } = props;
  const classes = useStyles();

  const user = {
    name: 'Kasia Kot',
    bio: 'waitress',
  };

  return (
    <div className={clsx(classes.root, className)}>
      <Avatar
        alt='Person'
        className={classes.avatar}
        component={Link}
        src={profilepic}
        to={`${process.env.PUBLIC_URL}/settings`}
      />
      <Typography className={classes.name} variant='h4'>
        {user.name}
      </Typography>
      <Typography variant='body2'>{user.bio}</Typography>
    </div>
  );
};

Profile.propTypes = {
  className: PropTypes.string,
};

export default Profile;
