import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link, withRouter } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import Hidden from '@material-ui/core/Hidden';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';
import List, { ListItem, ListItemText } from 'material-ui/List';
import { withStyles } from 'material-ui';
import headerStyle from '../../assets/jss/components/headerStyle';
import { fetchTitle } from '../../reducers/App/app';


class Sidebar extends Component {
  render() {
    const { open } = this.props;
    return (
      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
      >
        <div className="drawerSidebar">
          <IconButton onClick={this.handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List component="nav">
          <ListItem button>
            <ListItemText primary="Product" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Sales" />
          </ListItem>
        </List>
        <Divider />
        <List component="nav">
          <ListItem button>
            <ListItemText primary="Trash" />
          </ListItem>
          <ListItem
            button
            component="a"
            href="#simple-list"
          >
            <ListItemText primary="Spam" />
          </ListItem>
        </List>
      </Drawer>
    );
  }
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
  app: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(headerStyle)(Sidebar)));
