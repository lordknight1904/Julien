import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Table, TableBody, TableCell, TableRow, Typography, Paper } from '@material-ui/core';
import './Product.css';

class Overview extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Paper className="productDetailPaper" elevation={2}>
        <Typography align="left" variant="headline" component="h3">
          OVERVIEW
        </Typography>
        <Table className="productTable">
          <TableBody>
            <TableRow>
              <TableCell>Address</TableCell>
              <TableCell>110/28</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Street</TableCell>
              <TableCell>some street</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>District</TableCell>
              <TableCell>1</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>City</TableCell>
              <TableCell>Ho Chi Minh</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Area</TableCell>
              <TableCell>100m2</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Room</TableCell>
              <TableCell>2</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Bathroom</TableCell>
              <TableCell>2</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Price/Rent</TableCell>
              <TableCell>3.000.000.000/1.500.000 đ</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

Overview.propTypes = {
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
export default connect(mapStateToProps, mapDispatchToProps)(Overview);
