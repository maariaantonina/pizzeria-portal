import React from 'react';
import PropTypes from 'prop-types';
import styles from './NewOrder.module.scss';

const NewOrder = (props) => (
  <div className={styles.component}>
    <h2>NewOrder View</h2>
  </div>
);

NewOrder.propTypes = {
  children: PropTypes.node,
};

export default NewOrder;
