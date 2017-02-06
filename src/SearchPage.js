import React, {Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import Library from 'material-ui/svg-icons/action/account-balance';
import Arrow from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import RaisedButton from 'material-ui/RaisedButton';
class SearchPage extends Component {
  state = {
    title: "StudyHunter",
    open: false
  };

  handleToggle = () => this.setState({open: !this.state.open});


  render() {
    return (
      <div>
        <RaisedButton primary={true} label="< Back" onTouchTap={this.props.changeMain} />
      <div className="list-container">
      <List>
        <ListItem leftIcon={<Library />} rightIcon={<Arrow />} primaryText="Cruciform"/>
      </List>
      </div>
      </div>
    );
  }
}

export default SearchPage;
