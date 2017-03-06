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
        <center><h2> Cruciform </h2>
        <div> Available spaces: </div></center>
      <div style={d3}>
      <div className="seating-area">
      <div className="four-seats">
      <div className="empty-seat"> 1 </div>
      <div className="taken-seat"> 2 </div>
      <div className="table-container"> <div className="table"> Table </div> </div>
      <div className="empty-seat"> 3 </div>
      <div className="empty-seat"> 4 </div>
      </div>
      <div className="four-seats">
      <div className="table-container"> <div className="half-table-top"> Table </div> </div>
      <div className="empty-seat"> 1 </div>
      <div className="taken-seat"> 2 </div>
      <div className="empty-seat"> 3 </div>
      <div className="empty-seat"> 4 </div>
      <div className="table-container"> <div className="half-table-bottom"> Table </div> </div>
      </div>
      <div className="four-seats">
      <div className="empty-seat"> 1 </div>
      <div className="taken-seat"> 2 </div>
      <div className="table-container"> <div className="table"> Table </div> </div>
      <div className="empty-seat"> 3 </div>
      <div className="empty-seat"> 4 </div>
      </div>
      </div>
      <h1></h1>
      </div>
      </div>
    );
  }
}

export default SearchPage;
