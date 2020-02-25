import React from 'react';
import PropTypes from 'prop-types';

import NewBooking from '../NewBooking/NewBooking';
import NewEvent from '../NewEvent/NewEvent';

import { withStyles } from '@material-ui/styles';
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
import Paper from '@material-ui/core/Paper';

const styles = {
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
    //marginLeft: theme.spacing(1),
    //marginRight: theme.spacing(1),
    width: 200,
  },
  buttons: {
    marginLeft: 'auto',
  },
};

class Tables extends React.Component {
  constructor(props) {
    super(props);
    let today = new Date();
    let currentDate = today.toISOString().slice(0, 10);
    this.state = {
      selectedDate: currentDate,
      display: {
        NewBooking: 'none',
        Booking: 'none',
        NewEvent: 'none',
        Event: 'none',
      },
    };
  }

  toggleDisplay = (e, name) => {
    this.setState({
      [name]: 'block',
    });
  };

  handleDateChange = date => {
    this.setState({ currentDate: date });
  };

  render() {
    const { loading: { active, error }, tables } = this.props;
    const Hours = [];
    const halfHour = ['00', '30'];
    for (let i = 12; i < 24; i++) {
      for (let j = 0; j < 2; j++) {
        Hours.push(('0' + i).slice(-2) + ':' + halfHour[j]);
      }
    }

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
            <Card className={styles.root}>
              <CardHeader
                action={
                  <form className={styles.input_container} noValidate>
                    <TextField
                      id="date"
                      label="Date"
                      type="date"
                      defaultValue={this.state.selectedDate}
                      onChange={this.handleDateChange}
                      className={styles.textField}
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
                  className={styles.buttons}
                  color='primary'
                  size='small'
                  variant='outlined'
                  onClick={e => this.BookingtoggleDisplay(e, 'NewBooking')}
                >
                  New booking
                </Button>

                <Button
                  color='primary'
                  size='small'
                  variant='outlined'
                  name='NewEvent'
                  onClick={e => this.toggleDisplay(e, 'NewEvent')}
                >
                  New event
                </Button>
              </CardActions>

              <Divider />
              <CardContent className={styles.content}>
                <div className={styles.inner}>
                  <TableContainer className={styles.container}>
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
          <Grid item lg={4} md={12} xl={3} xs={12}>
            <NewBooking display={this.state.display.NewBooking} />
            <NewEvent display={this.state.display.NewEvent} />
          </Grid>
        </Grid>
      );
    }
  }
}

Tables.propTypes = {
  fetchTables: PropTypes.func,
  loading: PropTypes.shape({
    active: PropTypes.bool,
    error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  }),
  tables: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default withStyles(styles)(Tables);
