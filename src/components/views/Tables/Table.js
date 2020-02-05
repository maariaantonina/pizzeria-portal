import React from 'react';
import PropTypes from 'prop-types';
import styles from './Table.module.scss';

const Table = (props) => (
  <div className={styles.component}>
    <h2>Table View</h2>
  </div>
);

Table.propTypes = {
  children: PropTypes.node,
};

export default Table;
