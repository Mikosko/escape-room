import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import { Layout } from './components';
import * as route from './constants/routes';
import Main from './containers/Main';
import Test from './containers/Test';
import { configureStore, history } from './store';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Layout>
        <Route exact path={route.MAIN} component={Main} />
        <Route path={route.TEST} component={Test} />
      </Layout>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
