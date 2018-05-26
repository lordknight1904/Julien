import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withStyles, Typography, Paper } from '@material-ui/core';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import locationStyle from '../../assets/jss/components/locationStyle';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.map}>
        <Paper
          classes={{
            root: classes.paperRoot,
          }}
        >
          <Typography variant="title" gutterBottom align="center">
            Masteri Thao Dien Location
          </Typography>
          <div className={classes.mapDiv}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: 'AIzaSyAyGZz3u6zK6inOJseuJeHNLhi9TvIDits' }}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            >
              <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text={'Kreyser Avrora'}
              />
            </GoogleMapReact>
          </div>
        </Paper>
      </div>
    );
  }
}

Map.propTypes = {
  classes: PropTypes.object.isRequired,
  center: PropTypes.object.isRequired,
  zoom: PropTypes.number.isRequired,
};

const mapStateToProps = ({ app }) => ({
  app,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {},
    dispatch,
  );
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(locationStyle)(Map)));
