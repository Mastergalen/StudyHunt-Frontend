import React, { Component } from 'react';
import {connect} from 'react-redux';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {replace} from "react-router-redux";
import AppBar from 'material-ui/AppBar';
import { StickyContainer, Sticky } from 'react-sticky';
import * as actions from './actions/actions';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
  stickyNav: {
    zIndex: '999'
  }
}

class App extends Component {

  handleMenuToggle() {
    const {dispatch, drawerOpen} = this.props;

    dispatch(actions.setDrawer(!drawerOpen));
  }

  render() {
    const {dispatch, drawerOpen} = this.props;

    return (
      <MuiThemeProvider>
        <StickyContainer>
          <Sticky style={styles.stickyNav}>
            <AppBar
            title={this.props.title}
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onLeftIconButtonTouchTap={this.handleMenuToggle.bind(this)}
            />
          </Sticky>
          <Drawer
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
          </Drawer>
          {this.props.children}
        </StickyContainer>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node.isRequired,
  drawerOpen: React.PropTypes.bool.isRequired,
  title: React.PropTypes.string.isRequired,
  dispatch: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    drawerOpen: state.ui.drawerOpen,
    title: state.ui.title
  }
}

export default connect(mapStateToProps)(App);
