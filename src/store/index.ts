import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, createStore, Store } from 'redux';
import { createFetcher, logger } from '../middleware';
import { GlobalConfig } from '../middleware/fetcher';
import rootReducer from '../reducers';

const configureFetch: GlobalConfig = {
  rootUrl: 'http://localhost:8000/',
};

export const history = createHistory();
const router = routerMiddleware(history);
const fetcher = createFetcher(configureFetch);
export function configureStore(initialState?: AppState): Store<AppState> {
  const create = window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore;

  const createStoreWithMiddleware = applyMiddleware(router, fetcher, logger)(create);

  const store = createStoreWithMiddleware(rootReducer, initialState) as Store<AppState>;

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
