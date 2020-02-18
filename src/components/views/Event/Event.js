
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Event.module.scss';

const Event = ({
  match: {
    params: { id },
  },
}) => (
    <div className={styles.component}>
      <h2>Event View</h2>
      <p>Event id {id}</p>
    </div>
  );

Event.propTypes = {
  children: PropTypes.node,
  match: PropTypes.object,
};

export default Event;
