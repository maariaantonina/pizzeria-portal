import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tables.module.scss';

import { Link } from 'react-router-dom';

const Tables = (props) => (
  <div className={styles.component}>
    <h2>Tables View</h2>
    <Link exact to={`${process.env.PUBLIC_URL}/booking/new`} >New Booking</Link>
    <Link exact to={`${process.env.PUBLIC_URL}/booking/987xyz`} >Booking 987xyz</Link>
    <Link exact to={`${process.env.PUBLIC_URL}/event/new`} >New Event</Link>
    <Link exact to={`${process.env.PUBLIC_URL}/event/123abc`} >Event 123abc</Link>
  </div>
);

Tables.propTypes = {
  children: PropTypes.node,
};

export default Tables;
