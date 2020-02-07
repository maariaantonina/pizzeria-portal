import React from 'react';
import PropTypes from 'prop-types';
import styles from './Order.module.scss';

const Order = ({ match: { params: { id } } }) => (
  <div className={styles.component}>
    <h2>Order View</h2>
    <p>order id {id}</p>
  </div>
);

Order.propTypes = {
  children: PropTypes.node,
  match: PropTypes.object,
};

export default Order;
