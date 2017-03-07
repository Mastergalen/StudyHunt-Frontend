import React, {Component} from 'react';
import Dashboard from 'react-dazzle';
import ThermostatWidget from './widgets/ThermostatWidget';
import CustomFrame from './widgets/CustomFrame';
import LightWidget from './widgets/LightWidget';

import 'react-dazzle/lib/style/style.css';
import '../../css/grid.css';

class LibrarySimulator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      widgets: {
        Thermostat: {
          type: ThermostatWidget,
          title: 'Thermostat'
        },
        Light: {
          type: LightWidget,
          title: 'Lights',
          backgroundColor: '#009688'
        }
      },
      layout: {
        rows: [{
          columns: [
            {
              className: 'col-md-6',
              widgets: [{key: 'Thermostat'}],
            },
            {
              className: 'col-md-6',
              widgets: [{key: 'Light'}],
            }
          ],
        }],
      }
    };
  }

  render() {
    return(
      <div className="main-container container">
        <Dashboard widgets={this.state.widgets} layout={this.state.layout} frameComponent={CustomFrame} />
      </div>
    );
  }
}

export default LibrarySimulator;
