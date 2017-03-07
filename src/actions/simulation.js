import io from "socket.io-client";
import Debug from "debug";
import env from "../constants/env";
import * as types from "../constants/actionTypes";

const debug = Debug('app:simulation');

export function connectToServer() {
  return (dispatch, getState) => {
    const { socket } = getState().simulation;

    let newSocket = socket;

    if(newSocket === null) {

      newSocket = io(env.BACKEND_URL);

      newSocket.on('connect',() => {
        debug('Connected');
        dispatch(connected(newSocket));
      });

      newSocket.on('UPDATE_FRONTEND', (payload) => {
        dispatch(updateFrontend(payload));
      });

      newSocket.on('disconnect', () => {
        debug('Disconnected');

        dispatch(disconnected());
      });
    }
  }
}

export function connected(socket) {
  return {
    type: types.SERVER_CONNECTED,
    socket
  }
}

export function disconnected() {
  return {
    type: types.SERVER_DISCONNECTED
  }
}

export function updateFrontend(payload) {
  return {
    type: types.UPDATE_FRONTEND,
    ...payload
  }
}
