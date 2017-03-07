import React, {Component} from 'react';
import Widget from "./Widget";

class ThermostatWidget extends Component {
  render() {
    return (
      <Widget title="Thermostat">
        22.0°C
      </Widget>
    );
  }
}

export default ThermostatWidget;
