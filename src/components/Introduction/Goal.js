import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withStyles } from 'material-ui';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import introductionStyle from '../../assets/jss/components/introductionStyle';

class Goal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
            Goal
          </Typography>
          <Typography variant="body1" gutterBottom align="justify">
            Locate in Thao Dien, center in District 2, near Ha Noi Highway and connects with main traffic flow, Materi
            Thao Dien is right at new city downtown where you can enjoy the view. Connect directly to An Phu Station
            (7th gate),
            Urban Metro Line Ben Thanh - Suoi Tien, It only takes 7 minutes to travel to district 1 and nearby area.
            200m away from Sai
            Gon river, you can enjoy the clear living space with natural sun shine. The harmony of modern and quiet
            green space is the
            hightlight of Masteri Thao Dien
          </Typography>
        </Paper>
      </div>
    );
  }
}

Goal.propTypes = {
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(introductionStyle)(Goal)));
