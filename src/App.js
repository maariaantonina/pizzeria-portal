import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Dashboard from './components/views/Dashboard/Dashboard';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import Waiter from './components/views/Waiter/Waiter';
import Kitchen from './components/views/Kitchen/Kitchen';

function App() {
  return (
    <div className='App'>
      <BrowserRouter basename={'/panel'}>
        <MainLayout>
          <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={Dashboard} />
            <Route path={process.env.PUBLIC_URL + '/login'} component={Login} />
            <Route path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
            <Route path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} />
            <Route path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
          </Switch>
        </MainLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
