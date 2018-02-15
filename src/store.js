import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers.js'
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';

//import createLogger from 'redux-logger'
//import createSagaMiddleware from 'redux-saga'

//const logger = createLogger()
//const sagaMiddleware = createSagaMiddleware()
const history = createHistory();

const middleware = applyMiddleware(thunk, routerMiddleware(history));
const enhancer = window.devToolsExtension ? window.devToolsExtension() : f => f;

export default initialState => createStore(reducers, initialState, compose(middleware, enhancer));

// export default function configureStore(initialState = {}) {
//   // Create the store with two middlewares
//   const middlewares = [
//   //  sagaMiddleware
//   //, logger
//   ]

//   const enhancers = [
//     applyMiddleware(...middlewares)
//   ]

//   const store = createStore(
//     reducers, 
//     initialState, 
//     compose(...enhancers)
//   )

//   // Extensions
//   //store.runSaga = sagaMiddleware.run
//   store.asyncReducers = {} // Async reducer registry

//   return store
// }
