import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles, Grid, Typography } from '@material-ui/core';
import { FormGroup, FormControl, Button } from 'react-bootstrap';
import enquireStyle from '../../assets/jss/components/enquireStyle';

class Enquire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }

  onEmail = (event) => {
    this.setState({ email: event.target.value });
  };
  onNewsLetter = () => {
    this.setState({ email: '' });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid
          className={classes.grid}
          container
          justify="center"
        >
          <Grid className="footerColumn" item md sm xs={12}>
            <Typography
              variant="headline"
              color="inherit"
              className="flex"
            >
              Enquire
            </Typography>
            <p>Facebook</p>
            <p>Twitter</p>
          </Grid>
          <Grid className="footerColumn" item md sm xs={12}>
            <h3>Register for the latest Apartments</h3>
            <FormGroup className={classes.formGroup}>
              <FormControl
                className={classes.formControl}
                type="text"
                placeholder="Email"
                onChange={this.onEmail}
                value={this.state.email}
              />
              <Button className={classes.button} onClick={this.onNewsLetter}>Sign Up</Button>
            </FormGroup>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Enquire.propTypes = {
  classes: PropTypes.object.isRequired,
};
const mapStateToProps = ({ app }) => ({
  app,
});
export default connect(mapStateToProps)(withStyles(enquireStyle)(Enquire));
