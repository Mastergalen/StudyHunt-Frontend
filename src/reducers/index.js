import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import ui from "./ui";
import simulation from "./simulation";

const rootReducer = combineReducers({
  ui,
  simulation,
  routing: routerReducer
});

export default rootReducer;
