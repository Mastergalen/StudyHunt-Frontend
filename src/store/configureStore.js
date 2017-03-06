import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import {browserHistory} from "react-router";
import {routerMiddleware} from "react-router-redux";
import DevTools from "../components/DevTools";
import rootReducer from "../reducers";

const reactRouterMiddleware = routerMiddleware(browserHistory);

const finalCreateStore = compose(
  applyMiddleware(thunk, reactRouterMiddleware),
  DevTools.instrument()
)(createStore);

export default function configureStore() {
  return finalCreateStore(rootReducer);
}
