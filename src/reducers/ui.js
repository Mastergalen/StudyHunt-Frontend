import * as types from "../constants/actionTypes";

const initialState = {
  drawerOpen: false,
  title: "StudyHunt",
};

export default function ui(state = initialState, action) {
  switch (action.type) {
    case types.SET_DRAWER:
      return {
        ...state,
        drawerOpen: action.drawerOpen
      };
    default:
      return state;
  }
}
