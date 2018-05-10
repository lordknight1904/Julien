import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Table, { TableBody, TableCell, TableRow } from 'material-ui/Table';
import './Product.css';

class Amenity extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Paper className="productDetailPaper" elevation={ 2 }>
        <Typography align="left" variant="headline" component="h3">
          Amenity
        </Typography>
        <Table className="productTable">
          <TableBody>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Internet</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

Amenity.propTypes = {
  app: PropTypes.object.isRequired,
};

const mapStateToProps = ({app}) => ({
  app,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {},
    dispatch,
  );
export default connect(mapStateToProps, mapDispatchToProps)(Amenity);
