import React, {Component} from 'react';
import {connect} from 'react-redux';
import Widget from "./Widget";

class LuminosityWidget extends Component {
  render() {
    return (
      <Widget title="Luminosity" backgroundColor="#009688">
        <p>{this.props.luminosity}</p>
        <p style={{fontSize: '0.5em'}}>Lux</p>
      </Widget>
    );
  }
}

LuminosityWidget.propTypes = {
  luminosity: React.PropTypes.number.isRequired
}

function mapStateToProps(state) {
  return {
    luminosity: state.simulation.luminosity
  }
}

export default connect(mapStateToProps)(LuminosityWidget);
