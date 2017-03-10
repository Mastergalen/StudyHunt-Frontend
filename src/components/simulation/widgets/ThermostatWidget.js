import React, {Component} from 'react';
import {connect} from 'react-redux';
import Widget from "./Widget";

const styles = {
  roomTemp: {
    fontSize: '0.5em',
  }
}

class ThermostatWidget extends Component {
  render() {
    return (
      <Widget title="Thermostat">
        <p>{this.props.temperature}°C</p>
        <p style={styles.roomTemp}>Room temperature: {this.props.roomTemperature}°C</p>
      </Widget>
    );
  }
}

ThermostatWidget.propTypes = {
  temperature: React.PropTypes.string.isRequired,
  roomTemperature: React.PropTypes.string.isRequired
}

function mapStateToProps(state) {
  return {
    temperature: state.simulation.temperature,
    roomTemperature: state.simulation.roomTemperature
  }
}

export default connect(mapStateToProps)(ThermostatWidget);
