// Импортим экшены из стореджа
import { LOAD_SETTINGS, SET_SETTINGS } from '../actions/types';
// Импортим функцию создания редьюсера
import createReducer from '../../helpers/createReducer';
import { LOAD } from 'redux-storage';
// Редьюсер для обработки пути приложения
export const settings = createReducer({adult: 0, hd: 0}, {
  [SET_SETTINGS](state, action) {
    let newState = { ...state, ...action.settings };
    console.log(newState)
    return newState;
  },

  [LOAD](state, action) {
    return action.payload.settings;
  }
});
