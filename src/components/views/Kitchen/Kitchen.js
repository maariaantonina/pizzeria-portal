import React from 'react';
import PropTypes from 'prop-types';
import styles from './Kitchen.module.scss';

const Kitchen = (props) => (
  <div className={styles.component}>
    <h2>Kitchen View</h2>
  </div>
);

Kitchen.propTypes = {
  children: PropTypes.node,
};

export default Kitchen;
