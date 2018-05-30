import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withStyles, Typography, Paper, Table, Grid, TableRow, TableBody, TableCell } from '@material-ui/core';
import {
  Train,
} from '@material-ui/icons';
import PropTypes from 'prop-types';
import facilityStyle from '../../assets/jss/components/facilityStyle';

const faci = [
  'Lobby Entrance',
  'Pool',
  'BBQ Area',
  'Garden',
  'Children playground',
  'Outdoor sport yard',
  'Sidewalk',
  'Office',
  'Community Room',
  'Mini-mart',
  'Reception hall',
  'Kid zone',
  'Gym',
  'Library',
  'Underground Parking',
];

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.info}>
        <Paper
          classes={{
            root: classes.paperRoot,
          }}
        >
          <Typography variant="title" gutterBottom align="center">
            Facilities
          </Typography>
          <div className={classes.infoImage} />

          <Grid container spacing={24}>
            <Grid item md xs={12}>
              <Typography variant="title" gutterBottom align="left">
                Facilities in Bld. 1, 2, 3, 4
              </Typography>
              <Grid container>
                {
                  faci.map((f, index) => (
                    <Grid key={index} item md={6} xs={12}>
                      <Typography variant="caption" gutterBottom align="left">
                        {`${index}. ${f}`}
                      </Typography>
                    </Grid>
                  ))
                }
              </Grid>
            </Grid>
            <Grid item md xs={12}>
              <Grid container>
                <Grid item style={{ display: 'flex' }} md={6} xs={12}>
                  <Train />
                  <Typography className={classes.typo} variant="caption" align="left">7th Train Station - An Phu</Typography>
                </Grid>
                <Grid item style={{ display: 'flex' }} md={6} xs={12}>
                  <Train />
                  <Typography className={classes.typo} variant="caption" align="left">Thao Dien Vincom Mega Mall</Typography>
                </Grid>
                <Grid item style={{ display: 'flex' }} md={6} xs={12}>
                  <Train />
                  <Typography className={classes.typo} variant="caption" align="left">School</Typography>
                </Grid>
                <Grid item style={{ display: 'flex' }} md={6} xs={12}>
                  <Train />
                  <Typography className={classes.typo} variant="caption" align="left">Green Space</Typography>
                </Grid>
                <Grid item style={{ display: 'flex' }} md={6} xs={12}>
                  <Train />
                  <Typography className={classes.typo} variant="caption" align="left">Lake</Typography>
                </Grid>
                <Grid item style={{ display: 'flex' }} md={6} xs={12}>
                  <Train />
                  <Typography className={classes.typo} variant="caption" align="left">Outdoor Sport Yard</Typography>
                </Grid>
                <Grid item style={{ display: 'flex' }} md={6} xs={12}>
                  <Train />
                  <Typography className={classes.typo} variant="caption" align="left">Children Playground</Typography>
                </Grid>
                <Grid item style={{ display: 'flex' }} md={6} xs={12}>
                  <Train />
                  <Typography className={classes.typo} variant="caption" align="left">Parking Area</Typography>
                </Grid>
                <Grid item style={{ display: 'flex' }} md={6} xs={12}>
                  <Train />
                  <Typography className={classes.typo} variant="caption" align="left">Entrance</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

Info.propTypes = {
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(facilityStyle)(Info)));
