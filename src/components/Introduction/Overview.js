import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withStyles } from 'material-ui';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import introductionStyle from '../../assets/jss/components/introductionStyle';

class Overview extends Component {
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
            Overview
          </Typography>
          <Table className={classes.table}>
            <TableBody>
              <TableRow>
                <TableCell>
                  Gross Floor Area (GFA)
                </TableCell>
                <TableCell>
                  79,839 m²
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  Scale
                </TableCell>
                <TableCell>
                  Apartment in four towers from the 41 to 45 floor, a 44 story height building for Apartment - Service
                  - Conmmercial and Thao Dien Vincom Mega Mall Complex
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  Building coverage ratio
                </TableCell>
                <TableCell>
                  34,74%
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  Green space
                </TableCell>
                <TableCell>
                  60% (included lake, parks, sidewalk, street, garden, swimming pool ...)
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  Unit Area
                </TableCell>
                <TableCell>
                  45-100 m²
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  Construction Period
                </TableCell>
                <TableCell>
                  From 2014 first Quarter
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  Estimated Completion
                </TableCell>
                <TableCell>
                  2016 Fourth Quarter
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  Ownership
                </TableCell>
                <TableCell>
                  Permanent
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  Unit type
                </TableCell>
                <TableCell>
                  1 Bedroom <br />
                  2 Bedroom <br />
                  3 Bedroom <br />
                  Combined <br />
                  Shophouse <br />
                  Duplex <br />
                  Penthouse
                </TableCell>
              </TableRow>

            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

Overview.propTypes = {
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(introductionStyle)(Overview)));
