import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0,
  },
  inner: {
    minWidth: 800,
    padding: 2,
  },
  form: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
}));

const demoProducts = [
  { id: 'cake', name: `Zio Stefano's Doughnut`, price: 9 },
  {
    id: 'breakfast',
    name: `Zia Giulia's Breakfast`,
    price: 9,
    params: { coffee: { type: 'radios', options: { latte: { price: 1 } } } },
  },
];

const NewOrder = () => {
  const classes = useStyles();
  const [values, setValues] = useState({
    table: '',
    order: [],
  });

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <Grid container spacing={4}>
      <Grid item lg={8} md={12} xl={9} xs={12}>
        <Card className={classes.root}>
          <CardHeader title='New Order' />
          <Divider />
          <CardContent className={classes.content}>
            <div className={classes.inner}>
              <form autoComplete='off' noValidate className={classes.form}>
                <Grid container spacing={2} alignItems='center'>
                  <Grid item md={4} xs={12}>
                    <TextField
                      label='Select Table Number'
                      name='table'
                      onChange={handleChange}
                      required
                      select
                      value={values.table}
                      variant='outlined'
                      fullWidth
                    >
                      {[1, 2, 3, 4, 5, 6].map(option => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item md={5} xs={12}>
                    <TextField
                      fullWidth
                      label='Add Product'
                      name='order'
                      onChange={handleChange}
                      required
                      select
                      value={values.order}
                      variant='outlined'
                    >
                      {demoProducts.map(product => (
                        <option key={product} value={product.id}>
                          {product.name}
                        </option>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item md={2} xs={12}>
                    <Button color='primary' fullWidth variant='outlined' size='large'>
                      Add
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </div>
            <Divider />
            <div className={classes.inner}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Number</TableCell>
                    <TableCell>Product</TableCell>
                    <TableCell>Options</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody></TableBody>
              </Table>
            </div>
            <Button
              color='primary'
              size='small'
              variant='outlined'
              component={Link}
              to={`${process.env.PUBLIC_URL}/waiter/order/123`}
            >
              Save
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

NewOrder.propTypes = {
  children: PropTypes.node,
};

export default NewOrder;
