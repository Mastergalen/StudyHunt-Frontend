import React, {Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import Library from 'material-ui/svg-icons/action/account-balance';
import Arrow from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import RaisedButton from 'material-ui/RaisedButton';
class BrowseAZ extends Component {
  state = {
    title: "StudyHunter",
    open: false
  };

  handleToggle = () => this.setState({open: !this.state.open});


  render() {
    return (
      <div>
        <RaisedButton primary={true} className="back-button" label="< Back" onTouchTap={this.props.changeMain}> </RaisedButton>
      <div className="list-container">
      <List>
        <ListItem leftIcon={<Library />} rightIcon={<Arrow />} primaryText="Cruciform"/>
        <ListItem leftIcon={<Library />} rightIcon={<Arrow />}primaryText="Science Library"/>
        <ListItem leftIcon={<Library />} rightIcon={<Arrow />}primaryText="Main Library"/>
        <ListItem leftIcon={<Library />} rightIcon={<Arrow />} primaryText="Cruciform"/>
      </List>
      </div>
      </div>
    );
  }
}

export default BrowseAZ;
