import React from 'react';
import PropTypes from 'prop-types';
import styles from './Dashboard.module.scss';

const Dashboard = (props) => (
  <div className={styles.component}>
    <h2>Dashboard View</h2>
  </div>
);

Dashboard.propTypes = {
  children: PropTypes.node,
};

export default Dashboard;
