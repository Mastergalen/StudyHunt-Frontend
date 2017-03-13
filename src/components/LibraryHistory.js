import React, { Component } from 'react';
import {makeWidthFlexible, XYPlot, XAxis, YAxis, Hint, HorizontalGridLines, LineMarkSeries} from 'react-vis';
import env from '../constants/env';

import RaisedButton from 'material-ui/RaisedButton';
import { browserHistory } from 'react-router';

import "react-vis/dist/style.css";

const FlexibleXYPlot = makeWidthFlexible(XYPlot);

class LibraryHistory extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: null,
      hint: null,
      yMax: null,
    }
  }

  async componentWillMount() {
    let res = await fetch(`${env.BACKEND_URL}/api/v1/libraries/${this.props.params.libraryId}/history`)

    let json = await res.json();

    let yMax = 0;
    for(let i = 0; i < json.history.length; i++) {
      json.history[i].x = Date.parse(json.history[i]['time']);
      json.history[i].y = json.history[i]['vacantSeats'];

      if(json.history[i].y > yMax) {
        yMax = json.history[i].y;
      }

      delete json.history[i].time;
      delete json.history[i].vacantSeats;
    }

    this.setState({
      data: json.history,
      yMax: yMax * 1.2
    });
  }

  _rememberHint(hint) {
    this.setState({hint});
  }

  _forgetHint() {
    this.setState({
      hint: null
    });
  }

  render() {
    const {hint} = this.state;
    return (
      <div>
        <div className="title-back">
          <div><RaisedButton className="back-button" primary={true} label="< Back" onTouchTap={browserHistory.goBack}/></div>
          <h3 className="stats-title">Free Seats Last 24 hours</h3>
        </div>
        <FlexibleXYPlot
          height={600}
          xType="time-utc"
          yType="linear"
          yDomain={[0, this.state.yMax]}
        >
          <HorizontalGridLines />
          <LineMarkSeries
            data={this.state.data}
            size={5}
            onValueMouseOver={this._rememberHint.bind(this)}
            onValueMouseOut={this._forgetHint.bind(this)}
          />
          <XAxis title="Time" />
          <YAxis title="Free seats" />
          {hint ?
            <Hint value={hint}/> :
            null
          }
        </FlexibleXYPlot>
      </div>
    );
  }
}

export default LibraryHistory;
