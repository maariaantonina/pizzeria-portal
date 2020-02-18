import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/styles';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0,
  },
  inner: {
    minWidth: 800,
  },
  container: {
    maxHeight: 440,
  },
  input_container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  buttons: {
    marginLeft: 'auto',
  },
}));

const Tables = () => {
  const classes = useStyles();
  const Hours = [];
  const halfHour = ['00', '30'];
  for (let i = 12; i < 24; i++) {
    for (let j = 0; j < 2; j++) {
      Hours.push(('0' + i).slice(-2) + ':' + halfHour[j]);
    }
  }

  let today = new Date();
  let currentDate = today.toISOString().slice(0, 10);
  const [selectedDate, setSelectedDate] = useState(currentDate);

  const handleDateChange = date => {
    setSelectedDate(date);
  };
  return (
    <Grid container spacing={4}>
      <Grid item lg={8} md={12} xl={9} xs={12}>
        <Card className={classes.root}>
          <CardHeader
            action={
              <form className={classes.input_container} noValidate>
                <TextField
                  id="date"
                  label="Date"
                  type="date"
                  defaultValue={selectedDate}
                  onChange={handleDateChange}
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </form>
            }
            title='Tables'
          />
          <CardActions >
            <Button
              className={classes.buttons}
              component={Link}
              color='primary'
              size='small'
              variant='outlined'
              to={`${process.env.PUBLIC_URL}/tables/booking/new`}
            >
              New booking
            </Button>

            <Button
              component={Link}
              color='primary'
              size='small'
              variant='outlined'
              to={`${process.env.PUBLIC_URL}/tables/event/new`}
            >
              New event
            </Button>
          </CardActions>

          <Divider />
          <CardContent className={classes.content}>
            <div className={classes.inner}>
              <TableContainer className={classes.container}>
                <Table stickyHeader aria-label='sticky table'>
                  <TableHead>
                    <TableRow>
                      <TableCell></TableCell>
                      <TableCell>Table 1</TableCell>
                      <TableCell>Table 2</TableCell>
                      <TableCell>Table 3</TableCell>
                      <TableCell>Table 4</TableCell>
                      <TableCell>Table 5</TableCell>
                      <TableCell>Table 6</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {Hours.map(row => (
                      <TableRow hover key={row}>
                        <TableCell>{row}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

Tables.propTypes = {
  children: PropTypes.node,
};

export default Tables;
