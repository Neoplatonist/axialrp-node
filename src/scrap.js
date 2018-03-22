import React from 'react';
import createHistory from 'history/createBrowserHistory';
import { 
  applyMiddleware,
  combineReducers, 
  compose,
  createStore
} from 'redux';
import thunk from 'redux-thunk';
import generator from './reducers';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { 
  ConnectedRouter, 
  routerReducer, 
  routerMiddleware 
} from 'react-router-redux';
import App from './app';
import './index.css';

//import registerServiceWorker from './registerServiceWorker'

const history = createHistory();
const middleware = applyMiddleware(
  thunk, 
  routerMiddleware(history)
);

// For chrome Redux dev extension
const enhancer = window.devToolsExtension ? window.devToolsExtension() : f => f;
let store;

export const configStore = (initialState = {}) => {
  store = createStore(
    combineReducers({
      generator,
      router: routerReducer
    }),
    initialState,
    compose(middleware, enhancer)
  );

  store.asyncReducers = {};
  return store;
};



if (window.DATA && window.DATA !== '{{data}}') {
  window.DATA=JSON.parse(window.atob(window.DATA));
} else {
  window.DATA = {};
}

render (
  <Provider store={configStore()}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
, document.getElementById('root')
);

//registerServiceWorker()
