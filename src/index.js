import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from "react-router";
import {syncHistoryWithStore} from "react-router-redux";
import {Provider} from "react-redux";
import routes from "./routes";
import injectTapEventPlugin from 'react-tap-event-plugin';
import DevTools from "./components/DevTools";
import configureStore from "./store/configureStore";

import './css/index.css';

const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history} children={routes} />
      {process.env.NODE_ENV !== 'production' && <DevTools />}
    </div>
  </Provider>,
  document.getElementById('root')
);
