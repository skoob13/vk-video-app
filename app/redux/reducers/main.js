// Импортим функцию создания редьюсера
import createReducer from '../../helpers/createReducer';

// Импортим все типы событий
import * as types from '../actions/types';
import { LOAD } from 'redux-storage';

// Вся логика обработки - здесь
export const searchedVideos = createReducer({}, {
  [types.SET_SEARCHED_VIDEOS](state, action) {
    let newState = [];
    newState = action.videos;
    return newState;
  },

  [types.SET_MORE_SEARCHED_VIDEOS](state, action) {
    let newState = state.concat(action.videos);
    return newState;
  }
});

// Выставим количество видосиков
export const videosCount = createReducer({}, {
  [types.SET_SEARCHED_VIDEOS](state, action) {
    let count = action.videos.length;
    return count;
  },
  [types.SET_MORE_SEARCHED_VIDEOS](state, action) {
    let newCount = action.videos.length+state;
    return newCount;
  }
});

// Редьюсер для обработки пути приложения
export const navigatorPath = createReducer('Main', {
  [types.SET_NAVIGATOR_PATH](state, action) {
    return action.path;
  }
});

// Применение фильтра для сортировки
export const sort = createReducer(0, {
  [types.SET_SORT_TYPE](state, action) {
    return action.sortType;
  },

  [LOAD](state, action) {
    return action.payload.sort;
  }
});
