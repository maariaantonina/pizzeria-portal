import React from 'react';
import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';

import { Link, Switch, Route } from 'react-router-dom';

import NewOrder from '../NewOrder/NewOrder';
import Order from '../Order/Order';

const Waiter = (props) => (
  <div className={styles.component}>
    <h2>Waiter View</h2>
    <ul>
      <li>
        <Link exact to={`${process.env.PUBLIC_URL}/waiter/order/new`} >New Order</Link>

      </li>
      <li>
        <Link to={`${process.env.PUBLIC_URL}/waiter/order/123`} >Order id</Link>

      </li>
    </ul>

    <Switch>
      <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/new`} component={NewOrder} />
      <Route path={`${process.env.PUBLIC_URL}/waiter/order/:id`} component={Order} />
    </Switch>
  </div>

);

Waiter.propTypes = {
  children: PropTypes.node,
};

export default Waiter;
