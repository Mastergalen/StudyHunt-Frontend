import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
injectTapEventPlugin();

var buttonStyles = {
  margin: '20px'
}
class Dashboard extends Component {
  state = {
    title: "StudyHunter",
    open: false
  };

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <div>

        <AppBar
        title={this.state.title}
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
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
      </div>
    );
  }
}

export default Dashboard;
