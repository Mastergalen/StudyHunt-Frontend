import React, {Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import Library from 'material-ui/svg-icons/action/account-balance';
import Arrow from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import 'whatwg-fetch';
import { Link } from 'react-router';
const underlineStyle = {
  borderColor: 'orange'
}
var d3 = {
  width:'100%',
  height: '300px',
  backgroundColor: 'orange'
}
class SearchPage extends Component {
  state = {
    open: false
  };

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <div >
      <Link to="/browse"><RaisedButton className="back-button" primary={true} label="< Back" /></Link>
        <center><h2> Cruciform </h2></center>
      <div style={d3}>
      <h1> d3.js thingy </h1>
      </div>
      </div>
    );
  }
}

export default SearchPage;
