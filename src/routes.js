import React from 'react';
import {IndexRoute, Route} from 'react-router';

import BrowseAZ from './BrowseAZ.js';
import SearchPage from './SearchPage';
import App from './App';
import Dashboard from './Dashboard';
import LibrarySimulator from './simulation/LibrarySimulator';

const Routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Dashboard}/>
    <Route path="browse" component={BrowseAZ}/>
    <Route path="search" component={SearchPage}/>
    <Route path="simulator" component={LibrarySimulator} />
  </Route>
);

export default Routes;
