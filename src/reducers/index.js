import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import ui from "./ui";

const rootReducer = combineReducers({
  ui,
  routing: routerReducer
});

export default rootReducer;
