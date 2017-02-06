import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import MainPage from './MainPage.js';
import BrowseAZ from './BrowseAZ.js';
import SearchPage from './SearchPage.js';
import { StickyContainer, Sticky } from 'react-sticky';

injectTapEventPlugin();

var buttonStyles = {
  margin: '20px'
}
var stickyNavStyle = {
  zIndex: '999'
}

class Dashboard extends Component {
  state = {
    title: "StudyHunter",
    open: false,
    browseBtn: false,
    searchBtn: false
  };
  changeBrowse = () => this.setState({browseBtn: true, searchBtn: false});
  changeSearch = () => this.setState({searchBtn: true, browseBtn: false});
  changeMain = () => this.setState({browseBtn: false, searchBtn: false});
  ifNotMain(){
    if(this.state.browseBtn===true&&this.state.searchBtn===false)
    return (<BrowseAZ changeMain={this.changeMain} />);
    else if(this.state.browseBtn===false&&this.state.searchBtn===true)
          return (<SearchPage changeMain={this.changeMain} />);
          else
              return (<MainPage changeBrowse={this.changeBrowse} changeSearch={this.changeSearch}/>);
  }
  handleToggle = () => this.setState({open: !this.state.open});


  render() {
    return (
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
          <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
        </Drawer>

        {this.ifNotMain()}

        </StickyContainer>
      </div>
    );
  }
}

export default Dashboard;
