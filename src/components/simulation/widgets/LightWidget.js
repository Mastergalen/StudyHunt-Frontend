import React, {Component} from 'react';

import Widget from "./Widget";

class LightWidget extends Component {
  render() {
    return (
      <Widget title="Lights" backgroundColor="#009688">
        ON
      </Widget>
    );
  }
}

export default LightWidget;
