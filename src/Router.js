import React, { Component } from 'react';
import { Router as ReactRouter, IndexRoute, Route, Link, browserHistory } from 'react-router'

import Chart from './d3/Chart';
import App from './App';
import BrowseAZ from './BrowseAZ';
import MainPage from './MainPage';
import SearchPage from './SearchPage';
import LibraryPage from './LibraryPage';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

export default class Router extends Component {
  render() {
    return(
      <ReactRouter history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={MainPage}/>
          <Route path="chart" component={Chart}/>
          <Route path="browse" component={BrowseAZ}/>
          <Route path="search" component={SearchPage}/>
          <Route path="library" component={LibraryPage}/>
        </Route>
      </ReactRouter>
    );
  }
}
