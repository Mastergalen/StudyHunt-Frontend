import React, {Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import {Link} from 'react-router';
import Library from 'material-ui/svg-icons/action/account-balance';
import Arrow from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import RaisedButton from 'material-ui/RaisedButton';

class BrowseAZ extends Component {
  render() {
    return (
      <div>
        <Link to="/">
          <RaisedButton primary={true} className="back-button" label="< Back"> </RaisedButton>
        </Link>
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
