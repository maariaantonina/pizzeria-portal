import React from 'react';
import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';

const Waiter = (props) => (
  <div className={styles.component}>
    <h2>Waiter View</h2>
  </div>
);

Waiter.propTypes = {
  children: PropTypes.node,
};

export default Waiter;
