import React from 'react';
import PropTypes from 'prop-types';
import styles from './NewBooking.module.scss';

const NewBooking = () => (
  <div className={styles.component}>
    <h2>New Booking View</h2>
  </div>
);

NewBooking.propTypes = {
  children: PropTypes.node,
};

export default NewBooking;
