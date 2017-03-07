import * as types from "../constants/actionTypes";

const initialState = {
  socket: null,
  temperature: "N/A",
  lights: "N/A"
};

export default function ui(state = initialState, action) {
  switch (action.type) {
    case types.SERVER_CONNECTED:
      return {
        ...state,
        socket: action.socket
      };
    case types.UPDATE_FRONTEND: {
      return {
        ...state,
        temperature: action.temperature,
        lights: action.lights
      }
    }
    case types.SERVER_DISCONNECTED: {
      return {
        ...initialState
      }
    }
    default:
      return state;
  }
}
