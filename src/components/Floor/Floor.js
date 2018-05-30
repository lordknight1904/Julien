import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withStyles, Typography, Paper, Tabs, Tab, Grid, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import floorStyle from '../../assets/jss/components/floorStyle';

class Floor extends Component {
  state = {
    value: 0,
    shared: false,
  };

  handleSingle = () => {
    this.setState({ shared: false });
  };
  handleShared = () => {
    this.setState({ shared: true });
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = (index) => {
    this.setState({ value: index });
  };

  render() {
    const { classes } = this.props;
    const { shared } = this.state;
    return (
      <div>
        <div className={classes.banner} />
        <div className={classes.floor}>
          <Paper
            classes={{
              root: classes.paperRoot,
            }}
          >
            <Typography variant="title" gutterBottom align="center">
              Bulding Layout
            </Typography>
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              scrollable
              scrollButtons="on"
              fullWidth
            >
              <Tab classes={{ root: classes.tab }} label="Building 1" />
              <Tab classes={{ root: classes.tab }} label="Building 2" />
              <Tab classes={{ root: classes.tab }} label="Building 3" />
              <Tab classes={{ root: classes.tab }} label="Building 4" />
              <Tab classes={{ root: classes.tab }} label="Apartment - Service - Commercial" />
            </Tabs>
            <SwipeableViews
              index={this.state.value}
              onChangeIndex={this.handleChangeIndex}
            >
              {
                [1, 2, 3, 4, 5].map((m, index) => (
                  <Grid container key={index}>
                    <Grid item xs md={3}>
                      <img
                        src={`../../images/t${m}_thumb.png`}
                        alt="first slide"
                      />
                    </Grid>
                    <Grid item xs md={3}>
                      <Typography variant="title" gutterBottom align="center">
                        Pick layout
                      </Typography>
                      <Button
                        variant="raised"
                        onClick={this.handleSingle}
                        color={shared ? 'default' : 'primary'}
                        fullWidth
                        className={classes.button}
                      >
                        Single Apartment
                      </Button>
                      <Button
                        variant="raised"
                        onClick={this.handleShared}
                        color={shared ? 'secondary' : 'default'}
                        fullWidth
                      >
                        Shared Apartment
                      </Button>
                    </Grid>
                    <Grid item xs md={6}>
                      <img
                        src={!shared ? `../../images/t${m}_dienhinh.jpg` : `../../images/t${m}_ghep.jpg` }
                        alt="first slide"
                      />
                    </Grid>
                  </Grid>
                ))
              }
            </SwipeableViews>
          </Paper>
        </div>
      </div>
    );
  }
}

Floor.propTypes = {
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(floorStyle)(Floor)));
