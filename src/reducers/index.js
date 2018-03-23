import { combineReducers } from 'redux';

import generator from './generator';
import generatorState from './generator';

export const initState = [
  ...generatorState
];

export default combineReducers({
  generator
});