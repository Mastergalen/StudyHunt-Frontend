import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import CardExample from './CardExample.js';
import { StickyContainer, Sticky } from 'react-sticky';

injectTapEventPlugin();

var buttonStyles = {
  margin: '20px'
}
var stickyNavStyle = {
  zIndex: '999'
}
var cards = [];

class Dashboard extends Component {
  state = {
    title: "StudyHunter",
    open: false
  };

  handleToggle = () => this.setState({open: !this.state.open});

  expandedCards(){

    for(var i=0;i<=20;i++)
    cards.push(<CardExample />);
  }
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

        <div >
        <RaisedButton style={buttonStyles} primary={true} label="Browse A-Z" />
        <RaisedButton style={buttonStyles} primary={true} label="Search" />
        </div>

        {this.expandedCards()}
        {cards}
        </StickyContainer>
      </div>
    );
  }
}

export default Dashboard;
