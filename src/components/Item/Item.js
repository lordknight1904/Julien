import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { fetchTitle } from '../../reducers/App/app';
import './Item.css';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
    };
  }


  componentDidMount() {
    // this.getData();
  }

  getData = () => {
    setTimeout(() => {
      this.setState({ url: 'images/aokhoac.jpg' });
    }, 1000);
  };

  render() {
    return (
      <Link
        to="/product"
      >
        <Card className="cardContainer">
          <CardMedia
            className="cardMedia"
            image='images/download.jpeg'
          />
          <CardContent className="itemContent">
            <Typography
              align="left"
              gutterBottom
              variant="display1"
            >
              Apartment
            </Typography>
            <Typography
              align="justify"
              variant="headline"
            >
              3.000.000.000đ
            </Typography>
          </CardContent>
        </Card>
      </Link>
    );
  }
}

Item.propTypes = {
  app: PropTypes.object.isRequired,
};

const mapStateToProps = ({ app }) => ({
  app,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchTitle,
    },
    dispatch,
  );
export default connect(mapStateToProps, mapDispatchToProps)(Item);
