import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './NewBooking.module.scss';

import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';

const NewBooking = ({ display }) => {
  const [visibility, setVisibility] = useState('block');
  return (
    <Box component='div' display={visibility} className={styles.component} >
      <Card>
        <CardHeader title='New Booking' action={
          <IconButton>
            <CloseIcon />
          </IconButton>
        } />
        <Divider />
        <CardContent>
          Here will be some smart form
        </CardContent>
        <Divider />
        <CardActions>
          <Button>Save</Button>
        </CardActions>


      </Card>
    </Box>
  );
};

NewBooking.propTypes = {
  children: PropTypes.node,
  display: PropTypes.bool,
};

export default NewBooking;
