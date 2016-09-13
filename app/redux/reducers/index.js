// Метод для комбинирования нескольких редьюсеров в один
import { combineReducers } from 'redux';

// Получаем все редьюсеры для видео
import * as mainReducers from './main';

// Получаем все редьюсеры для стореджа
import * as storageReducers from './storage';

// Совмещаем все редьюсеры в один и экспортим его
export default combineReducers(Object.assign(
  mainReducers,
  storageReducers,
));
