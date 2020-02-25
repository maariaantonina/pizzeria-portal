import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Dashboard from './components/views/Dashboard/Dashboard';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/TablesContainer';
import Waiter from './components/views/Waiter/WaiterContainer';
import Kitchen from './components/views/Kitchen/Kitchen';
import Order from './components/views/Order/Order';
import NewOrder from './components/views/NewOrder/NewOrder';
import NewEvent from './components/views/NewEvent/NewEvent';
import Event from './components/views/Event/Event';
import Booking from './components/views/Booking/Booking';
import NewBooking from './components/views/NewBooking/NewBooking';

import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#8c9eff',
      contrastText: '#fff',
    },
    secondary: {
      main: '#ff8a80',
    },
    background: {
      default: '#F4F6F8',
      paper: '#fff',
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <BrowserRouter basename={'/panel'}>
          <StylesProvider injectFirst>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <MainLayout>
                <Switch>
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/`}
                    component={Dashboard}
                  />
                  <Route path={process.env.PUBLIC_URL + '/login'} component={Login} />
                  <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
                  <Route
                    path={process.env.PUBLIC_URL + '/tables/booking/new'}
                    component={NewBooking}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + '/tables/booking/:id'}
                    component={Booking}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + '/tables/event/new'}
                    component={NewEvent}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + '/tables/event/:id'}
                    component={Event}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + '/waiter'}
                    component={Waiter}
                  />
                  <Route
                    exact
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
    </Provider>
  );
}

export default App;
