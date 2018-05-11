import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Card, { CardActions, CardMedia } from 'material-ui/Card';
import Table, { TableBody, TableCell, TableRow } from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import { fetchTitle, setHelmet } from '../../reducers/App/app';
import './Product.css';
import Overview from './Overview';
import Amenity from './Amenity';
import Map from './Map';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSrc: '',
    };
  }

  componentDidMount() {
    this.props.setHelmet('Product', 'Product Page');
    this.init();
    if (window) {
      window.scrollTo(0, 0);
    }
  }

  onMouseOver = (selectedSrc) => {
    this.setState({ selectedSrc });
  };
  onClick = (selectedSrc) => {
    this.setState({ selectedSrc });
  };
  init = () => {
    this.setState({ selectedSrc: 'images/download.jpeg' });
  };

  render() {
    // const { app } = this.props;
    const { selectedSrc } = this.state;
    return (
      <div className="App" style={{ paddingTop: '64px', paddingBottom: '35px' }}>
        <h2>
          Apartment Detail
        </h2>
        <div className="content">
          <Grid container spacing={16}>
            <Grid item md sm xs={12}>
              <Card>
                <CardMedia
                  className="productCard"
                  image={selectedSrc}
                />
                <CardActions className="productActions">
                  {
                    ['images/download.jpeg', 'images/download1.jpeg', 'images/download2.jpeg'].map((src, index) => (
                      <IconButton
                        className={`productImage ${selectedSrc === src ? 'productImageHighlight' : ''}`}
                        key={index}
                        aria-label="images"
                        onFocus={() => this.onMouseOver(src)}
                        onMouseOver={() => this.onMouseOver(src)}
                        onClick={() => this.onClick(src)}
                      >
                        <img src={src} alt="images" height="48" width="48" />
                      </IconButton>
                    ))
                  }
                </CardActions>
              </Card>
            </Grid>
            <Grid item md sm xs={12}>
              <Overview />
            </Grid>
          </Grid>
          <Grid className="productDetailPanels" container spacing={40}>
            <Grid item md sm xs={12}>
              <Amenity />
            </Grid>
            <Grid item md sm xs={12}>
              <Map
                isMarkerShown
                loadingElement={<div style={{ height: '100%' }} />}
                containerElement={<div style={{ height: '400px' }} />}
                mapElement={<div style={{ height: '100%' }} />}
              />
            </Grid>
            <Grid item md sm xs={12}>
              <Paper elevation={2} className="productDetailPaper">
                <Typography align="left" variant="headline" component="h3">
                  NOTICE
                </Typography>
                <Table className="productTable">
                  <TableBody>
                    <TableRow>
                      <TableCell>Notice 1</TableCell>
                      <TableCell>blah blah blah</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Notice 2</TableCell>
                      <TableCell>etc etc etc</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  app: PropTypes.object.isRequired,
  setHelmet: PropTypes.func.isRequired,
};

const mapStateToProps = ({ app }) => ({
  app,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setHelmet,
      fetchTitle,
    },
    dispatch,
  );
export default connect(mapStateToProps, mapDispatchToProps)(Product);
