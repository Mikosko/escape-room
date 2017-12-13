import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import { reducer as services } from './Services';
import { reducer as statusInfo } from './StatusInfo';

export default combineReducers<AppState>({
  router: routerReducer,
  statusInfo,
  services,
});
