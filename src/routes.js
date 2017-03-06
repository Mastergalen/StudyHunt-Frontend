import React from 'react';
import {IndexRoute, Route} from 'react-router';

import BrowseAZ from './components/BrowseAZ.js';
import SearchPage from './components/SearchPage';
import App from './components/App';
import Dashboard from './components/Dashboard';
import LibrarySimulator from './components/simulation/LibrarySimulator';

const Routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Dashboard}/>
    <Route path="browse" component={BrowseAZ}/>
    <Route path="search" component={SearchPage}/>
    <Route path="simulator" component={LibrarySimulator} />
  </Route>
);

export default Routes;
