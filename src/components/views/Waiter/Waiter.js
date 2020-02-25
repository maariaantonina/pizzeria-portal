import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './Waiter.module.scss';

import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';

const classes = {
  root: {},
  content: {
    padding: 0,
  },
  inner: {
    minWidth: 800,
  },
};

class Waiter extends React.Component {
  componentDidMount() {
    const { fetchTables } = this.props;
    fetchTables();
  }

  renderActions(id, status) {
    const { changeStatus } = this.props;
    switch (status) {
      case 'free':
        return (
          <>
            <Button onClick={() => changeStatus({ id, status: 'thinking' })}>thinking</Button>
            <Button >new order</Button>
          </>
        );
      case 'thinking':
        return (
          <Button >new order</Button>
        );
      case 'ordered':
        return (
          <Button onClick={() => changeStatus({ id, status: 'prepared' })}>prepared</Button>
        );
      case 'prepared':
        return (
          <Button onClick={() => changeStatus({ id, status: 'delivered' })}>delivered</Button>
        );
      case 'delivered':
        return (
          <Button onClick={() => changeStatus({ id, status: 'paid' })}>paid</Button>
        );
      case 'paid':
        return (
          <Button onClick={() => changeStatus({ id, status: 'free' })}>free</Button>
        );
      default:
        return null;
    }
  }

  render() {
    const { loading: { active, error }, tables } = this.props;
    console.log(tables);

    if (active || !tables.length) {
      return (
        <Paper className={styles.component}>
          <p>Loading...</p>
        </Paper>
      );
    } else if (error) {
      return (
        <Paper className={styles.component}>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </Paper>
      );
    } else {
      return (
        <Grid container spacing={4}>
          <Grid item lg={8} md={12} xl={9} xs={12}>
            <Card>
              <CardHeader
                action={
                  <Button
                    component={Link}
                    color='primary'
                    size='small'
                    variant='outlined'
                    to={`${process.env.PUBLIC_URL}/waiter/order/new`}
                  >
                    New order
                  </Button>
                }
                title='Waiter panel'
              />

              <Divider />
              <CardContent >
                <div className={classes.inner}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Table</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Order</TableCell>
                        <TableCell>Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {tables.map(row => (
                        <TableRow hover key={row.id}>
                          <TableCell component='th' scope='row'>
                            {row.id}
                          </TableCell>
                          <TableCell>{row.status}</TableCell>
                          <TableCell>
                            {row.order && (
                              <Button
                                component={Link}
                                to={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`}
                              >
                                {row.order}
                              </Button>
                            )}
                          </TableCell>
                          <TableCell>{this.renderActions(row.id, row.status)}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      );
    }
  }
}

Waiter.propTypes = {
  fetchTables: PropTypes.func,
  loading: PropTypes.shape({
    active: PropTypes.bool,
    error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  }),
  tables: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  changeStatus: PropTypes.func,
};

export default withStyles(classes)(Waiter);
