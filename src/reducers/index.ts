import { routerReducer, RouterState } from 'react-router-redux';
import { combineReducers } from 'redux';

export interface RootState {
  router: RouterState;
}

export default combineReducers<RootState>({
  router: routerReducer,
});
