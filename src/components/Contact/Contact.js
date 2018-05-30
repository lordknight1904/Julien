import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withStyles, Paper, Grid, Typography } from '@material-ui/core';
import {
  LocalPhone,
  Email,
} from '@material-ui/icons';
import PropTypes from 'prop-types';
import contactStyle from '../../assets/jss/components/contactStyle';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
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
              Contact
            </Typography>

            <Grid container spacing={40}>
              <Grid item md={6} xs>
                <LocalPhone />
                <Typography variant="body1" gutterBottom align="left">
                  01219187548
                </Typography>
              </Grid>
              <Grid item md={6} xs>
                <Email />
                <Typography variant="body1" gutterBottom align="left">
                  lordknight1904@gmail.com
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(contactStyle)(Contact)));
