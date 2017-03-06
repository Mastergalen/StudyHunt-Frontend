import React, { Component } from 'react';
import {connect} from 'react-redux';
import MDrawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {replace} from "react-router-redux";
import * as actions from '../../actions/actions';

class Drawer extends Component {
  render() {
    const {dispatch, drawerOpen} = this.props;

    return (
      <MDrawer
        docked={false}
        width={200}
        open={drawerOpen}
        onRequestChange={(open) => {
          dispatch(actions.setDrawer(open));
        }}
      >
        <MenuItem onTouchTap={() => {
          dispatch(replace('/'));
          dispatch(actions.setDrawer(false));
        }}>Home</MenuItem>
        <MenuItem onTouchTap={() => {
          dispatch(replace('/browse'));
          dispatch(actions.setDrawer(false));
        }}>Browse A-Z</MenuItem>
        <MenuItem onTouchTap={() => {
          dispatch(replace('/search'));
          dispatch(actions.setDrawer(false));
        }}>Search</MenuItem>
        <MenuItem onTouchTap={() => {
          console.error('TODO Implement this menu item');
        }}>More info</MenuItem>
      </MDrawer>
    )
  }
}

Drawer.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  drawerOpen: React.PropTypes.bool.isRequired
}

function mapStateToProps(state) {
  return {
    drawerOpen: state.ui.drawerOpen
  }
}

export default connect(mapStateToProps)(Drawer);
