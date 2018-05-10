import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import './Product.css';

class Amenity extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Paper className="productDetailPaper" elevation={2}>
        <Typography align="left" variant="headline" component="h3">
          Amenities
        </Typography>
        <Grid className="productDetailGrid" container spacing={16}>
          <Grid item md sm xs>
            image
          </Grid>
          <Grid item md sm xs>
            Internet
          </Grid>
          <Grid item md sm xs>
            image
          </Grid>
          <Grid item md sm xs>
            Wifi
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

Amenity.propTypes = {
  app: PropTypes.object.isRequired,
};

const mapStateToProps = ({ app }) => ({
  app,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {},
    dispatch,
  );
export default connect(mapStateToProps, mapDispatchToProps)(Amenity);
