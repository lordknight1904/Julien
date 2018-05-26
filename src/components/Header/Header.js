import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from 'material-ui/IconButton';
import Hidden from '@material-ui/core/Hidden';
import { withStyles } from 'material-ui';
import Button from '@material-ui/core/Button';
import { fetchTitle } from '../../reducers/App/app';
import headerStyle from '../../assets/jss/components/headerStyle';
import paths from '../paths';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shrink: false,
      open: false,
    };
    this.shrink = false;
    this.pathBool = false;
  }

  componentDidMount() {
    if (window) {
      window.addEventListener('scroll', this.onScroll);
    }
  }

  onScroll = (event) => {
    if (window) {
      const document = event.target.scrollingElement;
      const { scrollTop } = document;
      const { innerHeight } = window;
      if (scrollTop > innerHeight * 0.2) {
        if (!this.shrink) {
          this.setState({ shrink: true });
          this.shrink = true;
        }
      } else if (this.shrink) {
        this.setState({ shrink: false });
        this.shrink = false;
      }
    }
  };
  handleDrawerOpen = () => {
    this.setState({ open: true });
  };
  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { app, classes } = this.props;
    const { shrink } = this.state;
    return (
      <div>
        <AppBar
          position="fixed"
          className={classes.appbar}
        >
          <Toolbar
            classes={{
              gutters: classes.gutters,
              root: shrink ? classes.rootExtended : '',
            }}
          >
            <Hidden mdUp>
              <IconButton
                color="inherit"
                aria-label="Menu"
                onClick={this.handleDrawerOpen}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Hidden mdDown>
              <Typography
                variant="title"
                color="inherit"
                className="flex"
              >
                <Link
                  to="/"
                  className={classes.headerLink}
                >
                  {app.appName}
                </Link>
              </Typography>
              {
                paths.map((p, index) => (
                  <Link
                    key={index}
                    to={p.path}
                    className={classes.headerLink}
                  >
                    <Button color="default">
                      {p.title}
                    </Button>
                  </Link>
                ))
              }
            </Hidden>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  app: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(headerStyle)(Header)));
