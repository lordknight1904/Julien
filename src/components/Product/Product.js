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

  init = () => {
    this.setState({ selectedSrc: 'images/aokhoac.jpg' });
  };
  onMouseOver = (selectedSrc) => {
    this.setState({ selectedSrc });
  };
  onClick = (selectedSrc) => {
    this.setState({ selectedSrc });
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
                    ['images/aokhoac.jpg', 'images/clothes1.jpg', 'images/clothes2.jpg', 'images/clothes3.jpg'].map((src, index) => (
                      <IconButton
                        className={`productImage ${selectedSrc === src ? 'productImageHighlight' : 'abc'}`}
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
              <Paper elevation={2} className="productDetailPaper">
                <Typography align="left" variant="headline" component="h3">
                  DIMENSIONS (CM)
                </Typography>
                <Table className="productTable">
                  <TableBody>
                    <TableRow>
                      <TableCell>Height</TableCell>
                      <TableCell>156</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Width</TableCell>
                      <TableCell>80</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Depth</TableCell>
                      <TableCell>80</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Paper>
            </Grid>
            <Grid item md sm xs={12}>
              <Paper elevation={2} className="productDetailPaper">
                <Typography align="left" variant="headline" component="h3">
                  DELIVERY & RETURNS
                </Typography>
                <Table className="productTable">
                  <TableBody>
                    <TableRow>
                      <TableCell>Dispatch</TableCell>
                      <TableCell>Within 2 weeks</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Delivery</TableCell>
                      <TableCell>$5.95</TableCell>
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
