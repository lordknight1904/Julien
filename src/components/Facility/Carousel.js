import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withStyles, Paper } from '@material-ui/core';
import Carousel from 'react-slick';
import PropTypes from 'prop-types';
import facilityStyle from '../../assets/jss/components/facilityStyle';


class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slickPlay: true,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className={classes.info}>
        <Paper
          classes={{
            root: classes.paperRoot,
          }}
        >
          <Carousel {...settings}>
            {
              ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'].map((m, index) => (
                <div key={index}>
                  <img
                    src={`../../images/${m}.jpg`}
                    alt={`${index} slide`}
                    className="slick-image"
                  />
                </div>
              ))
            }
          </Carousel>
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
