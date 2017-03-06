import React, { Component } from 'react';
import {connect} from 'react-redux';
import AppBar from 'material-ui/AppBar';
import { StickyContainer, Sticky } from 'react-sticky';
import * as actions from '../actions/actions';
import Drawer from './partials/Drawer';
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
          <Drawer />
          {this.props.children}
        </StickyContainer>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node.isRequired,
  title: React.PropTypes.string.isRequired,
  dispatch: React.PropTypes.func.isRequired,
  drawerOpen: React.PropTypes.bool.isRequired
}

function mapStateToProps(state) {
  return {
    title: state.ui.title,
    drawerOpen: state.ui.drawerOpen
  }
}

export default connect(mapStateToProps)(App);
