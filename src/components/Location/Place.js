import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withStyles } from 'material-ui';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import Grid from '@material-ui/core/Grid';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import locationStyle from '../../assets/jss/components/locationStyle';

class Place extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.place}>
        <Paper
          classes={{
            root: classes.paperRoot,
          }}
        >
          <Typography variant="title" gutterBottom align="center">
            Place
          </Typography>
          <Grid container spacing={24}>
            <Grid item md xs={12}>
              <div className={classes.placeImage} />
            </Grid>
            <Grid item md xs={12}>
              <Typography variant="body1" gutterBottom align="justify">
                Locate in Thao Dien, center in District 2, near Ha Noi Highway and connects with main traffic flow, Materi
                Thao Dien is right at new city downtown where you can enjoy the view.
              </Typography>
              <Typography variant="body1" gutterBottom align="justify">
                Connect directly to An Phu Station
                (7th gate),
                Urban Metro Line Ben Thanh - Suoi Tien, It only takes 7 minutes to travel to district 1 and nearby area.
                200m away from Sai
                Gon river, you can enjoy the clear living space with natural sun shine.
              </Typography>
              <Typography variant="body1" gutterBottom align="justify">
                The harmony of modern and quiet
                green space is the
                hightlight of Masteri Thao Dien
              </Typography>
              <Grid container spacing={24}>
                <Grid item md xs={12}>
                  <Typography variant="body1" color="secondary" gutterBottom align="justify">
                    Easy to commute to the city center
                  </Typography>
                  <Table className={classes.table}>
                    <TableBody>
                      <TableRow>
                        <TableCell padding="none">
                          District 1
                        </TableCell>
                        <TableCell padding="none">
                          7 minutes
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell padding="none">
                          Thu Thiem Resident
                        </TableCell>
                        <TableCell padding="none">
                          7 minutes
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell padding="none">
                          District 7
                        </TableCell>
                        <TableCell padding="none">
                          7 minutes
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell padding="none">
                          Tan Son Nhat Airport
                        </TableCell>
                        <TableCell padding="none">
                          7 minutes
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </Grid>
                <Grid item md xs={12}>
                  <Typography variant="body1" color="secondary" gutterBottom align="justify">
                    Nearby Tourist Attractions and Provinces
                  </Typography>
                  <Table className={classes.table}>
                    <TableBody>
                      <TableRow>
                        <TableCell padding="none">
                          Bien Hoa City
                        </TableCell>
                        <TableCell padding="none">
                          30 minutes
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell padding="none">
                          Binh Duong City
                        </TableCell>
                        <TableCell padding="none">
                          40 minutes
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell padding="none">
                          Vung Tau City
                        </TableCell>
                        <TableCell padding="none">
                          A hour and 20 minutes
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

Place.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ app }) => ({
  app,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {},
    dispatch,
  );
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(locationStyle)(Place)));
