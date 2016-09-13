import config from '../config';

// Импортим типы экшенов
import { SET_SETTINGS } from './actions/types';

// Импортим методы?
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';

// Импортим редьюсеры из индекса
import reducer from './reducers';

// Импортим пакет для асинхронных вызовов и возвращение промисов
import thunkMiddleware from 'redux-thunk';

// Импортим логгер
import createLogger from 'redux-logger';

// Импортим сторедж
import * as storage from 'redux-storage';
import createEngine from 'redux-storage-engine-reactnativeasyncstorage';

// Импортим декоратор для сохранения только части дерева
import filter from 'redux-storage-decorator-filter';

// Создаем логгер и проверяем, что рантайм находится в дебаге
const loggerMiddleware = createLogger({ predicate: (getState, action) => true});

// Создаем загрузчик для редукс стореджа
const engine = createEngine(config.storageKey);

// Оборачиваем энжин для сохранения части дерева
engine = filter(engine, ['settings', 'sort']);

// Создаем миддл стореджа
const storageMiddleware = storage.createMiddleware(engine);

// Функция для создания стореджа и настройки миддла
export default function configureStore(initialState) {
  const storeConfiguration = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
      storageMiddleware,
    ),
  );

  const store = createStore(reducer, initialState, storeConfiguration);
  const load = storage.createLoader(engine);
  load(store)
    .then((newState) => {console.log('Loaded state:', newState)})
    .catch(() => console.log('Failed to load previous state'));

  // Возвращаем функцию создания стора из редьюсеров, начального стейта и конфига
  return store;
}
