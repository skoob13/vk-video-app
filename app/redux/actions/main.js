import * as types from './types';
import api from '../../helpers/api';
import config from '../../config';

// Здесь только простые функции, без какой либо обработки
export function fetchVideos(searchText, offset = 0) {
  return (dispatch, getState) => {
    // Получим исходную сортировку
    let state = getState();

    api.get('/video.search', {
      body: {
        access_token: config.token,
        q: searchText,
        filters: "mp4",
        extended: "1",
        count: "20",
        sort: state.sort,
        offset: offset,
        adult: state.settings.adult,
        hd: state.settings.hd,
      }
    }).then((response)=>{
      // Не знаю насколько правильно делать именно так. То есть вызывать две
      // разные функции диспатча для разных параметров offset
      if (offset === 0)
        dispatch(setFetchedVideos({videos: response.body.response}));
      else
        dispatch(setMoreFetchedVideos({videos: response.body.response}));
    }).catch( (ex) => console.log(ex));
  }
}

// Экшн для фетча на листвью
export function setFetchedVideos({videos}) {
  return {
    type: types.SET_SEARCHED_VIDEOS,
    videos
  };
}

// Экшн для вызова в методе подгрузки доп. видео
export function setMoreFetchedVideos({videos}) {
  return {
    type: types.SET_MORE_SEARCHED_VIDEOS,
    videos
  }
}

// Экшн для создания стейта навигатора
export function setNavigatorPath(path) {
  return {
    type: types.SET_NAVIGATOR_PATH,
    path
  }
}

// Экшн сортировки
export function setSortType(sortType) {
  return {
    type: types.SET_SORT_TYPE,
    sortType
  }
}
