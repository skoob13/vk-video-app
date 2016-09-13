// Совмещаю все созданные в один объект
import * as MainActions from './main';
import * as StorageActions from './storage';

export const ActionCreators = Object.assign(
  MainActions,
  StorageActions,
);
