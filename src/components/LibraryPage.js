import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import 'whatwg-fetch';
import { browserHistory } from 'react-router';
import env from '../constants/env';
import { Circle } from 'rc-progress';

class LibraryPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      libraryName: '',
      libraryCapacity: '',
      availableSeats: '',
      seats: [],
      counter: 0,
      availablePercentage: 0
    }
  }

  async getLibrary() {
    try {
      let res = await fetch(`${env.BACKEND_URL}/api/v1/libraries/${this.props.params.libraryId}`)

      let json = await res.json();
      var percentage = parseInt((json.available * 100)/json.capacity, 10);
      var seats = [];
      var counter = 0;
      for(var i = 0; i< json.capacity; i+=4){
        seats.push({table:counter++,
          seat1: json.seats.spaceMap.seats[i],
          seat2: json.seats.spaceMap.seats[i+1],
          seat3: json.seats.spaceMap.seats[i+2],
          seat4: json.seats.spaceMap.seats[i+3]
        });
      }

      this.setState({
        libraryName: json.name,
        libraryCapacity: json.capacity,
        availableSeats: json.available,
        seats: seats,
        availablePercentage: percentage
      });
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
        </center>
        <div className="libraryInfo">
          <div className="circleSizeLibrary">
            <Circle percent={this.state.availablePercentage} strokeWidth="10" trailWidth="10" strokeColor="#43A047 " trailColor="#ffcdd2"/>
          </div>
          <div className="infoText">
            <div className="infoTextinner">
              <div className="spaceText"> Available spaces: {this.state.availableSeats}</div>
              <div className="spaceText"> Capacity: {this.state.libraryCapacity}</div>
            </div>
          </div>
        </div>
       <div className="seating-area">
      {

        this.state.seats.map(function(item,i) {
          return(
            <div className="four-seats" key={i}>
              {item.seat1.is_vacant ? <div className="empty-seat"> {item.seat1.id} </div> : <div className="taken-seat"> {item.seat1.id} </div>}
              {item.seat2.is_vacant ? <div className="empty-seat"> {item.seat2.id} </div> : <div className="taken-seat"> {item.seat2.id} </div>}
              <div className="table-container"> <div className="table"> Table </div> </div>
              {item.seat3.is_vacant ? <div className="empty-seat"> {item.seat3.id} </div> : <div className="taken-seat"> {item.seat3.id} </div>}
              {item.seat4.is_vacant ? <div className="empty-seat"> {item.seat4.id} </div> : <div className="taken-seat"> {item.seat4.id} </div>}
            </div>)
        })
      }
      </div>
      </div>
    );
  }
}

LibraryPage.propTypes = {
  params: React.PropTypes.shape({
    libraryId: React.PropTypes.string.isRequired
  })
};

export default LibraryPage;
