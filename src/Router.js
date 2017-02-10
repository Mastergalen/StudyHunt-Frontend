import React, { Component } from 'react';
import { Router as ReactRouter, IndexRoute, Route, Link, browserHistory } from 'react-router'

import Chart from './d3/Chart';
import App from './App';
import Dashboard from './Dashboard';

export default class Router extends Component {
  render() {
    return(
      <ReactRouter history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Dashboard}/>
          <Route path="chart" component={Chart}/>
        </Route>
      </ReactRouter>
    );
  }
}
