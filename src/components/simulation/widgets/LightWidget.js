import React, {Component} from 'react';
import {connect} from 'react-redux';
import SeatMap from "../../partials/SeatMap.jsx";
import env from '../../../constants/env';

class LightWidget extends Component {
  constructor(props) {
    super(props);

    this.interval = 0;

    this.state = {
      seats: []
    }
  }

  componentWillMount() {
    this.getLibrary();

    this.interval = setInterval(this.getLibrary.bind(this), 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  async getLibrary() {
    let resSearch = await fetch(`${env.BACKEND_URL}/api/v1/search?q=Engineering Hub`);
    resSearch = await resSearch.json();

    let engineerHubId = resSearch[0].id;

    let res = await fetch(`${env.BACKEND_URL}/api/v1/libraries/${engineerHubId}`)

    let json = await res.json();

    this.setState({
      seats: json.seats.spaceMap.seats
    });
  }

  render() {
    const {lights} = this.props;

    let isOn = lights === 'ON';

    return (
      <div>
        <SeatMap seats={this.state.seats} isLightOn={isOn}/>
      </div>
    );
  }
}

LightWidget.propTypes = {
  lights: React.PropTypes.string.isRequired
}

function mapStateToProps(state) {
  return {
    lights: state.simulation.lights
  }
}

export default connect(mapStateToProps)(LightWidget);
