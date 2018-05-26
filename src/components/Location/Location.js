import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withStyles } from 'material-ui';
import PropTypes from 'prop-types';
import introductionStyle from '../../assets/jss/components/introductionStyle';
import Place from './Place';
import Map from './Map';

class Location extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.banner} />
        <Place />
        <Map
          center={{
            lat: 59.95,
            lng: 30.33,
          }}
          zoom={11}
        />
      </div>
    );
  }
}

Location.propTypes = {
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(introductionStyle)(Location)));
