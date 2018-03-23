// import createHistory from 'history/createBrowserHistory';
import { applyMiddleware, createStore, compose } from 'redux';
// import { routerMiddleware } from 'react-router-redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
//import createLogger from 'redux-logger'
//import createSagaMiddleware from 'redux-saga'

//const logger = createLogger()
//const sagaMiddleware = createSagaMiddleware()

const configureStore = (initialState = {}) => {

  // Create the store with two middlewares
  const middlewares = [
    thunk,
  //  sagaMiddleware
  //, logger
  ];

  const enhancers = [
    applyMiddleware(...middlewares)
    // window.devToolsExtension
    //   ? window.devToolsExtension() 
    //     : f => f
  ];

  const store = createStore(
    reducers, 
    initialState, 
    compose(...enhancers)
  );

  // Extensions
  //store.runSaga = sagaMiddleware.run
  store.asyncReducers = {};
  // Async reducer registry

  return store;
};

export default configureStore;