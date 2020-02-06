import React from 'react';
import PropTypes from 'prop-types';
import styles from './Order.module.scss';

const Order = ({ children }, props) => (
  <div className={styles.component}>
    <h2>Order View</h2>
    <p>{props.match.params}</p>
    {children}
  </div>
);

Order.propTypes = {
  children: PropTypes.node,
  match: PropTypes.object,
};

export default Order;
