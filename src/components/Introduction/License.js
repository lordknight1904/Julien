import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withStyles, Typography, Paper } from '@material-ui/core';
import PropTypes from 'prop-types';
import introductionStyle from '../../assets/jss/components/introductionStyle';

class License extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.overview}>
        <Paper
          classes={{
            root: classes.paperRoot,
          }}
        >
          <Typography variant="title" gutterBottom align="center">
            License
          </Typography>
          <div className={classes.licenseImage}>

          </div>
        </Paper>
      </div>
    );
  }
}

License.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ app }) => ({
  app,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
    },
    dispatch,
  );
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(introductionStyle)(License)));
