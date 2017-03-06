import * as types from "../constants/actionTypes";

export function setDrawer(isOpen) {
  return {
    type: types.SET_DRAWER,
    drawerOpen: isOpen
  }
}
