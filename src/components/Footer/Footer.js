import React from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import { withStyles } from 'material-ui';
import PropTypes from 'prop-types';
import footerStyle from '../../assets/jss/components/footerStyle';

function Footer({ ...props }) {
  const { classes } = props;
  return (
    <footer className={`${classes.gutters} ${classes.footer}`}>
      <Grid
        className="footer"
        container
        justify="center"
        spacing={16}
      >
        <Grid className={classes.footerDisclaimer} item md sm xs={12}>
          <Typography
            variant="caption"
            color="inherit"
            className={classes.disclaimer}
          >
            Disclaimer
          </Typography>
        </Grid>
      </Grid>
      <Divider light classes={{ light: classes.light }} />
      <Grid className="footer" container justify="center" spacing={16}>
        <Grid className={classes.footerCopyright} item md sm xs>
          <Typography
            variant="subheading"
            color="inherit"
            className={classes.copyRight}
          >
            &copy; 2018 &middot; Ngo Anh Khoa &middot; Horizon Inc.
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(footerStyle)(Footer);
