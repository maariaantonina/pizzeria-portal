import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Dashboard from './components/views/Dashboard/Dashboard';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import Waiter from './components/views/Waiter/Waiter';
import Kitchen from './components/views/Kitchen/Kitchen';
import Order from './components/views/Order/Order';
import NewOrder from './components/views/NewOrder/NewOrder';

import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#8c9eff',
      contrastText: '#fff',
    },
    secondary: {
      main: '#ff8a80',
    },
  },
});

function App() {
  return (
    <div className='App'>
      <BrowserRouter basename={'/panel'}>
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            <MainLayout>
              <Switch>
                <Route
                  exact
                  path={`${process.env.PUBLIC_URL}/`}
                  component={Dashboard}
                />
                <Route path={process.env.PUBLIC_URL + '/login'} component={Login} />
                <Route path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
                <Route
                  exact
                  path={process.env.PUBLIC_URL + '/waiter'}
                  component={Waiter}
                />
                <Route
                  path={process.env.PUBLIC_URL + '/waiter/order/new'}
                  component={NewOrder}
                />
                <Route
                  path={process.env.PUBLIC_URL + '/waiter/order/:id'}
                  component={Order}
                />
                <Route path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
              </Switch>
            </MainLayout>
          </ThemeProvider>
        </StylesProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
