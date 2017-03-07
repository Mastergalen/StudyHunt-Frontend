import React, {Component} from 'react';
import {connect} from 'react-redux';
import Dashboard from 'react-dazzle';
import ThermostatWidget from './widgets/ThermostatWidget';
import CustomFrame from './widgets/CustomFrame';
import LightWidget from './widgets/LightWidget';

import * as simulationActions from '../../actions/simulation';

import 'react-dazzle/lib/style/style.css';
import '../../css/grid.css';

class LibrarySimulator extends Component {
  componentWillMount() {
    const {dispatch} = this.props;

    dispatch(simulationActions.connectToServer());
  }

  constructor(props) {
    super(props);

    this.state = {
      widgets: {
        Thermostat: {
          type: ThermostatWidget,
        },
        Light: {
          type: LightWidget
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

LibrarySimulator.propTypes = {
  dispatch: React.PropTypes.func.isRequired
}

export default connect()(LibrarySimulator);
