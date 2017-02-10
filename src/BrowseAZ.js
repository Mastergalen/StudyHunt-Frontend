import React, {Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import Library from 'material-ui/svg-icons/action/account-balance';
import Arrow from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router';
class BrowseAZ extends Component {
  state = {
    title: "StudyHunter",
    open: false
  };

  handleToggle = () => this.setState({open: !this.state.open});


  render() {
    return (
      <div>
        <Link to="/"><RaisedButton primary={true} className="back-button" label="< Back"></RaisedButton> </Link>
      <div className="list-container">
      <List>
        <Link to="library" style={{textDecoration:'none'}}><ListItem leftIcon={<Library />} rightIcon={<Arrow />} primaryText="Cruciform"/></Link>
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
