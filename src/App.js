import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import MainPage from './MainPage.js';
import BrowseAZ from './BrowseAZ.js';
import SearchPage from './SearchPage.js';
import { StickyContainer, Sticky } from 'react-sticky';
import { Link } from 'react-router';

var stickyNavStyle = {
  zIndex: '999'
}

class App extends Component {
  state = {
    title: "StudyHunter",
    open: false,
  };
  handleToggle = () => this.setState({open: !this.state.open});
  render() {
    return (
      <MuiThemeProvider>
      <div>
      <StickyContainer>
        <Sticky style={stickyNavStyle}>
        <AppBar
        title={this.state.title}
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        onLeftIconButtonTouchTap={this.handleToggle}

        />
          </Sticky>
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <Link to="/" style={{textDecoration:'none'}}><MenuItem >Home</MenuItem></Link>
          <Link to="/browse" style={{textDecoration:'none'}}><MenuItem>Browse A-Z</MenuItem></Link>
          <Link to="/search" style={{textDecoration:'none'}}><MenuItem>Search</MenuItem></Link>
          <Link to="/" style={{textDecoration:'none'}}><MenuItem>More info</MenuItem></Link>
        </Drawer>


        </StickyContainer>
        {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
