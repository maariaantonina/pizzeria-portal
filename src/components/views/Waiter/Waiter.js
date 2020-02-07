import React from 'react';
import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';

import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';

import NewOrder from '../NewOrder/NewOrder';
import Order from '../Order/Order';

const Waiter = () => {
  let { path, url } = useRouteMatch();
  return (
    <div className={styles.component}>
      <h2>Waiter View</h2>
      <ul>
        <li>
          <Link to={`${url}/order/new`}>New Order</Link>
        </li>
        <li>
          <Link to={`${url}/order/123`}>Order id</Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${path}/order/new`} component={NewOrder} />
        <Route path={`${path}/order/:id`} component={Order} />
      </Switch>
    </div>
  );
};

Waiter.propTypes = {
  children: PropTypes.node,
};

export default Waiter;
