// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import app from './app';

const rootReducer = combineReducers({
  router,
  app
});

export default rootReducer;
