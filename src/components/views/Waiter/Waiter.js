import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/styles';
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

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0,
  },
  inner: {
    minWidth: 800,
  },
}));

const demoContent = [
  { id: '1', status: 'free', order: null },
  { id: '2', status: 'thinking', order: null },
  { id: '3', status: 'ordered', order: 123 },
  { id: '4', status: 'prepared', order: 234 },
  { id: '5', status: 'delivered', order: 345 },
  { id: '6', status: 'paid', order: 456 },
];

const renderActions = status => {
  switch (status) {
    case 'free':
      return (
        <>
          <Button>thinking</Button>
          <Button>new order</Button>
        </>
      );
    case 'thinking':
      return <Button>new order</Button>;
    case 'ordered':
      return <Button>prepared</Button>;
    case 'prepared':
      return <Button>delivered</Button>;
    case 'delivered':
      return <Button>paid</Button>;
    case 'paid':
      return <Button>free</Button>;
    default:
      return null;
  }
};

const Waiter = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={4}>
      <Grid item lg={8} md={12} xl={9} xs={12}>
        <Card className={classes.root}>
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
          <CardContent className={classes.content}>
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
                  {demoContent.map(row => (
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
                      <TableCell>{renderActions(row.status)}</TableCell>
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
};

export default Waiter;
