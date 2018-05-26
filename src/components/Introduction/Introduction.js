import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withStyles } from 'material-ui';
import PropTypes from 'prop-types';
import introductionStyle from '../../assets/jss/components/introductionStyle';
import Overview from './Overview';
import Goal from './Goal';
import License from './License';

class Introduction extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.banner} />
        <Overview />
        <Goal />
        <License />
      </div>
    );
  }
}

Introduction.propTypes = {
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(introductionStyle)(Introduction)));
