import React, {Component} from 'react';
import {connect} from 'react-redux';
import Widget from "./Widget";

class ThermostatWidget extends Component {
  render() {
    return (
      <Widget title="Thermostat">
        {this.props.temperature}°C
      </Widget>
    );
  }
}

ThermostatWidget.propTypes = {
  temperature: React.PropTypes.string.isRequired
}

function mapStateToProps(state) {
  return {
    temperature: state.simulation.temperature
  }
}

export default connect(mapStateToProps)(ThermostatWidget);
