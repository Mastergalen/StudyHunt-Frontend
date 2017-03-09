import React, {Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import Library from 'material-ui/svg-icons/action/account-balance';
import Arrow from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import 'whatwg-fetch';
import { Link } from 'react-router';
import { browserHistory } from 'react-router'
import env from '../constants/env';

const underlineStyle = {
  borderColor: 'orange'
}
class SearchPage extends Component {
  state = {
    libraryName: '',
    libraryCapacity: '',
    availableSeats: '',
    seats: [],
    counter: 0
  }
  async getLibrary() {

      try {
        let res = await fetch(`${env.BACKEND_URL}/api/v1/libraries/${this.props.params.libraryid}`)

        let json = await res.json();
        var seats = [];
        var counter = 0;
        for(var i = 0; i< json.capacity; i+=4){
          seats.push({table:counter++,
                      seat1: json.seats.spaceMap.seats[i],
                      seat2: json.seats.spaceMap.seats[i+1],
                      seat3: json.seats.spaceMap.seats[i+2],
                      seat4: json.seats.spaceMap.seats[i+3]})
        }
        this.setState({libraryName: json.name,
                       libraryCapacity: json.capacity,
                       availableSeats: json.available,
                       seats: seats});
      } catch (ex) {
        console.log('parsing failed', ex)
      }
  }
  componentDidMount(){
    this.getLibrary();
    this._interval = setInterval(() => this.getLibrary(), 5000);
  }
  componentWillUnmount(){
    clearInterval(this._interval);
  }
  /*
  <div className="four-seats">
  <div className="table-container"> <div className="half-table-top"> Table </div> </div>
  <div className="empty-seat"> 1 </div>
  <div className="taken-seat"> 2 </div>
  <div className="empty-seat"> 3 </div>
  <div className="empty-seat"> 4 </div>
  <div className="table-container"> <div className="half-table-bottom"> Table </div> </div>
  </div>
  */
  render() {
    return (
      <div >
      <RaisedButton className="back-button" primary={true} label="< Back" onTouchTap={browserHistory.goBack}/>
        <center>
          <h2> {this.state.libraryName} </h2>
          <div> Available spaces: {this.state.availableSeats}</div>
          <div> Capacity: {this.state.libraryCapacity}</div>
        </center>
       <div className="seating-area">
      {

        this.state.seats.map(function(item,i) {
          return(
            <div className="four-seats" key={i}>
            {item.seat1.is_vacant ? <div className="empty-seat"> 1 </div> : <div className="taken-seat"> 1 </div>}
            {item.seat2.is_vacant ? <div className="empty-seat"> 2 </div> : <div className="taken-seat"> 2 </div>}
            <div className="table-container"> <div className="table"> Table </div> </div>
            {item.seat3.is_vacant ? <div className="empty-seat"> 3 </div> : <div className="taken-seat"> 3 </div>}
            {item.seat4.is_vacant ? <div className="empty-seat"> 4 </div> : <div className="taken-seat"> 4 </div>}
            </div>)
        })
      }
      </div>
      </div>
    );
  }
}

export default SearchPage;
