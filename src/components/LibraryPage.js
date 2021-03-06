import React, {Component} from 'react';
import 'whatwg-fetch';
import { Circle } from 'rc-progress';
import { Link } from 'react-router';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import SeatMap from './partials/SeatMap.jsx';
import { browserHistory } from 'react-router';
import env from '../constants/env';


class LibraryPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      libraryName: '',
      libraryCapacity: '',
      availableSeats: '',
      willBeBusy: false,
      seats: [],
      counter: 0,
      availablePercentage: 0
    }
  }

  async getLibrary() {
    try {
      let res = await fetch(`${env.BACKEND_URL}/api/v1/libraries/${this.props.params.libraryId}`)

      let json = await res.json();
      let percentage = parseInt((json.available * 100)/json.capacity, 10);

      this.setState({
        libraryName: json.name,
        libraryCapacity: json.capacity,
        availableSeats: json.available,
        willBeBusy: json.willBeBusy,
        seats: json.seats.spaceMap.seats,
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

  render() {
    let busyWarning = null;

    if(this.state.willBeBusy) {
      busyWarning = (
        <Card style={{maxWidth: 500, margin: '0 auto', marginBottom: 20, backgroundColor: '#FFA726'}}>
          <CardHeader
            title="Warning"
          />
          <CardText>
            Usually, it will get busy soon
          </CardText>
        </Card>
      );
    }

    return (
      <div >
        <RaisedButton className="back-button" primary={true} label="< Back" onTouchTap={browserHistory.goBack}/>
        <Link to={'/library/' + this.props.params.libraryId + '/history'} key="history" style={{textDecoration:'none'}}>
          <RaisedButton className="stats-button" primary={true} label="Stats"/>
        </Link>
        <center>
          <h2> {this.state.libraryName} </h2>
        </center>
        <div className="libraryInfo">
          <div className="circleSizeLibrary">
            <Circle percent={this.state.availablePercentage} strokeWidth="10" trailWidth="10" strokeColor="#43A047 "/>
          </div>
          <div className="infoText">
            <div className="infoTextinner">
              <div className="spaceText"> Available spaces: {this.state.availableSeats}</div>
              <div className="spaceText"> Capacity: {this.state.libraryCapacity}</div>
            </div>
          </div>
        </div>
        {busyWarning}
        <SeatMap seats={this.state.seats} />
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
