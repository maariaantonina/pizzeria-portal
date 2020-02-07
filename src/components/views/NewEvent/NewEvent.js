import React from 'react';
import PropTypes from 'prop-types';
import styles from './NewEvent.module.scss';

const NewEvent = () => (
  <div className={styles.component}>
    <h2>New Event View</h2>
  </div>
);

NewEvent.propTypes = {
  children: PropTypes.node,
};

export default NewEvent;
