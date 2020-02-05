import React from 'react';
import PropTypes from 'prop-types';
import styles from './Login.module.scss';

const Login = (props) => (
  <div className={styles.component}>
    <h2>Login View</h2>
  </div>
);

Login.propTypes = {
  children: PropTypes.node,
};

export default Login;
