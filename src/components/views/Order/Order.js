import React from 'react';
import PropTypes from 'prop-types';
import styles from './Order.module.scss';

import Paper from '@material-ui/core/Paper';

const Order = ({
  match: {
    params: { id },
  },
}) => (
  <Paper className={styles.component}>
    <h2>Order View</h2>
    <p>order id {id}</p>
  </Paper>
);

Order.propTypes = {
  children: PropTypes.node,
  match: PropTypes.object,
};

export default Order;
