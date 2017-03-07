import React, {Component} from 'react';
import {connect} from 'react-redux';
import Widget from "./Widget";

class LightWidget extends Component {
  render() {
    return (
      <Widget title="Lights" backgroundColor="#009688">
        {this.props.lights}
      </Widget>
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
