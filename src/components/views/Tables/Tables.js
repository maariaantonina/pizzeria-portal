import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tables.module.scss';

import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';

import NewBooking from '../NewBooking/NewBooking';
import Booking from '../Booking/Booking';
import Event from '../Event/Event';
import NewEvent from '../NewEvent/NewEvent';

const Tables = () => {
  let { path, url } = useRouteMatch();

  return (
    <div className={styles.component}>
      <h2>Tables View</h2>
      <ul>
        <li>
          <Link to={`${url}/booking/new`}>New Booking</Link>
        </li>
        <li>
          <Link to={`${url}/booking/987xyz`}>Booking 987xyz</Link>
        </li>
        <li>
          <Link to={`${url}/event/new`}>New Event</Link>
        </li>
        <li>
          <Link to={`${url}/event/123abc`}>Event 123abc</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${path}/booking/new`} component={NewBooking} />
        <Route path={`${path}/booking/:id`} component={Booking} />
        <Route path={`${path}/event/new`} component={NewEvent} />
        <Route path={`${path}/event/:id`} component={Event} />
      </Switch>
    </div>
  );
};

Tables.propTypes = {
  children: PropTypes.node,
};

export default Tables;
