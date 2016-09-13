// Импортим экшены сохранения
import {SET_SETTINGS} from './types';

export function setSettings(settings) {
  return (dispatch, getState) => {
    dispatch(dispatchSetSettings(settings));
  };
}

export function dispatchSetSettings(settings) {
  return {
    type: SET_SETTINGS,
    settings,
  };
}
