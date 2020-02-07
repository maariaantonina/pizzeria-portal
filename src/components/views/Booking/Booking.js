import React from 'react';
import PropTypes from 'prop-types';
import styles from './Booking.module.scss';

const Booking = ({
  match: {
    params: { id },
  },
}) => (
  <div className={styles.component}>
    <h2>Booking View</h2>
    <p>Booking id {id}</p>
  </div>
);

Booking.propTypes = {
  children: PropTypes.node,
  match: PropTypes.object,
};

export default Booking;
