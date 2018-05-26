import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { withStyles, Drawer, Divider, IconButton, List, ListItem, ListItemText } from '@material-ui/core';
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
